---
layout: post.html
title: "Instacode: Hyper fast NXT programming"
image: instacode.png
date: 2015-02-05 12:00:00
tags:
 - robotics
 - LEGO
 - MINDSTORMS
 - python
 - C
 - gui
 - tkinter
 - programming
 - language
 - Software
 - usable
 - comprobotics
---

NXT-G is convoluted, disgusting, resource-hungry, not cross-platform, and the code still lacks good control loops for repeatable motion.

But not Instacode. [Download it here!](/hosted/instacode-release.zip)

![](/assets/images/instacode.png)

Instacode is a GUI front end made with python + tkinter. It generates [NXC code](http://bricxcc.sourceforge.net/firmware.html) which gets compiled and deployed via the nbc app.

# Features:

-  Drive methods (Turn and Straight) with high precision (calibrated for standard NXT 1.0 tires)
-  Arm method with high precision (calibrated for a 12:40 gear ratio)
-  Loop and switches, which can be triggered off of light, ultrasonic, and touch sensors.
-  Saving and loading
-  Builtin download and run capability

Here's a brief demo of a development build:

<iframe width="560" height="315" src="https://www.youtube.com/embed/rMzi0q1t6TM" frameborder="0" allowfullscreen></iframe>