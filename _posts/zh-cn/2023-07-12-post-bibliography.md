---
layout: post
title: 带有参考文献的文章
date: 2023-07-12 09:56:00-0400
description: 带有参考文献的博客文章示例
tags: formatting bib
categories: sample-posts
giscus_comments: true
related_posts: false
related_publications: true
---

这篇文章展示了如何向简单的博客文章添加参考文献。我们支持 [jekyll-scholar](https://github.com/inukshuk/jekyll-scholar) 支持的所有引用样式。这意味着简单引用如 {% cite einstein1950meaning %}、多个引用如 {% cite einstein1950meaning einstein1905movement %}、长引用如 {% reference einstein1905movement %} 或引语：

{% quote einstein1905electrodynamics %}
Lorem ipsum dolor sit amet, consectetur adipisicing elit,
sed do eiusmod tempor.

Lorem ipsum dolor sit amet, consectetur adipisicing.
{% endquote %}

如果您想要更学术的内容，请查看 [distill 样式文章]({% post_url 2018-12-22-distill %})。
