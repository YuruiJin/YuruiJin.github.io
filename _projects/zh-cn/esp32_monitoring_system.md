---
page_id: esp32_monitoring_system
layout: page
title: "ESP32 远程温湿度监控系统"
description: "基于 ESP32 微控制器开发的远程温湿度监控系统，支持 WiFi 连接和 MQTT 协议，为研发实习期间完成的项目。"
img: assets/img/projects/esp32_monitoring_system/cover.jpg
importance: 4
category: industry
tags: [嵌入式系统, ESP32, 物联网, MQTT, C语言]
related_publications: false
date: 2023-07-01
giscus_comments: true
---

## 项目概述

在 **宜城融创信息科技** 研发实习期间（2023），我开发了一套基于 **ESP32** 微控制器的远程环境监控系统。系统从传感器采集温湿度数据，通过 WiFi 和 **MQTT 协议** 传输至云端服务器，实现实时监控。

## 系统架构

<!-- TODO: 添加系统架构图 -->

{% include figure.liquid path="assets/img/projects/esp32_monitoring_system/architecture.jpg" caption="系统架构：ESP32 + 传感器 + WiFi + MQTT + 云端面板。" class="img-fluid rounded z-depth-1" zoomable=true %}

## 技术细节

### 硬件

- **MCU**：ESP32 开发板
- **传感器**：温湿度传感器（如 DHT22/SHT30）
- **供电**：USB / 电池供电

### 软件

- **编程语言**：C（ESP-IDF / Arduino 框架）
- **通信方式**：WiFi 连接 + MQTT 协议
- **功能特性**：
  - 周期性传感器数据采集
  - WiFi 自动连接与断线重连
  - MQTT 发布/订阅实现实时数据上传
  - 低功耗模式支持

### 云端与可视化

<!-- TODO: 添加仪表盘截图 -->

- 数据可视化监控面板
- 异常数据告警通知

## 演示视频

<!-- TODO: 添加演示视频或截图 -->
<!-- {% include video.liquid provider="bilibili" id="YOUR_BV_NUMBER" caption="ESP32 监控系统演示。" %} -->

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
