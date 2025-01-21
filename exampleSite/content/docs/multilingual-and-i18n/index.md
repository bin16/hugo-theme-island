---
title: 'Multilingual Mode and i18n'
description: >
    Multilingual mode, i18n, date format, and translations.
date: '2025-01-18T13:40:31+08:00'
draft: false
cover:
    image: cover.webp
categories:
    - docs
tags:
    - i18n
    - multilingual
    - DateFormat
---

## Multilingual

```toml
# hugo.toml

defaultContentLanguage = "en"
defaultContentLanguageInSubdir = false

[languages]
  [languages.en]
    disabled = false
    languageCode = "en"
    languageName = "English"
    weight = 0
    title = "ExampleSite"
    [languages.en.params]
      Logo = "demo-logo.png"
      DateFormat = "Oct 15, 2006"
  [languages.zh-CN]
    disabled = false
    languageCode = "zh-CN"
    languageName = "中文"
    title = "示例网站"
    weight = 10
    [languages.zh-CN.params]
      Logo = "demo-logo.png"
    #   DateFormat = "2006-01-02"
```

Reference: https://gohugo.io/content-management/multilingual/

### DateFormat

```toml
# hugo.toml

[params]
DateFormat = "2006-01-02" # [01]

[languages]
    [languages.en]
        # ...
        [languages.en.params]
            DateFormat = "Oct 15, 2006" # [02]
```

[02] DateFormat in language params is looked up first, and if not exist, [01] `DateFormat` in site params is looked up next.

About date format layout, see: https://gohugo.io/functions/time/format/#layout-string

### Add your own translations / Use translation table

Add your `SOME-LANGUAGE-CODE.yml`， in your site's `i18n/` directory, check [Use translation tables][hugo-i18n] to get more information.

[hugo-i18n]: https://gohugo.io/content-management/multilingual/#use-translation-tables "Use translation tables"
