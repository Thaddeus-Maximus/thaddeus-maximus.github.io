---
layout: post
title: "Development of RoseLap v3"
date: 2017-06-30 17:15:10
description: What if you could find the ideal vehicle for a given racetrack? Well, with RoseLap, you can (to some degree).
tags:
 - simulation
 - lapsim
 - GPE
 - FSAE
---

Laptime simulation has been a somewhat lofty idea for simulating a vehicle based on its specs, or if you're advanced enough, its details, too. RoseLap is trying to strike a nice middle ground between these with varying degrees of computational complexity.

You can check out the whole project here: [RoseLap on GitHub](https://github.com/RoseGPE/RoseLap)

The simulation of a single vehicle on a single track begins with chunking a track into segments (akin to meshing a FE model). Then, for each segment, physical laws are applied for each segment. In each step, the driver tries to go as fast as possible- lead-footing it, or applying as much remaining longitudinal tire grip there is. If the required lateral acceleration exceeds available tire grip, a flag is thrown and a bisection algorithm is used to find the braking point needed to slow down to the curvature of the segment in question.

There are currently two vehicle physics models used: point-mass and two-tire. The point mass model assumes all forces act on a point on the ground. This ignores weight transfer and individual wheels- but is computationally efficient and stable. The two-tire model has two grip circles in the front and rear, so can have longitudinal weight transfer. There is no lateral weight transfer in this model, though.

Parameters that can be modified are:
- Downforce and drag at 35 MPH
- Aerodynamic CP location (for weight transfer use only)
- Tire COF
- Tire radius
- Vehicle mass
- CG location (for weight transfer use only)
- Brake bias (only with two-tire model) and 'perfect' option
- Wheelbase (for weight transfer use only)
- Engine curves
- Gear ratios
- Shifting time
- CO2 factors (for fuel usage calculations)

The project is free for others to use and modify to their needs.