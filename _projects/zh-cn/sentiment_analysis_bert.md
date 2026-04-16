---
page_id: sentiment_analysis_bert
layout: page
title: "基于 BERT 的电影评论情感分析"
description: "开发基于 BERT 的情感分析模型，采用数据增强与重采样技术处理数据不平衡问题，使用 LIME 和 SHAP 工具提升模型可解释性。"
img: assets/img/projects/sentiment_analysis_bert/cover.jpg
importance: 4
category: algorithm
tags: [machine-learning, NLP, BERT, sentiment-analysis, Python]
related_publications: false
date: 2023-02-01
giscus_comments: true
---

## 项目概述

本项目面向电影评论情感分类任务，构建了基于 BERT 的情感分析模型，重点解决类别不平衡与模型可解释性问题。

## 技术方案

- 训练 BERT 模型进行评论级情感分类。
- 通过数据增强、重采样与加权损失缓解数据不平衡。
- 使用 LIME 与 SHAP 对关键词贡献进行可视化分析，提升模型可解释性。

<!-- TODO: Add figure -->
<!-- {% include figure.liquid path="assets/img/projects/sentiment_analysis_bert/pipeline.jpg" caption="结合可解释性分析的 BERT 情感分析流程。" class="img-fluid rounded z-depth-1" zoomable=true %} -->

## 项目结果

该流程在不平衡数据条件下提升了预测稳健性，并提供了更直观的模型决策解释。
