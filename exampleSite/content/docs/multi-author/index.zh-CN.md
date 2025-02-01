---
title: '配置（多）作者'
description: >
    作者以及多作者相关的功能。
date: '2025-01-18T21:34:09+08:00'
draft: false
cover:
    image: cover.webp
categories:
    - docs
tags:
    - author
    - multi-author
    - taxonomies
    - avatar
    - taxonomies
authors:
    - bob
---

## 启用多作者功能

多作者的功能是基于 Hugo 的分类系统实现的，authors 是一种分类法。要启用此功能，需要编辑 hugo.toml，在 `[Taxonomies]` 下面增加 `author = "authors"`。

```toml
# hugo.toml
[Taxonomies]
tag = "tags"
category = "categories"
author = "authors"
```

### 头像

content/authors/作者/_index.md 中为添加 `avatar` 为作者设置头像。

```yml
# content/authors/EXAMPLE/_index.md
title: "Example Author"
avatar:
    image: one-avatar.png
    alt: ...
cover:
    image: background.png
    alt: ...
```

查看 [Taxonomies][doc] 了解更多。

[doc]: https://gohugo.io/content-management/taxonomies/ "Taxonomies"
