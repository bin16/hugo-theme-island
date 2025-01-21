---
title: 'Icons'
description: >
    Using icons, and adding more icons.
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

Icons can be used in [the main menu (menu in navigation bar)](/docs/menu-config/), or taxonomy pages.

The built-in icons listed under `assets/icons` directory, are partial of [heroicons](https://heroicons.com/).

### Add more icons

You can add more svg icons (not limited in heroicons) to your site's `assets/icons` directory to extend or override icons.

Icons can be in sub directory under `assets/icons`, for example, if you have my-icon.svg under assets/icons/my-icons/, you can reference that icon with name "my-icons/my-icon".

Check `partials/icon.html` to get more information.
