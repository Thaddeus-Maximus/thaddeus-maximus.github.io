---
layout: post
title: "CORTEX Arm: Beginnings"
date: 2013-07-03 18:52:00
description: A two linkage arm that moves in straight lines, not arcs..? <iframe width="560" height="315" src="https://www.youtube.com/embed/thu5XfkRmoA" frameborder="0" allowfullscreen></iframe>Yes, it is possible. It's all in the (NXC) programming. To even begin making this motion, we need to figure out what set of arm angles (setU and setV here) will produce a certain Y and Z position for the arm's endpoint. We can leverage the law of cosines to do this.
tags:
 - robotics
 - control loops
 - motion profiling
 - lego
 - mindstorms
---


<iframe width="560" height="315" src="https://www.youtube.com/embed/thu5XfkRmoA" frameborder="0" allowfullscreen></iframe>
Wait, a two linkage arm that moves in straight lines, not arcs..? Yes, it is possible.

It's all in the (NXC) programming. To even begin making this motion, we need to figure out what set of arm angles (setU and setV here) will produce a certain Y and Z position for the arm's endpoint. We can leverage the law of cosines to do this.

    bool GotoYZ(float y, float z){
      float tMag=sqrt(y*y + z*z); // Magnitude of the target.
      float tAngle=atan2(z,y);    // Angle of the target (in radians)
      float vAngle, uAngle;       // Angles of the arms
      if(tMag<=VMAG+UMAG && tMag>=abs(VMAG-UMAG)){ // If inside of reach
        vAngle= acos((VMAG*VMAG + tMag*tMag - UMAG*UMAG)/(2*VMAG*tMag))+tAngle;
        uAngle= acos((VMAG*VMAG + UMAG*UMAG - tMag*tMag)/(2*VMAG*UMAG))-(PI-vAngle);
        // Use law of cosines to determine the angles based off the magnitudes of the limbs and target.
        vAngle=RTOD*vAngle;
        uAngle=RTOD*uAngle;
        // Convert angles into degrees
        if(vAngle<VAMAX && vAngle>VAMIN && uAngle<UAMAX && uAngle>UAMIN){ // If within bounds
          vRunning=uRunning=wRunning=true;
          setU=uAngle;
          setV=vAngle;
          return true;
          // Execute the calculations and return true.
        }else{ // If outside of bounds
          PlayTone(1000,600);
          return false;
          // Beep high-pitched and return false.
        }
      }else{ // If outside of reach
        PlayTone(400,400);
        return false;
        // Beep lower-pitched and return false.
      }
    }

Now, we can actually iterate through a set of points along our line of motion!

    void MoveAZ(float endY, float endZ, float frequency=0.5){
      float startY=cos(setU*DTOR)*UMAG + cos(setV*DTOR)*VMAG;
      float startZ=sin(setU*DTOR)*UMAG + sin(setV*DTOR)*VMAG;
      //Calculate our initial position in the Y-Z plane.
      float runMagnitude=sqrt((endY-startY)*(endY-startY) + (endZ-startZ)*(endZ-startZ));
      float runAngle=atan2((endZ-startZ),(endY-startY));
      // Turn that into a angle and magnitude.
      
      for(float i=1;i<runMagnitude;i+=frequency){ // Iterate the magnitude by the given frequency until we are at our destination.
        GotoYZ(cos(runAngle)*i + startY, sin(runAngle)*i + startZ);
        // Go to the the currently iterated 
        while(vRunning || uRunning)
          Wait(10);
        // Wait till done moving to the point.
      }
      
      GotoAZ(endA, endZ);
      // Go to the end point (just to be safe)
      while(vRunning || uRunning)
        Wait(10);
    }

Couple this with a background regulator task that works with vRunning, uRunning, setU, and setV:

    task backUpdate(){
      while(true){
        RunMotor(OUT_A,((MotorTachoCount(OUT_A)*WRATIO)-setW)*-400);
        RunMotor(OUT_C,((MotorTachoCount(OUT_C)*URATIO)-setU)*-170);
        RunMotor(OUT_B,((90 - MotorTachoCount(OUT_B)*VRATIO)-setV)*170);
        wRunning=abs((MotorTachoCount(OUT_A)*WRATIO)-setW)>TOLERANCE;
        uRunning=abs((MotorTachoCount(OUT_C)*URATIO)-setU)>TOLERANCE;
        vRunning=abs((90 - MotorTachoCount(OUT_B)*VRATIO)-setV)>TOLERANCE;
        ResetSleepTimer();
      }
      OffEx(OUT_ABC,RESET_NONE);
    }

And you can move a double-jointed arm in straight lines!