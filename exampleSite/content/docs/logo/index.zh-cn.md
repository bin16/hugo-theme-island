---
title: '添加 Logo'
description: >
    你可以在导航栏中添加可选的logo。
date: '2025-01-18T21:46:50+08:00'
draft: false
cover:
    image: cover.webp
categores:
    - docs
tags:
    - logo
    - multilingual
    - assets
authors:
    - alice
---

把你的 logo 图像文件放在站点的 `assets/` 目录下面，并把文件名添加到 hugo.toml 中的 `[params]`。

```toml
# hugo.toml
[params]
logo = "example-logo.png"
```

当然，你也可以为不同语言添加不同的 logo 图像，只需要把 `logo = "example-logo.png"` 添加到[语言的 params 中](https://gohugo.io/content-management/multilingual/)。

``` toml
# hugo.toml
[languages]
  [languages.zh-cn]
    languageCode = "zh-cn"
    languageName = "中文"
    title = "示例网站"
    [languages.zh-cn.params]
      Logo = "example-logo.png" # 在这里添加你的 logo
```
