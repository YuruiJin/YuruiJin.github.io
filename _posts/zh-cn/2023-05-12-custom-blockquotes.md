---
layout: post
title: 带有自定义引用块的文章
date: 2023-05-12 15:53:00-0400
description: 带有自定义引用块的博客文章示例
tags: formatting blockquotes
categories: sample-posts
giscus_comments: true
related_posts: true
---

这篇文章展示了如何为引用块添加自定义样式。基于 [jekyll-gitbook](https://github.com/sighingnow/jekyll-gitbook) 的实现。

我们决定支持与 [jekyll-gitbook](https://sighingnow.github.io/jekyll-gitbook/jekyll/2022-06-30-tips_warnings_dangers.html) 相同的自定义引用块，这些样式也可以在许多其他网站的样式中找到。样式定义可以在 [\_base.scss](https://github.com/george-gca/multi-language-al-folio/blob/main/_sass/_base.scss) 文件中找到，更具体地说：

```scss
/* Tips, warnings, and dangers */
.post .post-content blockquote {
  &.block-tip {
    border-color: var(--global-tip-block);
    background-color: var(--global-tip-block-bg);

    p {
      color: var(--global-tip-block-text);
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      color: var(--global-tip-block-title);
    }
  }

  &.block-warning {
    border-color: var(--global-warning-block);
    background-color: var(--global-warning-block-bg);

    p {
      color: var(--global-warning-block-text);
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      color: var(--global-warning-block-title);
    }
  }

  &.block-danger {
    border-color: var(--global-danger-block);
    background-color: var(--global-danger-block-bg);

    p {
      color: var(--global-danger-block-text);
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      color: var(--global-danger-block-title);
    }
  }
}
```

常规引用块可以按如下方式使用：

```markdown
> This is a regular blockquote
> and it can be used as usual
```

> 这是一个常规引用块
> 可以正常使用

这些自定义样式可以通过向引用块添加特定类来使用，如下所示：

<!-- prettier-ignore-start -->

```markdown
> ##### 提示
>
> 当您想要提供与某些内容相关的建议时
> 可以使用提示。
{: .block-tip }
```

> ##### 提示
>
> 当您想要提供与某些内容相关的建议时
> 可以使用提示。
{: .block-tip }

```markdown
> ##### 警告
>
> 这是一个警告，因此当您
> 想要警告用户时应使用它
{: .block-warning }
```

> ##### 警告
>
> 这是一个警告，因此当您
> 想要警告用户时应使用它
{: .block-warning }

```markdown
> ##### 危险
>
> 这是一个危险区域，因此
> 应谨慎使用
{: .block-danger }
```

> ##### 危险
>
> 这是一个危险区域，因此
> 应谨慎使用
{: .block-danger }

<!-- prettier-ignore-end -->
