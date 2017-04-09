---
layout: post
title: "OptiTrack works!"
date: 2015-07-06 10:45:56
description: Well, we're now rolling... slowly and with a lot of noise. <iframe width="560" height="315" src="https://www.youtube.com/embed/7CqhziY8g_o" frameborder="0" allowfullscreen></iframe>
tags:
 - robotics
 - control systems
 - vision processing
 - LEGO
 - MINDSTORMS
 - android
 - OptiTrack
---

Well, we're now rolling... slowly and with a lot of noise.

<iframe width="560" height="315" src="https://www.youtube.com/embed/7CqhziY8g_o" frameborder="0" allowfullscreen></iframe>

I'm basically starting a frame by taking a sample of the last line of pixels, iterating through it, and trying to find a point where there's a massive change in color value. When I find a positive and a negative one that's close to the center, I average the two values to find the X location, and subtract them to find a line width (which I don't use... yet). I then recursively call the function (for a limited number of times), passing in the same parameters. Once a single point is found, readings improve; I prioritize readings that are closer to the last point if their derivative/color change is still fairly high.

This method seems rather robust; I'll see how it performs on a concrete floor with tape; hopefully it shouldn't be a noisy space and my readings will fare well!

Here's a NXC code dump:

    /*
     * @param in the value to constrain
     * @param limit the magnitude to constrain to
     */
    float limitTo(float in, float limit){
      if(in<-limit) return -limit;
      else if(in>limit) return limit;
      else return in;
    }

    /*
     * @param port the motor port to run
     * @param power the speed to run it at, scaled from -100 to +100
     * @param brake whether or not to brake when power = 0
     */
    inline void runMotor(byte port, int power, bool brake=false){
      if(power>100)
        power=100;
      if(power<-100)
        power=-100;
      if (power>0){
        OnFwdEx(port, power, RESET_NONE);
      }else if(power<0){
        OnRevEx(port, -power, RESET_NONE);
      }else if(brake){
        OffEx(port, RESET_NONE);
      }else{
        CoastEx(OUT_BC,RESET_NONE);
      }
    }

    // Direction to turn the wheel pod to in degrees
    float wheelPodSetpoint=0;

    /*
     * Turn on the drivetrain to output values corresponding to the given vectors.
     * @param y the forwards-backwards speed vector
     * @param w the rotational speed vector
     */
    void drive (int y, int w) {
        if (abs(w)<2) {
            // If the rotation vector is negligible, just skip expensive computations and write the values.
            wheelPodSetpoint = 0;
            
            runMotor(OUT_B, -y, false);
            runMotor(OUT_C, -y, false);
        } else {
            // Get basic gist of the vectors
            int left = y-w;
            int right = y+w;
            // Scale them down appropriately
            if (abs(left)>abs(right)) {
                if (abs(left)>100) {
                    right = right*abs(left)/100;
                    left = abs(left)/left*100;
                }
            } else {
                if (abs(right)>100) {
                    left = left*abs(right)/100;
                    right = abs(right)/right*100;
                }
            }
            // Write values out
            runMotor(OUT_B, -left, false);
            runMotor(OUT_C, -right, false);
            // Compute turning radius, measured in wheelbase width/2
            float radius = (-left-right)/(right-left); 
            // compute angle to turn to. The wheel pod is the wheelbase width back from the drive axle, so we use 2.0 instead of 1.0.
            wheelPodSetpoint = atan2d(2.0,radius);
        }
    }

    // Holds the wheel pod at the desired setpoint
    task wheelPodRegulator() {
      ResetTachoCount(OUT_A);
      while(true){
        // Get general error
        float error = -wheelPodSetpoint-((MotorRotationCount(OUT_A))*40.0/56.0);
        // Optimize error by subtracting or adding 180 to it until it is within the range of -90,+90.
        while(error>90) error-=180;
        while(error<-90) error+=180;
        // Set output value
        runMotor(OUT_A,error*10);

        Wait(10);
      }
    }

    task main() {
        start wheelPodRegulator;

        int steering=0;
        while(true) {
            string res;
            if(ReceiveMessage(0,true,res)==NO_ERR) {
                // StrToNum because there's no clear documentation on how to actually send a NXC-readable number directly...
                steering = -StrToNum(res)/30;
            }
            drive(35,steering);
            Wait(1);

        }
        while(true);
    }