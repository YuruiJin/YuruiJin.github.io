---
page_id: core_research_template
published: false
layout: page
title: "Core Research: [Your Research Title]"
description: One-sentence description of your core PhD research contribution.
img: assets/img/projects/project1/cover.jpg
importance: 1
category: core-research
tags: [research, robotics, PhD]
related_publications: true
github: https://github.com/YuruiJin/your-repo
date: 2024-01-01
giscus_comments: true
---

## Overview

<!-- Briefly introduce the research background and objectives. What problem does this work address? -->

This project addresses [research problem] in the field of [area]. The motivation stems from [motivation]. Our goal is to [objective].

## Technical Approach

<!-- Describe the core technical methods and innovations. -->

Our approach consists of the following key components:

1. **[Component 1]**: Description of the first technical contribution.
2. **[Component 2]**: Description of the second technical contribution.
3. **[Component 3]**: Description of the third technical contribution.

## System Architecture

<!-- Insert architecture diagram here using figure.liquid -->

{% include figure.liquid path="assets/img/projects/project1/architecture.jpg" caption="System architecture overview." class="img-fluid rounded z-depth-1" %}

## Key Results

<!-- Present quantitative results and comparisons. -->

| Metric | Ours | Baseline A | Baseline B |
|--------|------|------------|------------|
| [Metric 1] | **XX%** | YY% | ZZ% |
| [Metric 2] | **XX** | YY | ZZ |

## Demo

<!-- Embed demo video using video.liquid (YouTube or Bilibili only). -->

{% include video.liquid provider="youtube" id="dQw4w9WgXcQ" caption="Demo video of the system in action." %}

<!-- For Bilibili: {% include video.liquid provider="bilibili" id="BV1xx411c7mD" caption="演示视频" %} -->

## Related Publications

<!-- List related papers. With related_publications: true in front matter, they will be auto-listed from _bibliography/. -->

See the [Publications](/publications/) page for related work.

## Code & Resources

- **GitHub**: [your-repo](https://github.com/YuruiJin/your-repo)
- **Dataset**: [Link to dataset]
- **arXiv**: [Link to paper]
