---
layout: page
title: "Variable Stiffness Gripper with Dual Leaf-Spring Mechanism"
description: "A lightweight, compact variable stiffness gripper using dual leaf-spring mechanism for industrial grasping of objects with different hardness levels. Published at IEEE CASE 2023."
img: assets/img/projects/variable_stiffness_gripper/cover.jpg
importance: 1
category: "Core Research"
tags: [robotics, gripper, variable-stiffness, mechanism-design, IEEE-CASE]
related_publications: true
date: 2023-08-26
giscus_comments: true
---

## Overview

Rigid grippers often lack compliance when handling objects with varying surface hardness and shapes, leading to safety and reliability concerns. Existing variable stiffness grippers either rely on soft materials (with limited repeatability, precision, and force) or complex mechanisms (with limited stiffness range and heavy weight). This project presents a lightweight, compact **Dual Leaf-Spring Gripper (DLSG)** that achieves a wider stiffness adjustment range for rapidly switching between objects of different hardness in industrial grasping scenarios.

- Published at **IEEE CASE 2023** (2023 IEEE 19th International Conference on Automation Science and Engineering)
- DOI: <a href="https://doi.org/10.1109/CASE56687.2023.10260296">10.1109/CASE56687.2023.10260296</a>
- Authors: Lei Yu, **Yurui Jin**, Lin Qiao, Gumin Jin, Siying Qin, Yuqing Chen
- My Role: Co-author; contributed to mechanism design, prototyping, and paper writing

{% include figure.liquid path="assets/img/projects/variable_stiffness_gripper/fig1_system.jpg" caption="Complete grasping system: robot arm + camera + DLSG." class="img-fluid rounded z-depth-1" zoomable=true %}

## Technical Approach

The DLSG achieves variable stiffness through the following key components:

1. **Core Mechanism**: Two symmetrically arranged leaf springs serve as compliant elements. A roller-bearing slider constrains the vertical deflection of the leaf springs at the contact point, and the stiffness is adjusted by moving the slider to change the effective length of the leaf springs.

2. **Variable Stiffness Principle**: The slider position changes the effective length (*x*), thereby changing the output stiffness. The stiffness grows as (1/(1−x/L)³), increasing significantly near the end of the spring.

3. **Decoupled Control**: Two motors independently control the gripper — an **angle motor** for opening/closing (grasping angle), and a **stiffness motor** driving the slider via lead screw for stiffness adjustment, with no coupling between the two.

{% include figure.liquid path="assets/img/projects/variable_stiffness_gripper/fig4_principle_sketch.jpg" caption="Dual leaf-spring + four-bar linkage working principle." class="img-fluid rounded z-depth-1" zoomable=true %}

## System Architecture

The gripper is designed for easy integration into industrial robotic arms. Key hardware components include 3D-printed sliders and fingers, enabling rapid prototyping and customization.

{% include figure.liquid path="assets/img/projects/variable_stiffness_gripper/fig3_printed_parts.jpg" caption="3D printed slider and fingers." class="img-fluid rounded z-depth-1" zoomable=true %}

The detection-based grasping pipeline integrates visual perception with stiffness-adaptive control:

{% include figure.liquid path="assets/img/projects/variable_stiffness_gripper/fig8_flowchart.jpg" caption="Detection-based grasping pipeline flowchart." class="img-fluid rounded z-depth-1" zoomable=true %}

## Key Results

| Metric | Value |
|--------|-------|
| Stiffness range | k ∈ [0, 3.5] N·m/rad |
| Weight | 0.92 kg |
| Stiffness variation (at q=π/9) | ~0.21 &rarr; ~1.0 N·m/rad over 30 mm slider travel |
| Grasping force amplification | ~7&times; with slider position change |
| Stiffness adjustment speed | ~2 s (high speed) / ~5 s (low speed) for 50 mm stroke |
| Grasping demonstration | Strawberry, egg, and wooden cylinder — all successfully grasped without surface damage |

{% include figure.liquid path="assets/img/projects/variable_stiffness_gripper/fig5_simulation_plots.jpg" caption="Stiffness and grasping force vs. position and angle (simulation)." class="img-fluid rounded z-depth-1" zoomable=true %}

{% include figure.liquid path="assets/img/projects/variable_stiffness_gripper/fig6_validation_setup.jpg" caption="Validation experimental setup." class="img-fluid rounded z-depth-1" zoomable=true %}

{% include figure.liquid path="assets/img/projects/variable_stiffness_gripper/fig7_stiffness_validation_plot.jpg" caption="Model vs. experimental comparison curves." class="img-fluid rounded z-depth-1" zoomable=true %}

{% include figure.liquid path="assets/img/projects/variable_stiffness_gripper/fig9_grasping_sequence.jpg" caption="Grasping sequence for strawberry, egg, and wooden cylinder." class="img-fluid rounded z-depth-1" zoomable=true %}

## Demo

The demonstration video was originally submitted as supplementary material with the paper. If you would like to see the demo, please contact me via email.

<!-- Uncomment and add your video ID when you upload the demo video -->
<!-- {% include video.liquid provider="bilibili" id="YOUR_BV_NUMBER" %} -->
<!-- {% include video.liquid provider="youtube" id="YOUR_VIDEO_ID" %} -->

## Related Publications

{% bibliography --cited %}

## Code & Resources

- **Paper**: <a href="https://doi.org/10.1109/CASE56687.2023.10260296">IEEE Xplore</a>
- For CAD models or further technical details, please feel free to contact me via email.
