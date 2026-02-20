---
layout: post
title: 包含Jupyter Notebook的文章
date: 2023-07-04 08:57:00-0400
description: 一篇包含Jupyter Notebook的博客文章示例
tags: 格式 jupyter
categories: sample-posts
giscus_comments: true
related_posts: false
---

要在文章中嵌入 Jupyter Notebook，可以使用以下代码：

{% raw %}

```liquid
{::nomarkdown}
{% assign jupyter_path = 'assets/jupyter/blog.ipynb' | relative_url %}
{% capture notebook_exists %}{% file_exists assets/jupyter/blog.ipynb %}{% endcapture %}
{% if notebook_exists == 'true' %}
  {% jupyter_notebook jupyter_path %}
{% else %}
  <p>Sorry, the notebook you are looking for does not exist.</p>
{% endif %}
{:/nomarkdown}
```

{% endraw %}

让我们来分解一下：这得益于 [Jekyll Jupyter Notebook plugin](https://github.com/red-data-tools/jekyll-jupyter-notebook)，它允许您在文章中嵌入 Jupyter Notebook。该插件本质上调用 [`jupyter nbconvert --to html`](https://nbconvert.readthedocs.io/en/latest/usage.html#convert-html) 将 Notebook 转换为 HTML 页面，然后将其嵌入文章中。由于 [Kramdown](https://jekyllrb.com/docs/configuration/markdown/) 是 Jekyll 的默认 Markdown 渲染器，我们需要用 [::nomarkdown](https://kramdown.gettalong.org/syntax.html#extensions) 标签包围插件调用，以便停止 Kramdown 的处理并原样输出内容。

该插件以 Notebook 的路径作为输入，但它假定文件存在。如果您想在调用插件之前检查文件是否存在，可以使用 `file_exists` 过滤器。这可以避免因插件返回 404 错误而导致主页内容被显示其中。如果文件不存在，可以向用户输出提示信息。上述代码的输出效果如下：

{::nomarkdown}
{% assign jupyter_path = "assets/jupyter/blog.ipynb" | relative_url %}
{% capture notebook_exists %}{% file_exists assets/jupyter/blog.ipynb %}{% endcapture %}
{% if notebook_exists == "true" %}
{% jupyter_notebook jupyter_path %}
{% else %}

<p>Sorry, the notebook you are looking for does not exist.</p>
{% endif %}
{:/nomarkdown}

注意，Jupyter Notebook 同时支持浅色和深色主题。
