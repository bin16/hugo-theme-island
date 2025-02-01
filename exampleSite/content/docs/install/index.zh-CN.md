---
title: "如何安装主题"
description: >
    使用 Git Submodules 安装主题到你的网站
date: "2025-01-23T19:58:29+08:00"
draft: false
categories:
    - docs
tags:
    - Hugo
    - Hugo/Theme
    - git
    - Installation
cover:
    image: pattern.webp
authors:
    - alice
---

## 安装主题

### 使用 Git Submodules

比较推荐的安装[主题][theme]的办法是通过 [Git Submodules][git-submodules]。

首次安装时，你需要执行以下命令：

```sh
git submodule add https://github.com/bin16/hugo-theme-island themes/hugo-theme-island
```

另外记得更新你的[配置文件][config-file]使用该主题。

在提交你的站点之后，当你需要在别处 clone 你的项目时，只需要执行以下命令：


```sh
git clone --recurse-submodules https://你的项目仓库地址
```

你可能在克隆时不记得附带 `--recurse-submodules` 语句，那也没有关系，只需要执行以下命令：

```sh
git submodule update --init --recursive
```

### 使用 Hugo Modules

你也可以使用 [Hugo Modules][hugo-modules] 来安装主题。

参见：[https://gohugo.io/hugo-modules/use-modules/#use-a-module-for-a-theme][hugo-module-theme]

[theme]: https://github.com/bin16/hugo-theme-island "Hugo Theme Island"
[git-submodules]: https://git-scm.com/book/en/v2/Git-Tools-Submodules "Git Tools - Submodules"
[config-file]: https://gohugo.io/getting-started/configuration/#configuration-file "Hugo Configuration File"
[hugo-modules]: https://gohugo.io/hugo-modules/ "Hugo Modules"
[hugo-module-theme]: https://gohugo.io/hugo-modules/use-modules/#use-a-module-for-a-theme "Hugo Install Theme Using Hugo Module"
