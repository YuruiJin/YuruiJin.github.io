---
page_id: project_4
layout: page
title: 项目 4
description: 另一个没有图片的项目
img:
importance: 3
category: fun
---

每个项目都有一个精美的展示页面。
您可以轻松地以灵活的三列网格格式包含图片。
将您的照片设置为 1/3、2/3 或全宽。

要在作品集页面中为项目添加背景，只需在前置元数据（front matter）中添加 img 标签，如下所示：

    ---
    layout: page
    title: project
    description: a project with a background image
    img: /assets/img/12.jpg
    ---

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/1.jpg" title="示例图片" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/3.jpg" title="示例图片" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/5.jpg" title="示例图片" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    轻松为照片添加说明。左边，一条道路穿过隧道。中间，树叶以艺术风格飘落在一张时尚摄影中。右边，在另一张时尚摄影中，一位伐木工人抓着一把松针。
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/5.jpg" title="示例图片" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    这张图片也可以有说明。就像魔法一样。
</div>

您还可以在图片行之间添加常规文本。
假设您想在发布其余图片之前先写一点关于项目的内容。
您可以描述自己如何为这个项目辛勤劳作、挥洒汗水、甚至_流血_付出，然后……在下一行图片中展示其辉煌成果。

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/6.jpg" title="示例图片" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/11.jpg" title="示例图片" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    您还可以采用艺术风格的 2/3 + 1/3 图片布局，就像这样。
</div>

代码很简单。
只需用 `<div class="col-sm">` 包裹您的图片，并将它们放置在 `<div class="row">` 中（了解更多关于 <a href="https://getbootstrap.com/docs/4.4/layout/grid/">Bootstrap Grid</a> 系统）。
要使图片具有响应性，请为每张图片添加 `img-fluid` 类；要添加圆角和阴影，请使用 `rounded` 和 `z-depth-1` 类。
以下是上面最后一行图片的代码：

{% raw %}

```html
<div class="row justify-content-sm-center">
  <div class="col-sm-8 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-4 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
```

{% endraw %}
