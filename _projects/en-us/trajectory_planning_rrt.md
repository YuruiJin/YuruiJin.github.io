---
page_id: trajectory_planning_rrt
layout: page
title: "Trajectory Planning Optimization for 6-DOF Robotic Arm Based on RRT*"
description: "Improved RRT* algorithm within ROS MoveIt framework for robotic arm path planning. Designed post-processing optimization to smooth trajectories and reduce joint shock. Validated in Gazebo simulation. (Undergraduate Final Year Project)"
img: assets/img/projects/trajectory_planning_rrt/cover.jpg
importance: 2
category: core-research
tags: [robotics, motion-planning, RRT, ROS, MoveIt, Gazebo]
related_publications: false
date: 2024-09-01
giscus_comments: true
---

## Overview

This project improves the RRT\* planner inside the ROS MoveIt framework for 6-DOF robotic arm trajectory planning. The goal is to improve path quality while preserving planning efficiency for practical manipulation tasks.

## Method

- Improved RRT\* sampling and rewiring strategy in MoveIt for more stable path generation.
- Designed a post-processing optimization pipeline to smooth trajectories and reduce joint shock.
- Evaluated planning quality and execution feasibility in Gazebo simulation.

<!-- TODO: Add figure -->
<!-- {% include figure.liquid path="assets/img/projects/trajectory_planning_rrt/rrt_pipeline.jpg" caption="Improved RRT* planning and trajectory optimization pipeline." class="img-fluid rounded z-depth-1" zoomable=true %} -->

## Validation

Performance testing in Gazebo focused on trajectory smoothness, joint impact reduction, and planning success rate across representative tasks.

## Notes

- Undergraduate Final Year Project

## Resources

- For CAD models or further technical details, please feel free to contact me via email.
