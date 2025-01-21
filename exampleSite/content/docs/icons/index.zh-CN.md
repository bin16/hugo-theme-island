---
title: '配置图标'
description: >
    增加更多图标，以及使用图标。
date: '2025-01-18T13:24:23+08:00'
draft: false
cover:
    image: cover.webp
categories:
    - docs
tags:
    - icons
    - heroicons
---

## Icons

## 图标

图标可以用在[导航栏菜单](/docs/menu-config/)，或者[分类页 / taxonomy pages](https://gohugo.io/content-management/taxonomies/)。

内置的图标存放于主题的 `assets/icons` 目录下面，是 [heroicons](https://heroicons.com/) 的一部分。

### 添加更多图标

你可以添加更多 svg 图标（不局限于 heroicons）到你的站点的 `assets/icons` 目录下面，来扩展或者覆盖可用的图标。

图标也可以放在 `assets/icons` 下面的子文件夹中，例如，如果图标 `assets/icons/my-icons/my-icon.svg` 存在，那么你可以使用 `my-icons/my-icon` 来引用你的图标。

查看 `partials/icon.html` 了解更多。
