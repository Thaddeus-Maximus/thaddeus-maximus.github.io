---
layout: post.html
title: EV3Hub
image: ev3hub.png
date: 2014-12-28 18:00:00
tags: [Software, Power Surge, FLL, Robotics, usable-feature, comprobotics, robotics]
---

When you're doing FLL and have the privilege of multiple programming students, it's very very common to have to merge together programs. This leads of course to mayhem of losing work, overwriting code, etc. Something like github would be great, but EV3-G's save format is binary, which can't be really used in traditional version control systems.

So, I rolled my own version control!

![Overview of EV3Hub]({{ site.url }}/assets/images/ev3hub_overview.png)

# Features:

-  Files are segmented out and dynamically compiled; getting an old copy is as easy as clicking "GET".
-  Doesn't take as much storage space as hard backups since it's working off of changesets rather than full backups.
-  Commits allow for multiple programmer names on one page, so you can keep track of who did what without having to log in and out.
-  Commits allow for only uploading what was changed, so as to not overwrite others' work.
-  Completely web based, with a server written in python.

*UPDATE*: [Alan Smith](https://github.com/alan412) has made some further improvements since I started the project. You can [download the software here](https://github.com/alan412/ev3hub) or even [view a demo version here](https://beta.ev3hub.com)