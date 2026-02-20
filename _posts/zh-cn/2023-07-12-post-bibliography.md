---
layout: post
title: 包含参考文献的文章
date: 2023-07-12 09:56:00-0400
description: 一篇包含参考文献的博客文章示例
tags: 格式 参考文献
categories: sample-posts
giscus_comments: true
related_posts: false
related_publications: true
---

本文展示如何在普通博客文章中添加参考文献。我们支持 [jekyll-scholar](https://github.com/inukshuk/jekyll-scholar) 所支持的所有引用样式。包括简单引用如 {% cite einstein1950meaning %}、多项引用如 {% cite einstein1950meaning einstein1905movement %}、长引用如 {% reference einstein1905movement %}，以及引语引用：

{% quote einstein1905electrodynamics %}
Lorem ipsum dolor sit amet, consectetur adipisicing elit,
sed do eiusmod tempor.

Lorem ipsum dolor sit amet, consectetur adipisicing.
{% endquote %}

如果您需要更学术化的展示效果，请参阅 [distill 样式文章]({% post_url 2018-12-22-distill %})。
