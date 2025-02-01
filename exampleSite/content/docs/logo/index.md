---
title: 'Adding Logo'
description: >
    You can add optional logo in navigation page header.
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

Put your logo image into your site's `assets/` directory, and add filename to your hugo.toml's `[params]` section.

```toml
# hugo.toml
[params]
logo = "example-logo.png"
```

Of cource, you can add language-specific logo images by adding logo in [language's params section](https://gohugo.io/content-management/multilingual/).

``` toml
# hugo.toml
[languages]
  [languages.en]
    languageCode = "en"
    languageName = "English"
    title = "ExampleSite"
    [languages.en.params]
      Logo = "example-logo.png" # add your logo here.
```
