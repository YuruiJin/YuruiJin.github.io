---
page_id: esp32_monitoring_system
layout: page
title: "ESP32 Remote Temperature & Humidity Monitoring System"
description: "Developed a remote temperature and humidity monitoring system using ESP32 microcontroller with WiFi connectivity and MQTT protocol during R&D internship."
img: assets/img/projects/esp32_monitoring_system/cover.jpg
importance: 4
category: industry
tags: [embedded-systems, ESP32, IoT, MQTT, C]
related_publications: false
date: 2023-07-01
giscus_comments: true
---

## Overview

During my R&D internship at **Yicheng Rong Chuang Information Technology** (2023), I developed a remote environmental monitoring system based on the **ESP32** microcontroller. The system collects temperature and humidity data from sensors and transmits it to a cloud server via WiFi and **MQTT protocol** for real-time monitoring.

## System Architecture

<!-- TODO: Add system architecture diagram -->

{% include figure.liquid path="assets/img/projects/esp32_monitoring_system/architecture.jpg" caption="System architecture: ESP32 + sensors + WiFi + MQTT + cloud dashboard." class="img-fluid rounded z-depth-1" zoomable=true %}

## Technical Details

### Hardware

- **MCU**: ESP32 development board
- **Sensors**: Temperature and humidity sensors (e.g., DHT22/SHT30)
- **Power**: USB / battery powered

### Software

- **Language**: C (ESP-IDF / Arduino framework)
- **Communication**: WiFi connectivity + MQTT protocol
- **Features**:
  - Periodic sensor data collection
  - WiFi auto-connect and reconnect
  - MQTT publish/subscribe for real-time data upload
  - Low-power mode support

### Cloud & Dashboard

<!-- TODO: Add dashboard screenshot -->

- Data visualization and monitoring dashboard
- Alert notifications for abnormal readings

## Demo

<!-- TODO: Add demo video or screenshots -->
<!-- {% include video.liquid provider="bilibili" id="YOUR_BV_NUMBER" caption="ESP32 monitoring system demo." %} -->

## Resources

- For source code or further details, please feel free to contact me via email.
