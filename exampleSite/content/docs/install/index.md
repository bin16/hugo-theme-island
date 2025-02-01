---
title: "How to install theme"
description: >
    Using git submodules to install the theme to your site.
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

## Install The Theme

### Using Git Submodules

The recommanded method to install [the theme][theme] is using [git submodules][git-submodules].

For the first time installing the theme, run the following command in your site's directory.

```sh
git submodule add https://github.com/bin16/hugo-theme-island themes/hugo-theme-island
```

And also remember to edit your [configuration file][config-file] to add the theme.

After committed and push you site, when you want to clone the project somewhere else, just run

```sh
git clone --recurse-submodules https://repo-of-your-site
```

Or, may be you have already cloned the repo without the `--recurse-submodules` flag, just run:

```sh
git submodule update --init --recursive
```

### Using Hugo Modules

You can also install theme with [Hugo Modules][hugo-modules]. 

See: [https://gohugo.io/hugo-modules/use-modules/#use-a-module-for-a-theme][hugo-module-theme]

[theme]: https://github.com/bin16/hugo-theme-island "Hugo Theme Island"
[git-submodules]: https://git-scm.com/book/en/v2/Git-Tools-Submodules "Git Tools - Submodules"
[config-file]: https://gohugo.io/getting-started/configuration/#configuration-file "Hugo Configuration File"
[hugo-modules]: https://gohugo.io/hugo-modules/ "Hugo Modules"
[hugo-module-theme]: https://gohugo.io/hugo-modules/use-modules/#use-a-module-for-a-theme "Hugo Install Theme Using Hugo Module"
