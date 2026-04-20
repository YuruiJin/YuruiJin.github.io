---
page_id: mecanum_wheel_robot
layout: page
title: "RMO-08 麦克纳姆轮全方位移动机器人"
description: "负责机械设计与建模，开发逆运动学解算器实现全方位运动，基于 Arduino 搭建 PID 闭环控制系统。"
img: assets/img/projects/mecanum_wheel_robot/cover.jpg
importance: 3
category: robot-system
tags: [robotics, mechanical-design, Arduino, PID-control, kinematics]
related_publications: false
date: 2024-06-01
giscus_comments: true
---

## 项目概述

本项目围绕 RMO-08 麦克纳姆轮平台，完成了从机械设计、运动学建模到嵌入式控制的系统化实现，最终交付可重构原型机。

## 技术工作

- 使用 SolidWorks 完成整机三维建模与工程图设计。
- 实现麦克纳姆轮逆运动学解算，将底盘速度指令分解为各轮目标转速，实现全方位运动。
- 基于 Arduino 开发轮速 PID 闭环控制器，实现精确速度调节。
- 结合 MATLAB 仿真与实物实验验证控制性能。

<!-- TODO: Add figure -->
<!-- {% include figure.liquid path="assets/img/projects/mecanum_wheel_robot/system_design.jpg" caption="RMO-08 机械与控制系统架构。" class="img-fluid rounded z-depth-1" zoomable=true %} -->

## 项目成果

原型机通过预设性能测试，验证了全向运动控制的稳定性与可实现性。

## 演示视频

{% include video.liquid provider="bilibili" id="BV1Po4y1G7jt" caption="RMO-08 麦克纳姆轮全方位移动机器人演示。" %}

## 资源

<div class="card mt-3">
  <div class="card-body">
    <h5 class="card-title"><i class="fas fa-folder-open"></i> 项目文件下载</h5>
    <p class="card-text">CAD 模型、技术文档等项目资料已上传至百度网盘。</p>
    <a href="https://pan.baidu.com/s/xxxxx" class="btn btn-primary btn-sm" target="_blank">
      <i class="fas fa-cloud-download-alt"></i> 百度网盘下载
    </a>
    <span class="ms-2 text-muted">提取码：<code>abcd</code></span>
  </div>
</div>

如有其他需求，欢迎通过邮件与我联系。
