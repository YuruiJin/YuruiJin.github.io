---
page_id: robot_system_template
published: false
layout: page
title: "Robot System Integration: [System Name]"
description: A complete robotic system for [application domain].
img: assets/img/projects/project1/cover.jpg
importance: 2
category: robot-system
tags: [system-integration, ROS, hardware]
related_publications: false
github: https://github.com/YuruiJin/your-robot-system
date: 2024-01-01
giscus_comments: true
---

## Overview

<!-- Describe the complete robotic system and its application context. -->

This project presents a complete robotic system for [application]. The system integrates [hardware components] with [software stack] to achieve [goal].

## System Architecture

<!-- Insert system block diagram here. -->

{% include figure.liquid path="assets/img/projects/project1/system_arch.jpg" caption="Full system architecture." class="img-fluid rounded z-depth-1" %}

## Technical Approach

### Hardware

- **Platform**: [Robot platform, e.g., UR5, custom mobile base]
- **Sensors**: [List sensors, e.g., LiDAR, RGB-D camera, IMU]
- **Actuators**: [List actuators]
- **Computing**: [Onboard compute, e.g., NVIDIA Jetson, Intel NUC]

### Software Stack

- **OS**: Ubuntu [version] with ROS [1/2] [distro]
- **Key Packages**: [List key ROS packages]
- **Middleware**: [DDS/ROS1 bridge/etc.]
- **Custom Modules**: [Your own nodes/packages]

## ROS / ROS2 Integration

<!-- Describe the ROS node graph and key topics/services. -->

| Node | Function | Topics/Services |
|------|----------|-----------------|
| `[node_name]` | [Function] | `/topic_name` |

## Experimental Results

<!-- Present experimental outcomes. -->

{% include figure.liquid path="assets/img/projects/project1/results.jpg" caption="Experimental results in [environment]." class="img-fluid rounded z-depth-1" %}

## Demo

{% include video.liquid provider="bilibili" id="BV1xx411c7mD" caption="System demonstration." %}

## Code & Resources

- **GitHub**: [your-robot-system](https://github.com/YuruiJin/your-robot-system)
- **ROS Package**: `ros-[distro]-[package-name]`
