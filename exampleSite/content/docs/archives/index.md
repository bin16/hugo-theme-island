---
title: 'Archives Page'
description: >
    How to enable the archives page.
date: '2025-01-26T20:44:58+08:00'
draft: false
tags:
    - archives
categories:
    - docs
authors:
    - bob
---

You will need to create `content/archives/_index.md` to enable the archives page.

```
---
title: "Archives"
description: "..."
draft: false
icon: archive-box
cover:
    image: cover.jpg
---
```

Or, if your file are not at `content/archives/`, you can add `layout: archives` in your markdown's frontmatter.

```
---
title: "Archives"
description: "..."
draft: false
icon: archive-box
cover:
    image: cover.jpg
layout: archives
---
```
