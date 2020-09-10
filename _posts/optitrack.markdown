---
layout: post.html
title: "OptiTrack"
image: optitracker.png
date: 2015-07-10 11:00:21
description: OptiTrack
tags:
 - robotics
 - controls
 - vision processing
 - LEGO
 - MINDSTORMS
 - android
 - OptiTrack
 - Software
 - odd
---

This is a small showcase project I did for 4-H. It's a high-speed line tracker using a vision system.

<iframe width="560" height="315" src="https://www.youtube.com/embed/L4di5AzicZc" frameborder="0" allowfullscreen></iframe>

[GitHub Link](https://github.com/Thaddeus-Maximus/OptiTracker)

# Development:

<iframe width="560" height="315" src="https://www.youtube.com/embed/7CqhziY8g_o" frameborder="0" allowfullscreen></iframe>

I'm basically starting a frame by taking a sample of the last line of pixels, iterating through it, and trying to find a point where there's a massive change in color value. When I find a positive and a negative one that's close to the center, I average the two values to find the X location, and subtract them to find a line width (which I don't use... yet). I then recursively call the function (for a limited number of times), passing in the same parameters. Once a single point is found, readings improve; I prioritize readings that are closer to the last point if their derivative/color change is still fairly high.

This method seems rather robust; I'll see how it performs on a concrete floor with tape; hopefully it shouldn't be a noisy space and my readings will fare well!