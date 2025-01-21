---
title: '多语言和国际化'
description: >
    多语言，国际化，日期格式，以及内容翻译。
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

## 多语言

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

参考：https://gohugo.io/content-management/multilingual/

### 日期格式 / DateFormat

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

主题将首先查找语言参数中的 [02] DateFormat，如果不存在，则接下来查找站点参数中的 [01] DateFormat。

关于日期的格式，查看：https://gohugo.io/functions/time/format/#layout-string

### 添加你自己的翻译 / 扩展翻译表

在你的站点的 `i18n/` 目录下面创建 `SOME-LANGUAGE-CODE.yml`，查看 [Use translation tables][hugo-i18n] 了解更多。

[hugo-i18n]: https://gohugo.io/content-management/multilingual/#use-translation-tables "Use translation tables"
