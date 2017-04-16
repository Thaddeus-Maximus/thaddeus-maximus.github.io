---
layout: post
title: "It's a new clutch, it's a new day, it's a new strife..."
date: 2017-04-16 01:19:06
description: After some clutch actuator issues, a redesign is in order. Gotta love it. Scotch yokes are such a fun solution! <img src="/images/rgp006-actuation/clutch_redes_overview.png"/>
tags: 
 - fsae
 - rgp006
 - electronic actuation
 - clutch
---

I went back the the drawing board after some clutch failures. What do I need?

- Must be non-backdrivable... at fully engaged. This prevents drawing large amounts of current as the driver holds the clutch in.
- Must be variable in position. Driver must be able to slowly let out the clutch.
- Must allow sensoring for fully engaged and disengaged
- Must allow sensoring for clutch position so driver can slowly let out the clutch
- Reliability, reparability, lightweight, etc. (the usual host of general design criteria)

Sure, a worm gear may fit that bill. But why not something like a scotch yoke? It's non-backdrivable at it's apexes!

Because I'm apparently proficient at SOLIDWORKS, I went ahead and designed the gist of the thing- detail and all.

![Clutch actuator isometric view](/images/rgp006-actuation/clutch_redes_iso.png)

Not pictured is the planetary gearbox (three stages of 1:6 reductions) sitting between the blue and green plates, and the motor (RS555) attached to the other plate. I'll have to make a more detailed post about this gearbox style; I've found it to be wonderful, and very cheap.

Here's some more explanation. What this actuator ultimately does is... pull a cable. Boring, yes, but important to pull the cable correctly, efficiently, and reliably. This mechanism _should_ accomplish that.

![Clutch actuator detail, with annotation](/images/rgp006-actuation/clutch_redes_overview.png)

Simalar to the clutch actuator, there are cams with limit switches that go on the 3/8" hex shaft on the end. That shaft will be tapped out, so everything can be tightened. This actuator then clamps to a tube on the chassis somewhere (doesn't matter, since this actuates a pull cable, position isn't critical aside from making the cable run clean).

Many small details to be hammered out, but many small Thad touches already present- wrench slots on the clamping mechanism, bearing reliefs, fillets and such. Hopefully, we'll manufacture this in the coming week.