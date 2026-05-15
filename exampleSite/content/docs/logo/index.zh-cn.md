---
title: '添加 Logo'
description: >
    你可以在导航栏中添加可选的logo。
date: '2025-01-18T21:46:50+08:00'
draft: false
cover:
    image: cover-x-2.png
categores:
    - docs
tags:
    - logo
    - multilingual
authors:
    - alice
---

## 配置你的 logo

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
    locale = "zh-cn"
    label = "中文"
    title = "示例网站"
    [languages.zh-cn.params]
      Logo = "example-logo.png" # 在这里添加你的 logo
```

## 自动生成图标

如果你配置了 logo, 它会自动生成下面三个图标：

- 32x32 png
- 16x16 png
- 180x180 apple-touch-icon png

```html
<!-- head-icon.html -->
{{- with $logo.Process "resize 180x png" -}}
    <link rel="apple-touch-icon" sizes="180x180" href="{{ .RelPermalink }}">
{{- end -}}
{{- with $logo.Process "resize 32x png" -}}
    <link rel="icon" type="image/png" sizes="32x32" href="{{ .RelPermalink }}" />
{{- end -}}
{{- with $logo.Process "resize 16x png" -}}
    <link rel="icon" type="image/png" sizes="16x16" href="{{ .RelPermalink }}" />
{{- end -}}
```

## site.webmanifest

如果你把 `site.webmanifest` 放在 assets/ 目录中，主题会自动添加 link 标签。

```html
<!-- head-icon.html -->
{{- with resources.Get "site.webmanifest" -}}
    <link rel="manifest" href="{{ .RelPermalink }}" />
{{- end -}}
```

## favicon.ico

如果你把 `favicon.ico` 放在 assets/ 目录中，主题会自动添加 link 标签。

```html
<!-- head-icon.html -->
{{- with resources.Get "favicon.ico" -}}
    <link rel="shortcut icon" href="{{ .RelPermalink }}" type="image/x-icon" />
{{- end -}}
```
