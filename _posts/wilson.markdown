---
layout: post.html
title: "Wilson Lives!"
image: wilson.jpg
date: 2015-04-27 19:27:14
description: Wilson is now driving! 
tags: [Mechanical, Robotics, Electrical, Software, Controls, Fabrication, comprobotics]
---

Wilson is now driving!

<iframe width="560" height="315" src="https://www.youtube.com/embed/GTRMEl4-ePc" frameborder="0" allowfullscreen></iframe>

There's just enough room to squeeze on a full 2014 FRC control system, which MetalCow (at least right now) has laying around. It's plenty of processing power at the moment- though I envision that I'll later switch to a Raspberry Pi or some other simalar board. A jaguar motor controller is hooked up to each motor over PWM. They're a little big, but they fit, we have them, they aren't in demand for other purposes, and they're quiet.

<image src="/assets/images/wilson/427.jpg">

Kiwibots are very agile and not very pushy. And this one is small. Perfect to play soccer! So I added a ball collector/flinger with the FRC KOP window motors. For the 2012 FRC basketballs, they provide plenty of intake power, but not enough propulsion for my liking. I'll probably add some sort of actual kicker mechanism.

<image src="/assets/images/wilson/intake.jpg">

Java is nice for code. So I'm sticking with it for right now. I'm using a <a href="http://www.kauailabs.com/store/index.php?route=product/product&product_id=50">Kauai Labs nav6 IMU</a> linked to the cRIO for gyroscope stuff.

