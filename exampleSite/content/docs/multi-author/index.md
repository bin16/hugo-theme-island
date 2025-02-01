---
title: 'Multi Author'
description: >
    Author and multiple authors feature.
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

## Enable multi-author feature

Multi-author feature is based on Hugo's taxonomies, authors is one kind of taxonomy. To enable the feature, you need to edit your hugo.toml, add `author = "authors"` in the `[Taxonomies]` section.

```toml
# hugo.toml
[Taxonomies]
tag = "tags"
category = "categories"
author = "authors"
```

### Avatars

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

You can check [Taxonomies][doc] to get more information.

[doc]: https://gohugo.io/content-management/taxonomies/ "Taxonomies"
