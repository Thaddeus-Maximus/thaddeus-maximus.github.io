---
layout: post.html
title: "RoseLap v5"
image: roselap_v5.png # Add image post (optional)
date: 2018-07-03 12:55:00 +0300
description: RoseLap Version 5
tags: [Simulation, RoseGPE, Teams, Systems, Software, fsae]
---

Building on the success of RoseLap v3 (and the short-lived v4), I built the core for RoseLap v5. [Check It Out!](https://github.com/RoseGPE/RoseLapWeb)

[Check out the whitepaper!](https://github.com/RoseGPE/RoseLapWeb/blob/master/py/RoseLapCore/model_docs.pdf)

This is a lap-time simulation package; that is, it accepts simplified physical parameters of a car to simulate its performance around a racetrack. Combine this with a batcher and plotting tools, and it's a fantastic suite for determining what type of car to build for the FSAE Competition.

Features include:
 - Four grip-ellipse tire model
 - Aerodynamic modes (DRS, normal, airbrake)
 - Engine curve definition
 - Support for CVT transmissions
 - Lateral Load Transfer Distribution
 - Stable "SS" Solver for line-and-arc type tracks
 - Finite shift times

[Read the Full Report for RGP008 Here](/assets/roselap008.pdf)