---
layout: post.html
title: "Drivable Beanbag!"
date: 2021-08-14 16:21:00
image: beanbag/splash.jpg
description: Driving a Beanbag
tags:
 - fabrication
 - odd
 - bikes
 - robotics
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/xHozvgy_H58" frameborder="0" allowfullscreen></iframe>
![](/assets/images/beanbag/splash.jpg)

This started out when we at the [Manchester Makerspace](http://manchestermakerspace.org) decided "hey. We should build a robochair." Nobody had a clear idea what that meant.

We could build something like a literal chair bolted to a robot drivebase. Or a motorized couch. But those have all been done before. But then, we had the concept:

![Concept](/assets/images/beanbag/concept.png)

A drivable beanbag. Controlled by a game controller. _How do you get lazier?_

We already had the massive beanbag. So I began drawing out what a platform might look like. [The CAD is viewable in OnShape.](https://cad.onshape.com/documents/9009f2774936f7e45a9ccd26/w/ba20c9ddc536071ad7316aeb/e/411323a82a9cc5a57325ecb7)

![Isometric View of Platform in CAD](/assets/images/beanbag/cad_iso.png)

I took this as an opportunity to try and make custom timing pulleys. Which worked for HTD profile belts! The 8M sized ones are quite easy- they can even be finished and brought to perfect profile with a 3/16" mill bit. The 3M were tougher and required the use of parabolic flute drillbits to make the 15:1 aspect ratio holes.

![Custom HTD Sprockets](/assets/images/beanbag/sprockets.jpg)

With most of the parts made, we started building up the frame.


![](/assets/images/beanbag/barren_frame.jpg)
![](/assets/images/beanbag/lower_frame.jpg)

The motors are two sensored, brushless DC motors meant for electric skateboards. At 36V, they pack 3kW of peak power! Ridiculous! These things are no bigger than a miniCIM. The motors plug into a Flipsky dual-channel vESC, and the whole thing is powered by three 12V, 18Ah (FRC-sized) batteries, wired in series.

The batteries aren't new, but they have enough life in them to drive all around the pits of the 24 Hours of Lemons in CT. And tow wagons of gasoline while we're at it.

It isn't done: our drivetrain has some issues blowing up casters and wheels because we specced ones that are way underkill. We're going to revisit if we can make 4WD work at all (the long wheelbase isn't keen on turning when fully loaded)- maybe with some caster assist in the front. But we'll get there.