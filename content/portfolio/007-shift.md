---
title: "Shift Actuator"
title_img: "fsae/007-shift.jpg"
title_classes: "square"
title_styles: ""

date: 2023-05-12
draft: false
layout: collage

wrapper_classes: ""
cards:
  - body: >
      Fast and foolproof electric shift actuator as a replacement for kick-shifting on a YFZ450R engine.

  - raw_html: '<iframe width="560" height="315" src="https://www.youtube.com/embed/-E58AdV05kc" frameborder="0" allowfullscreen></iframe>'
    caption: "Shifting in Action"
  
  - styles: "text-align: left;"
    body: >
      Past members on the RoseGPE team tried to develop paddle shifting for thair cars, with mostly poor success. Pneumatics are heavy. Linear actuators are lossy. The system needed to be:

      - Efficient in terms of power; electrical power is sparse

      - Fast; more speed = more better

      - Fully robust; if it mis-shifts, it can't get stuck

      With this in mind, I wanted to develop something that was dead-nuts simple mechanically with high efficiency. A few concepts were considered:

      - 4-bar linkage from a planetary gearbox

      - Full spur gearbox

      - Worm gearbox

      - Sector gear driven by planetary gearbox

      Of these, the 4-bar and sector gears offered the highest efficiency and ease of manufacture. The sector gear option would require, of course, a custom sector gear- a costly EDM operation. However, this option offers the smoothest power delivery at high travels.
  
  - img: "fsae/007-shift-design.png"
    caption: "CAD Design"


  - styles: "text-align: left;"
    body: >
      With this in mind, I began designing and made a prototype. This made a few things quite apparent:

        - Mounting to the YFZ450R around the shift shaft region is HARD. There are few bolts.
        
        - Mesh is important!

        - The engine CAD we had was horribly wrong. None of the bolts were in the places the CAD said they were.

        - Even if a component is a simple prototype part, it doesn't hurt to analyze it- the load paths could be so bad that the part is useless.

  - body: >
      After dealing with these problems, I built a second revision that addressed these issues. The shifter mounts to the case bolts and chain guard - three good rigid mounting points. The sector gear was analyzed and supports for it drawn out further to better take the torque from the spur gear.

  - body: >
      In the video, you can see some cams rattling on the shaft next to some micro switches. After some experimenting, we determined that we really didn't need the complexity of sensing the shaft position - simply running the actuator for set amounts of time worked to make successful shifts!

---