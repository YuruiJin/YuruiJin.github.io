---
layout: page
title: "基于双板簧机构的变刚度夹爪"
description: "一种轻量紧凑的双板簧变刚度夹爪，用于工业场景中对不同硬度物体的自适应抓取。发表于 IEEE CASE 2023。"
img: assets/img/projects/variable_stiffness_gripper/cover.jpg
importance: 1
category: "核心研究"
tags: [机器人, 夹爪, 变刚度, 机构设计, IEEE-CASE]
related_publications: true
date: 2023-08-26
giscus_comments: true
---

## 项目概述

刚性夹爪在抓取不同表面硬度和形状的物体时往往缺乏顺应性，存在安全性和可靠性方面的隐患。现有变刚度夹爪要么依赖软性材料（重复精度低、抓取力有限），要么依赖复杂机构（刚度调节范围窄、自重偏大）。本项目提出了一种轻量紧凑的**双板簧夹爪（DLSG）**，通过更宽的刚度调节范围，满足工业抓取场景中快速切换不同硬度物体的需求。

- 发表于 **IEEE CASE 2023**（2023 IEEE 第 19 届自动化科学与工程国际会议）
- DOI：<a href="https://doi.org/10.1109/CASE56687.2023.10260296">10.1109/CASE56687.2023.10260296</a>
- 作者：余磊、**金玉瑞**、乔琳、金谷民、秦思颖、陈玉卿
- 本人贡献：共同作者，参与机构设计、样机搭建与论文撰写

{% include figure.liquid path="assets/img/projects/variable_stiffness_gripper/fig1_system.jpg" caption="完整抓取系统：机械臂 + 相机 + DLSG。" class="img-fluid rounded z-depth-1" zoomable=true %}

## 技术方案

DLSG 通过以下关键组成部分实现变刚度：

1. **核心机构**：两组对称布置的板弹簧作为柔性元件。滚动轴承滑块在接触点约束板弹簧的竖向形变，通过移动滑块改变板弹簧的有效长度，从而调节刚度。

2. **变刚度原理**：滑块位置改变有效长度（*x*），输出刚度随之变化，关系为 (1/(1−x/L)³)，在弹簧末端附近刚度急剧增大。

3. **解耦控制**：两个电机独立控制夹爪——**角度电机**负责张合（抓取角度），**刚度电机**通过丝杠驱动滑块进行刚度调节，两者互不耦合。

{% include figure.liquid path="assets/img/projects/variable_stiffness_gripper/fig4_principle_sketch.jpg" caption="双板簧 + 四连杆工作原理示意图。" class="img-fluid rounded z-depth-1" zoomable=true %}

## 系统架构

夹爪采用模块化设计，易于与工业机械臂集成。关键硬件部件（包括滑块与手指）均采用 3D 打印制造，便于快速原型验证与定制。

{% include figure.liquid path="assets/img/projects/variable_stiffness_gripper/fig3_printed_parts.jpg" caption="3D 打印滑块与手指。" class="img-fluid rounded z-depth-1" zoomable=true %}

基于目标检测的抓取流程将视觉感知与刚度自适应控制相融合：

{% include figure.liquid path="assets/img/projects/variable_stiffness_gripper/fig8_flowchart.jpg" caption="基于检测的抓取流程图。" class="img-fluid rounded z-depth-1" zoomable=true %}

## 关键成果

| 指标 | 数值 |
|------|------|
| 刚度范围 | k ∈ [0, 3.5] N·m/rad |
| 自重 | 0.92 kg |
| 刚度变化量（q=π/9 时） | ~0.21 &rarr; ~1.0 N·m/rad（滑块行程 30 mm） |
| 抓取力放大倍数 | 滑块位置变化约 7&times; |
| 刚度调节速度 | 50 mm 行程约 2 s（高速）/ 约 5 s（低速） |
| 抓取演示 | 草莓、鸡蛋、木质圆柱体——均成功抓取且表面无损 |

{% include figure.liquid path="assets/img/projects/variable_stiffness_gripper/fig5_simulation_plots.jpg" caption="刚度与抓取力随位置和角度变化的仿真曲线。" class="img-fluid rounded z-depth-1" zoomable=true %}

{% include figure.liquid path="assets/img/projects/variable_stiffness_gripper/fig6_validation_setup.jpg" caption="验证实验台架。" class="img-fluid rounded z-depth-1" zoomable=true %}

{% include figure.liquid path="assets/img/projects/variable_stiffness_gripper/fig7_stiffness_validation_plot.jpg" caption="模型预测与实验测量对比曲线。" class="img-fluid rounded z-depth-1" zoomable=true %}

{% include figure.liquid path="assets/img/projects/variable_stiffness_gripper/fig9_grasping_sequence.jpg" caption="草莓、鸡蛋与木质圆柱体的抓取序列。" class="img-fluid rounded z-depth-1" zoomable=true %}

## 演示视频

演示视频作为补充材料随论文提交。如需查看演示，请通过邮件与我联系。

<!-- 上传演示视频后，取消注释以下行并填入视频 ID -->
<!-- {% include video.liquid provider="bilibili" id="YOUR_BV_NUMBER" %} -->
<!-- {% include video.liquid provider="youtube" id="YOUR_VIDEO_ID" %} -->

## 相关论文

{% bibliography --cited %}

## 代码与资源

- **论文**：<a href="https://doi.org/10.1109/CASE56687.2023.10260296">IEEE Xplore</a>
- 如需 CAD 模型或进一步技术细节，欢迎通过邮件与我联系。