Here's the drivetrain class code:

    package edu.wpi.first.wpilibj.templates;

    import com.kauailabs.nav6.frc.BufferingSerialPort;
    import com.kauailabs.nav6.frc.IMU;
    import com.sun.squawk.util.MathUtils;
    import edu.wpi.first.wpilibj.Jaguar;
    import edu.wpi.first.wpilibj.Timer;
    import edu.wpi.first.wpilibj.smartdashboard.SmartDashboard;
    import edu.wpi.first.wpilibj.visa.VisaException;

    public class KiwiDrive {
        Jaguar motorFR = new Jaguar(3);
        Jaguar motorFL = new Jaguar(2);
        Jaguar motorB = new Jaguar(1);
        
        double distBX = 0.0*1.154;
        double distBY = -1.0*1.154;
        double distFRX = 0.866*1.154;
        double distFRY = 0.5*1.154;
        double distFLX = -0.866*1.154;
        double distFLY = 0.5*1.154;
        
        
        BufferingSerialPort imuSerialPort = null;
        IMU imu = null;
        
        boolean regulated = false;
        Timer lockonFilter = null;
        boolean fieldOriented = false;
        double targetHeading = 0;
        
        public double[] headingErrorHistory = new double[50];
        public int headingErrorIndex = 0;
        
        public KiwiDrive() {
            try{
                imuSerialPort = new BufferingSerialPort (57600);
                imu = new IMU(imuSerialPort, (byte)75);
            }catch(VisaException e){
                imuSerialPort = null;
                imu = null;
            }
            for(int i=0;i<headingErrorHistory.length;i++)
                headingErrorHistory[i]=0;
        }
        
        public void toggleRegulation() {
            regulated = !regulated;
            if (regulated)
                for(int i=0;i<headingErrorHistory.length;i++)
                    headingErrorHistory[i]=0;
        }
        
        public void toggleFieldOriented() {
            if (fieldOriented) fieldOriented = false;
            else {
                fieldOriented = true;
                targetHeading = 0;
                for(int i=0;i<headingErrorHistory.length;i++)
                    headingErrorHistory[i]=0;
                if(imu != null)
                    imu.zeroYaw();
            }
        }
        
        public double getCurrentHeading() {
            if (imu == null)
                return 0;
            
            /*if(firstIteration && !imu.isCalibrating()){
                System.out.println("Finished calibrating nav6...");
                Timer.delay(0.3);
                imu.zeroYaw();
                firstIteration=false;
            }*/
            return imu.getYaw();
        }
        
        public void setHeading(double newHeading) {
            targetHeading = newHeading;
            if (!regulated)
                for(int i=0;i<headingErrorHistory.length;i++)
                   headingErrorHistory[i]=0;
            regulated = true;
        }
        
        public double getHeadingError() {
            if (imu == null)
                return 0;
            double error = targetHeading - getCurrentHeading();
            while (error>180) error-=360;
            while (error<-180) error+=360;
            return error;
        }
        
        public void putRequiredDashboardValues() {
            try{SmartDashboard.getNumber("HeadingResponseKP");
            }catch(Exception e){SmartDashboard.putNumber("HeadingResponseKP", 75);
            }
            try{SmartDashboard.getNumber("HeadingResponseKPE");
            }catch(Exception e){SmartDashboard.putNumber("HeadingResponseKPE", 0.75);
            }
            try{SmartDashboard.getNumber("HeadingResponseKI");
            }catch(Exception e){SmartDashboard.putNumber("HeadingResponseKI", 10000);
            }
            try{SmartDashboard.getNumber("HeadingResponseKD");
            }catch(Exception e){SmartDashboard.putNumber("HeadingResponseKD", 180);
            }
        }
        
        public double getHeadingResponse() {
            double thisError = getHeadingError();
            
            double integral = 0;
            for (int i=0;i<headingErrorHistory.length;i++)
                integral += headingErrorHistory[i];
            
            double derivative = thisError-headingErrorHistory[headingErrorIndex];
                    
            headingErrorIndex++;
            if (headingErrorIndex>=headingErrorHistory.length)
                headingErrorIndex=0;
            headingErrorHistory[headingErrorIndex] = thisError;
            
            
            return signnum(thisError)*MathUtils.pow(Math.abs(thisError/SmartDashboard.getNumber("HeadingResponseKP",75)), SmartDashboard.getNumber("HeadingResponseKPE",0.75))
                    + integral/SmartDashboard.getNumber("HeadingResponseKI",10000)
                    + derivative/SmartDashboard.getNumber("HeadingResponseKD",180);
        }
        
        public void rawDriveXYW(double x, double y, double w, double t, boolean throttleW) {
            // Compute vectors
            double powerB=0, powerFL=0, powerFR=0;
            if (throttleW){
                powerB = (-w-x*distBY+y*distBX)*t;
                powerFL = (-w-x*distFLY+y*distFLX)*t;
                powerFR = (-w-x*distFRY+y*distFRX)*t;
            } else {
                powerB = (-x*distBY+y*distBX)*t-w;
                powerFL = (-x*distFLY+y*distFLX)*t-w;
                powerFR = (-x*distFRY+y*distFRX)*t-w;
            }
            // Get their absolute values
            double absPowerB = Math.abs(powerB);
            double absPowerFL = Math.abs(powerFL);
            double absPowerFR = Math.abs(powerFR);
            
            // Normalize vectors to the throttle.
            if (absPowerB > absPowerFL && absPowerB > absPowerFR) {
                // B is biggest
                if (absPowerB > t) {
                    powerFL = powerFL * t/absPowerB;
                    powerFR = powerFR * t/absPowerB;
                    powerB = t*signnum(powerB);
                }
            }else if (absPowerFL > absPowerB && absPowerFL > absPowerFR) {
                // FL is biggest
                if (absPowerFL > t) {
                    powerB = powerB * t/absPowerFL;
                    powerFR = powerFR * t/absPowerFL;
                    powerFL = t*signnum(powerFL);
                }
            }else {
                // FR must be the biggest
                if (absPowerFR > t) {
                    powerFL = powerFL * t/absPowerFR;
                    powerB = powerB * t/absPowerFR;
                    powerFR = t*signnum(powerFR);
                }
            }
            
            motorFR.set(powerFR);
            motorFL.set(powerFL);
            motorB.set(powerB);
        }
        public void rawDriveXYW(double x, double y, double w, double t){
            rawDriveXYW(x,y,w,t,true);
        }
        
        // Drive with North-Zero-Clockwise polar coordinates
        public void rawDriveAMW(double angle, double magnitude, double w, double t, boolean throttleW) {
            rawDriveXYW(Math.sin(angle)*magnitude, Math.cos(angle)*magnitude, w, t, throttleW);
        }
        public void rawDriveAMW(double angle, double magnitude, double w, double t) {
            rawDriveAMW(angle, magnitude, w, t, true);
        }
        
        public void driveXYW(double x, double y, double w, double t) {
            if (fieldOriented) {
                double angle = MathUtils.atan2(x, y);
                double magnitude = Math.sqrt(x*x+y*y);
                if (regulated && Math.abs(w)<0.2) {
                    if (lockonFilter == null) {
                        lockonFilter = new Timer();
                        lockonFilter.start();
                    }
                    if (lockonFilter.get()>0.3) {
                        rawDriveAMW(angle-Math.toRadians(getCurrentHeading()),magnitude,getHeadingResponse(),t,false);
                    } else {
                        getHeadingResponse();
                        rawDriveAMW(angle-Math.toRadians(getCurrentHeading()),magnitude,0,t);
                        targetHeading=getCurrentHeading();
                    }
                } else {
                    getHeadingResponse();
                    lockonFilter = null;
                    rawDriveAMW(angle-Math.toRadians(getCurrentHeading()),magnitude,w,t);
                    targetHeading=getCurrentHeading();
                }
            } else {
                if (regulated && Math.abs(w)<0.2) {
                    if (lockonFilter == null) {
                        lockonFilter = new Timer();
                        lockonFilter.start();
                    }
                    if (lockonFilter.get()>0.3) {
                        rawDriveXYW(x,y,getHeadingResponse(),t,false);
                    } else {
                        getHeadingResponse();
                        rawDriveXYW(x,y,0,t);
                        targetHeading=getCurrentHeading();
                    }
                } else {
                    getHeadingResponse();
                    lockonFilter = null;
                    rawDriveXYW(x,y,w,t);
                    targetHeading=getCurrentHeading();
                }
            }
        }
        
        public double signnum(double num){
            if (num==0)
                return 0;
            else if (num>0)
                return 1;
            else
                return -1;
        }
    }
