---
page_id: robot_system_template
layout: page
title: "机器人系统集成：[系统名称]"
description: 面向 [应用场景] 的完整机器人系统设计与实现。
img: assets/img/projects/project1/cover.jpg
importance: 2
category: robot-system
tags: [system-integration, ROS, hardware]
related_publications: false
github: https://github.com/YuruiJin/your-robot-system
date: 2024-01-01
giscus_comments: true
---

## 项目概述

<!-- 描述完整的机器人系统及其应用背景。 -->

本项目设计并实现了面向 [应用场景] 的完整机器人系统。该系统将 [硬件组件] 与 [软件栈] 相结合，实现了 [系统目标]。

## 系统架构

<!-- 插入系统框图。 -->

{% include figure.liquid path="assets/img/projects/project1/system_arch.jpg" caption="系统整体架构。" class="img-fluid rounded z-depth-1" %}

## 技术方案

### 硬件选型

- **机器人平台**：[平台型号，如 UR5、自研移动底盘]
- **传感器**：[传感器列表，如激光雷达、RGB-D 相机、IMU]
- **执行器**：[执行器列表]
- **计算平台**：[板载计算，如 NVIDIA Jetson、Intel NUC]

### 软件栈

- **操作系统**：Ubuntu [版本] + ROS [1/2] [发行版]
- **关键软件包**：[关键 ROS 包列表]
- **中间件**：[DDS / ROS1 Bridge 等]
- **自研模块**：[自研节点/功能包]

## ROS / ROS2 集成

<!-- 描述 ROS 节点图及关键话题/服务。 -->

| 节点名称 | 功能描述 | 话题/服务 |
|---------|---------|---------|
| `[节点名]` | [功能] | `/topic_name` |

## 实验结果

<!-- 展示实验结论。 -->

{% include figure.liquid path="assets/img/projects/project1/results.jpg" caption="在 [环境] 中的实验结果。" class="img-fluid rounded z-depth-1" %}

## 演示

{% include video.liquid provider="bilibili" id="BV1xx411c7mD" caption="系统演示。" %}

## 代码与资源

- **GitHub**：[your-robot-system](https://github.com/YuruiJin/your-robot-system)
- **ROS 功能包**：`ros-[distro]-[package-name]`
