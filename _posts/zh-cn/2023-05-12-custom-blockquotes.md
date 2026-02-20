---
layout: post
title: 包含自定义引用块的文章
date: 2023-05-12 15:53:00-0400
description: 一篇包含自定义引用块样式的博客文章示例
tags: 格式 引用块
categories: sample-posts
giscus_comments: true
related_posts: true
---

本文展示如何为引用块添加自定义样式。基于 [jekyll-gitbook](https://github.com/sighingnow/jekyll-gitbook) 的实现。

我们决定支持与 [jekyll-gitbook](https://sighingnow.github.io/jekyll-gitbook/jekyll/2022-06-30-tips_warnings_dangers.html) 相同的自定义引用块样式，这些样式在许多其他网站中也有使用。样式定义可以在 [\_base.scss](https://github.com/george-gca/multi-language-al-folio/blob/main/_sass/_base.scss) 文件中找到，具体如下：

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

普通引用块的使用方式如下：

```markdown
> 这是一个普通的引用块
> 可以像平常一样使用
```

> 这是一个普通的引用块
> 可以像平常一样使用

通过在引用块中添加特定类名，可以使用这些自定义样式，如下所示：

<!-- prettier-ignore-start -->

```markdown
> ##### 提示
>
> 当您想给出与特定内容相关的建议时，
> 可以使用提示块。
{: .block-tip }
```

> ##### TIP
>
> A tip can be used when you want to give advice
> related to a certain content.
{: .block-tip }

```markdown
> ##### 警告
>
> 这是一个警告，应该在您想要
> 提醒用户注意时使用
{: .block-warning }
```

> ##### WARNING
>
> This is a warning, and thus should
> be used when you want to warn the user
{: .block-warning }

```markdown
> ##### 危险
>
> 这是一个危险区域，
> 应谨慎使用
{: .block-danger }
```

> ##### DANGER
>
> This is a danger zone, and thus should
> be used carefully
{: .block-danger }

<!-- prettier-ignore-end -->
