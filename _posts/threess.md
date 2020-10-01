---
layout: post.html
title: "The Three S's"
date: 2020-9-29 17:16:00
image: trinity.jpeg
tags:
 - engineering
 - principles
 - design
 - blog
---

When I mentored FLL, I came up with three design principles that I could instill in my students. It seemed to take root. The three S's:
- Simple
- Solid
- Servicable

I enjoy expounding and talking about how to improve systems at length, but this pnemonic instills some fundamentals of good design. It's not inherent to mechanical, or electric, or software design... it's just good principles.

# Simple
Everything should be made simple. This has many benefits: the system can be better understood, and thus improved. Parts count, and thusly cost, goes down. For me this often means eschewing libraries and complex mechanisms when a simpler custom one will do. Use one large bracket, not multiple smaller ones.

# Solid
Everything should be robust and stand up to abuse. This should be self explanatory. But this also means looking for edge cases, and surviving them. This means testing all possible load scenarios, finding the dirty edge cases in software, and really understanding the full range of conditions your system could be subjected to.

# Servicable
However, things will go wrong. We ought to be willing to recognize this and plan ahead, making sure that we, and our end users, can fix things in a timely and frustration-free manner when they do. This means providing clearance around fasteners, taking time to care about assembly order, routing wires so they can be accessed, and yes, documenting your design.

# Shipped
Alas, all good trinities face the problem that Jung cited: that of three versus four. The three in their unity seem to form an idealization, but as they come to fruition, a problem arises, and a compensatory fourth is needed.

At the end of the day, what you're building needs to be done and shipped. Dwelling too long on these principles, optimizing, will lead you to the deadline unfinished. Real artists ship. This means eschewing that nice custom component when an off the shelf one will do.