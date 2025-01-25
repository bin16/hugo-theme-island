---
title: "Menu Config"
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

## Main Menu

The menu in navigation is managed in site configuration, you can check [Define in site configuration][main-menu] to get more information.

```toml
# hugo.toml

[menus]
  [[menus.main]]
    identifier = "menu.home"
    name = "Home"
    pageRef = "/"
    weight = 10
    [[menus.main.params]]
      icon = "home"
  [[menus.main]]
    identifier = "menu.tags"
    name = "Tags"
    pageRef = "/tags"
    weight = 20
    [[menus.main.params]]
      icon = "tag"
  [[menus.main]]
    identifier = "menu.archives"
    name = "Archives"
    pageRef = "/archives"
    weight = 30
    [[menus.main.params]]
      icon = "archive-box"
```

### Icons

Icon in menu is totally optional, check **[Icons](/doc/icons/)** to get more information.

## Language-specific Menus

See: [Create language-specific menu entries][lang-menus]

[main-menu]: https://gohugo.io/content-management/menus/#define-in-site-configuration "Define in site configuration"
[lang-menus]: https://gohugo.io/content-management/multilingual/#create-language-specific-menu-entries "Create language-specific menu entries"
