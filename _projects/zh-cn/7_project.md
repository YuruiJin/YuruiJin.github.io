---
layout: page
title: 项目7
description: 带背景图片
img: assets/img/4.jpg
importance: 1
category: work
related_publications: true
---

每个项目都有一个精美的特色展示页面。
在灵活的三栏网格格式中添加图片非常简单。
您可以将照片设置为 1/3、2/3 或全宽显示。

要在作品集页面中为项目设置背景，只需在前置元数据中添加 img 标签，如下所示：

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
    轻松为照片添加说明。左图是一条穿越隧道的道路。中图是落叶的艺术摄影。右图是一位伐木工人手握一把松针的照片。
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/5.jpg" title="示例图片" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    这张图片也可以添加说明，就像变魔术一样。
</div>

您也可以在图片行之间插入普通文字，甚至可以插入引用 {% cite einstein1950meaning %}。
假设您想在发布其余图片之前，先简单介绍一下您的项目。
您描述了为这个项目所付出的汗水与心血，然后……在下一行图片中揭示它的精彩。

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/6.jpg" title="示例图片" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/11.jpg" title="示例图片" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    您还可以使用 2/3 + 1/3 的艺术风格图片组合，就像这样。
</div>

代码非常简单。
只需用 `<div class="col-sm">` 包裹图片，并将其放入 `<div class="row">` 中（了解更多关于 <a href="https://getbootstrap.com/docs/4.4/layout/grid/">Bootstrap 网格</a>系统的内容）。
要使图片自适应，请为每张图片添加 `img-fluid` 类；使用 `rounded` 和 `z-depth-1` 类可以实现圆角和阴影效果。
以下是上述最后一行图片的代码：

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
