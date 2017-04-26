---
layout: post
title: "The CheapaPlanetary: A Tale of Great Joy"
date: 2017-04-25 23:04:00
description: Once in a while, cheap parts are actually a boon. Drill gearboxes are one such case. <img src="/images/cheapaplanetary/iso.jpg">
tags:
 - robotics
 - gearbox
 - diy
 - actuation
 - mechanical
---

You can find a few tutorials on how to modify harbor freight drills into cheap gearmotors for hobby robotics use. While nifty, we can do better. We can put real bearings on, and real mounts. This design has been enjoyed by the electronic actuators of RGP006. I've found they can also be gotten from thrift stores, and the transmissions (sans pinion, it seems) can be found on ebay.

Detail of the teardown: [Gearbox teardown](/hosted/Generic Gearbox Teardown.pdf)

The components of interest, required to make this deal, are shown below.

![exploded view](/images/cheapaplanetary/exploded.jpg)

What's stock and what's custom?
- The RS555 is purchased separately. These can be had for about $6. You can use any motor, but these boxes are designed for RS5xx series motors, and the pinions you'll get work with them immediately.
- The bottom left aluminum plate is machined custom. The key details are the counterbore of 1.5" diameter to hold the ring gear. I find a recess of 0.16" into 3/8" stock works the best. Make sure to counterbore the holes for the screws to mount the RS555. The three #10 bolts ride directly up against the ring gear; very tight tolerance, but I haven't tried to space them out any.
- The three gears on the left are the first planet gears, included with the gearbox. This first reduction is a 1:4, but I've also found ones with a 1:6 reduction.
- The carrier is included with the gearbox.
- The three gears on the right are the final planet gears, included with the gearbox.
- The output shaft on the right is custom made, although you can definitely modify the shafts included with the gearbox. It's not that hard to make such a shaft if you have a lathe and mill, (and welder, if you would prefer to weld on a flange rather than machine away the rest of the shaft) you can do it all.
- The ring gear, with clutch teeth, is included with the gearbox. This is some hardened, brittle steel. If you try and machine it, use carbide. If you do, you'll find it shatters and chips easily; ruining the teeth. The best option to get rid of those nasty clutch teeth is abrasive. If you have a surface grinder you might be able to use that (I have no experience). I did it with a disc sander and patience. It is not neccessary to remove or shorten the ring gear for this specific configuration shown, but if you want to use only one stage of the box, or three stages, this is a neccessary step. Another note of caution: Because of the heat treatment, it is neccessary to avoid stress concentrations, as the steel here is not ductile, but will fracture. This means the clutch teeth should engage with aluminum, not steel, or they should be removed.
- The right aluminum plate is machined custom. Nothing fancy here. There's a counterbore for the flange bearing to make sure the clutch teeth engage with the soft aluminum housing, not the steel flange.

Apply appropriate amounts of lithium grease, and enjoy.

The internals:

![internals](/images/cheapaplanetary/internals.jpg)


The end result:
![isometric view](/images/cheapaplanetary/iso.jpg)