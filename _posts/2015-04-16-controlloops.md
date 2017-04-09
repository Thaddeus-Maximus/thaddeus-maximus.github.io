---
layout: post
title: "Optimizing PID Loops"
date: 2015-04-16 15:46:00
description: It seems that people just think "Oh, hey, I need a control loop. Better go with traditional, full blown PID." It definitely constrains our thinking, and ends up producing control loops that are overly complicated and don't represent the systems they're acting on. So, here's three tweaks to PID that can boost performance of control loops.
tags:
 - robotics
 - control systems
---

It seems that people just think "Oh, hey, I need a control loop. Better go with traditional, full blown PID." It definitely constrains our thinking, and ends up producing control loops that are overly complicated and don't represent the systems they're acting on.

So, here's three tweaks to PID that can boost performance of control loops.

Let's say this is your typical P control loop:
 
    while(true):
      error = desired - current
      k = 0.5
      output (error*k)


My #1 tweak is exponential proportional control. By simply raising the output to a power (and copying the sign over), we can tweak our response curve to create a truer proportional response. (Think of a DC motor: 6 volts might produce only a quarter of the output 12 volts could, so we should tweak the response curve appropriately)

    while(true):
      error = desired - current
      kp = 0.5
      ke = 0.5
      output ( copysign(abs(error*kp)^ke, error) )

If I need an integral, the next is a very important tweak for me: limiting the integral. It seems like a no-brainer, but oftentimes gets overlooked.

    integral = 0
    kp = 0.5
    ki = 0.1
    max_integral = 10
    while(true):
      error = desired - current
      
      integral += error
      if integral > max_integral:
        integral = max_integral
      elif integral < -max_integral:
        integral = -max_integral

      output (error*kp + integral*ki)

Alternatively, we could use a list, so we're actually only reacting to a recent sum of errors.

    error_list = [0 for i in range(10)]
    kp = 0.5
    ki = 0.1
    while(true):
      error = desired - current
      
      error_list.pop(0)
      error_list.append(error)

      output (error*kp + sum(error_list)*ki)