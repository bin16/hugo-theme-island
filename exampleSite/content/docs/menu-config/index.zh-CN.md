---
title: "配置菜单"
description: >
    修改导航栏中的菜单内容。
date: "2025-01-18T13:16:51+08:00"
draft: false
cover:
    image: cover.webp
categories:
  - docs
tags:
  - menus
  - icons
  - i18n
  - multilingual
---

## 主菜单 / Main Menu

导航栏中的菜单可以在 hugo.toml 中配置，查看 [Define in site configuration][main-menu] 获得更多信息。

```toml
# hugo.toml
# https://gohugo.io/getting-started/configuration/#configuration-file

[menus]
  [[menus.main]]
    identifier = "menu.home"
    name = "Home"
    pageRef = "/"
    weight = 10
    [[menus.main.params]]
      icon = "home" # assets/icons/home.svg
  # menu item with absolute path
  [[menus.main]]
    identifier = "menu.tags"
    name = "Tags"
    pageRef = "/tags"
    weight = 20
    [[menus.main.params]]
      icon = "tag" # assets/icons/tag.svg
  # menu item with full url
  [[menus.main]]
    identifier = "menu.repo"
    name = "Github Repo"
    url = "https://github.com/bin16/hugo-theme-island"
    weight = 30
    [[menus.main.params]]
      target = "_blank" # open page in new tab
      icon = "bs/github" # assets/icons/bs/github.svg
```

### 图标

菜单中的图标是可选的，查看 **[Icons](/doc/icons/)** 了解如何配置图标。

## 为不同语言配置不同的菜单

查看：[Create language-specific menu entries][lang-menus]

[main-menu]: https://gohugo.io/content-management/menus/#define-in-site-configuration "Define in site configuration"
[lang-menus]: https://gohugo.io/content-management/multilingual/#create-language-specific-menu-entries "Create language-specific menu entries"
