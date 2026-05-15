---
title: 'Adding Logo'
description: >
    You can add optional logo in navigation page header.
    It will auto create 32x32, 16x16 and 180x180 icons and link tags.
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

## Add your logo

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
    locale = "en"
    label = "English"
    title = "ExampleSite"
    [languages.en.params]
      logo = "example-logo.png" # add your logo here.
```

## Auto generating icons from logo

It will auto generate the following icons from logo:

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

If `site.webmanifest` exists in assets dir, the following link tag is added.

```html
<!-- head-icon.html -->
{{- with resources.Get "site.webmanifest" -}}
    <link rel="manifest" href="{{ .RelPermalink }}" />
{{- end -}}
```

## favicon.ico

If `favicon.ico` exists in assets dir, the following link tag is added.

```html
<!-- head-icon.html -->
{{- with resources.Get "favicon.ico" -}}
    <link rel="shortcut icon" href="{{ .RelPermalink }}" type="image/x-icon" />
{{- end -}}
```
