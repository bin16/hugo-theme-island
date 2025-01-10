Yet another hugo theme, based on Tailwind CSS 4.0, work in progress.

See:

- https://gohugo.io/functions/css/tailwindcss/
- https://tailwindcss.com/docs/v4-beta

----

``` json
"scripts": {
    "watch-css": "npx @tailwindcss/cli -i assets/css/tailwind.css -o assets/css/main.css -w",
    "build": "npx @tailwindcss/cli -i assets/css/tailwind.css -o assets/css/main.css",
    "dev": "hugo server -e theme-dev --theme hugo-theme-island --themesDir ../.. -s ./exampleSite --disableFastRender -D"
}
```

``` html
{{ if eq hugo.Environment "theme-dev" }}
    {{- $css := resources.Get "css/tailwind.css" | css.TailwindCSS }}
    <link rel="stylesheet" href="{{ $css.RelPermalink }}">
{{ else }}
    {{- $css := resources.Get "css/main.css" }}
    <link rel="stylesheet" href="{{ $css.RelPermalink }}">
{{ end }}
```
