---
title: "Laptime Simulation Package"
title_img: "roselap_v5.png"
title_classes: "square"
title_styles: ""

date: 2018-07-03
draft: false
layout: collage

wrapper_classes: ""
cards:
  - body: >
      I built my own vehicle dynamics simulation package, giving me the ability to simulate things that commercial softwares didn't even think to.

      There are a lot of laptime simulation packages out there. They're cute - they let you play with things like engine curves or gear ratios. But nothing too interesting - like how long it takes to shift. Or the spread of your gear ratios. Or your brake bias. And these things could matter - or at least, it would be beneficial to figure out how best to do these things. That's why I developed [RoseLap](https://github.com/RoseGPE/RoseLapWeb).

  - img: 'fsae/roselap-shifting.png'
    caption: "Shifting Algorithm"

  - body: >
      If you're curious about the math and physics, you should check out [the model documentation.](https://github.com/RoseGPE/RoseLapWeb/blob/master/py/RoseLapCore/model_docs.pdf)

  
  - caption: "FEATURES"
    styles: "text-align: left;"
    body: >
       - Four grip-ellipse tire model

       - Aerodynamic modes (DRS, normal, airbrake)

       - Engine curve definition

       - Support for CVT transmissions

       - Lateral Load Transfer Distribution

       - Stable "SS" Solver for line-and-arc type tracks

       - Finite shift times

  - body: >
      [Read how we used it in development of a Formula SAE car, RGP008, here.](/roselap008.pdf)
---