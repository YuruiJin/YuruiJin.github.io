---
layout: post
title: 包含伪代码的文章
date: 2024-04-15 00:01:00
description: 展示伪代码的效果示例
tags: 格式 代码
categories: sample-posts
pseudocode: true
---

这是一个包含伪代码的示例文章，由 [pseudocode](https://github.com/SaswatPadhi/pseudocode.js) 渲染。此处展示的示例与 [pseudocode.js](https://saswat.padhi.me/pseudocode.js/) 文档中的示例相同，但有一个简单而重要的变化：每次需要使用 `$` 的地方，都应改用 `$$`。此外，请注意前置元数据中的 `pseudocode` 键需设置为 `true` 以启用伪代码渲染。以下代码：

````markdown
```pseudocode
% This quicksort algorithm is extracted from Chapter 7, Introduction to Algorithms (3rd edition)
\begin{algorithm}
\caption{Quicksort}
\begin{algorithmic}
\PROCEDURE{Quicksort}{$$A, p, r$$}
    \IF{$$p < r$$}
        \STATE $$q = $$ \CALL{Partition}{$$A, p, r$$}
        \STATE \CALL{Quicksort}{$$A, p, q - 1$$}
        \STATE \CALL{Quicksort}{$$A, q + 1, r$$}
    \ENDIF
\ENDPROCEDURE
\PROCEDURE{Partition}{$$A, p, r$$}
    \STATE $$x = A[r]$$
    \STATE $$i = p - 1$$
    \FOR{$$j = p$$ \TO $$r - 1$$}
        \IF{$$A[j] < x$$}
            \STATE $$i = i + 1$$
            \STATE exchange
            $$A[i]$$ with $$A[j]$$
        \ENDIF
        \STATE exchange $$A[i]$$ with $$A[r]$$
    \ENDFOR
\ENDPROCEDURE
\end{algorithmic}
\end{algorithm}
```
````

生成效果：

```pseudocode
% This quicksort algorithm is extracted from Chapter 7, Introduction to Algorithms (3rd edition)
\begin{algorithm}
\caption{Quicksort}
\begin{algorithmic}
\PROCEDURE{Quicksort}{$$A, p, r$$}
    \IF{$$p < r$$}
        \STATE $$q = $$ \CALL{Partition}{$$A, p, r$$}
        \STATE \CALL{Quicksort}{$$A, p, q - 1$$}
        \STATE \CALL{Quicksort}{$$A, q + 1, r$$}
    \ENDIF
\ENDPROCEDURE
\PROCEDURE{Partition}{$$A, p, r$$}
    \STATE $$x = A[r]$$
    \STATE $$i = p - 1$$
    \FOR{$$j = p$$ \TO $$r - 1$$}
        \IF{$$A[j] < x$$}
            \STATE $$i = i + 1$$
            \STATE exchange
            $$A[i]$$ with $$A[j]$$
        \ENDIF
        \STATE exchange $$A[i]$$ with $$A[r]$$
    \ENDFOR
\ENDPROCEDURE
\end{algorithmic}
\end{algorithm}
```
