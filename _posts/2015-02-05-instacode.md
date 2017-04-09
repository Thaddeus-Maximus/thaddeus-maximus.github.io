---
layout: post
title: "Instacode: Hyper fast NXT programming"
date: 2015-02-05 12:00:00
description: NXT-G is convoluted, disgusting, resource-hungry, not cross-platform, and the resulting code isn't precise. But not Instacode. <img src="/images/instacode.png">
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
---

NXT-G is convoluted, disgusting, resource-hungry, not cross-platform, and the resulting code isn't precise.

But not Instacode. [Download it here!](/hosted/instacode-release.zip)

<img src="/images/instacode.png">

Instacode runs off of python and tkinter, generating NXC code which gets compiled and deployed via the nbc app.

Features:

-  Drive methods (Turn and Straight) with high precision (calibrated for standard NXT 1.0 tires)
-  Arm method with high precision (calibrated for a 12:40 gear ratio)
-  Loop and switches using pythonic indentation, and can read light, US, and touch sensor.
-  Save (to a python pickle) and load
-  Builtin download and run capability
<br/><br/>

Here's a brief demo of a development build:

<iframe width="560" height="315" src="https://www.youtube.com/embed/rMzi0q1t6TM" frameborder="0" allowfullscreen></iframe>