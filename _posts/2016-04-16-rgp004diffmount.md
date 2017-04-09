---
layout: post
title: "RGP004 Tensioning System Redesign"
date: 2016-04-16 19:27:14
description: As a new and ambitious member of Rose-Hulman's FSAE team RoseGPE, I had the task of redesigning last year's car's differential mount.
tags:
 - FSAE
 - GPE
 - FEA
 - drivetrain
 - diff mount
 - mechanical
---

As a new and ambitious member of Rose-Hulman's FSAE team RoseGPE, I had the task of redesigning last year's car's differential mount.

Now, redesigns do not come without prudence to make sure there is actually an issue... but there is most definitely something wrong with the diff mount. The whole unit doubles as a tensioner- which isn't bad. However, the method used to do this was the issue. The mount is mounted to the chassis of our car at the bottom rigidly with two steel tabs on either side. At the top, two turnbuckles are used to adjust and mount. The turnbuckles are the issue. Because of the turnbuckles, The only significant reaction against torison is the double shear tabs at the bottom- which... isn't much. 

<img src="/images/rgp004_2015mount.jpg">

Now, I could have easily made a new design which used a static diff mount and an idler, or used more constrained turnbuckles. However, having the freedom to make a new design, I opted for an eccentric tensioner.

The eccentric tensioner works pretty simply. You have a bracket with a circular cutout, and you have a circular plate on either side of the differential that accepts bearings for the differential. The center of the bearing holes is offset from the outer circle. This way, when the plate is rotated, the displacement of the differential changes, allowing chain tension to be adjusted. The bearing plates are held in place with a clamp and a shear plate. This method allows for everything to be rigidly mounted. You can see the cage here:

<img src="/images/rgp004_diffcage.jpg">

Without much optimization, this method is MUCH heavier. Especially when made out of mild steel rather than 7075 aluminum. However, the loads are distributed much better. This should open the doors for an enormous amount of weight savings.

In action:

<iframe width="560" height="315" src="https://www.youtube.com/embed/YmzeJpypzsc" frameborder="0" allowfullscreen></iframe>