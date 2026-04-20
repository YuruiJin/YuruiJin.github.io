---
page_id: trajectory_planning_rrt
layout: page
title: "基于 RRT* 的六轴机械臂轨迹规划优化"
description: "基于 MoveIt 框架改进 RRT* 算法，并设计后处理优化算法平滑轨迹、降低关节冲击。在 Gazebo 仿真环境中验证。（本科毕业设计）"
img: assets/img/projects/trajectory_planning_rrt/cover.jpg
importance: 2
category: core-research
tags: [robotics, motion-planning, RRT, ROS, MoveIt, Gazebo]
related_publications: false
date: 2024-09-01
giscus_comments: true
---

## 项目概述

本项目针对六轴机械臂轨迹规划，在 ROS MoveIt 框架内改进 RRT\* 规划器。在保证规划效率的同时，重点提升轨迹质量与执行平稳性。

## 技术方案

- 在 MoveIt 中改进 RRT\* 的采样与重连策略，提高路径生成稳定性。
- 设计后处理优化流程，对轨迹进行平滑并降低关节冲击。
- 在 Gazebo 仿真环境中评估规划质量与执行可行性。

<!-- TODO: Add figure -->
<!-- {% include figure.liquid path="assets/img/projects/trajectory_planning_rrt/rrt_pipeline.jpg" caption="改进 RRT* 与轨迹后处理优化流程。" class="img-fluid rounded z-depth-1" zoomable=true %} -->

## 验证与测试

在 Gazebo 中完成性能测试，重点对比轨迹平滑性、关节冲击降低效果以及典型任务下的规划成功率。

## 备注

- 本科毕业设计

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
