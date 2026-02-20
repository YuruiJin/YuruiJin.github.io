---
layout: post
title: 带有 jupyter notebook 的文章
date: 2023-07-04 08:57:00-0400
description: 带有 jupyter notebook 的博客文章示例
tags: formatting jupyter
categories: sample-posts
giscus_comments: true
related_posts: false
---

要在文章中包含 jupyter notebook，您可以使用以下代码：

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

让我们分解一下：这要归功于 [Jekyll Jupyter Notebook 插件](https://github.com/red-data-tools/jekyll-jupyter-notebook)，它允许您在文章中嵌入 jupyter notebook。它基本上调用 [`jupyter nbconvert --to html`](https://nbconvert.readthedocs.io/en/latest/usage.html#convert-html) 将 notebook 转换为 html 页面，然后将其包含在文章中。由于 [Kramdown](https://jekyllrb.com/docs/configuration/markdown/) 是 Jekyll 的默认 Markdown 渲染器，我们需要用 [::nomarkdown](https://kramdown.gettalong.org/syntax.html#extensions) 标签包围对插件的调用，以便它停止使用 Kramdown 处理这部分，并按原样输出内容。

该插件将 notebook 的路径作为输入，但它假定文件存在。如果您想在调用插件之前检查文件是否存在，可以使用 `file_exists` 过滤器。这避免了从插件获取 404 错误，并最终在其中显示主页。如果文件不存在，您可以向用户输出一条消息。上面显示的代码输出如下：

{::nomarkdown}
{% assign jupyter_path = "assets/jupyter/blog.ipynb" | relative_url %}
{% capture notebook_exists %}{% file_exists assets/jupyter/blog.ipynb %}{% endcapture %}
{% if notebook_exists == "true" %}
{% jupyter_notebook jupyter_path %}
{% else %}

<p>抱歉，您正在寻找的 notebook 不存在。</p>
{% endif %}
{:/nomarkdown}

请注意，jupyter notebook 同时支持浅色和深色主题。
