# Hugo-Theme-Island

Based on [Tailwind CSS 4.0](https://tailwindcss.com/docs/v4-beta), work in progress.

![hugo-theme-island screenshot](https://github.com/bin16/hugo-theme-island/blob/main/images/tn.png)

## Development

Just check package.json and install packages. 

Run following commands with two consoles to start the development server:

```sh
npm run watch-css
```

```sh
npm run hugo
```

A page refreshing may be required each time after code changed.

> [!NOTE]
> Remember to run `npm run build` to generate main.css and commit it to GitHub.

### Why not using the built in [Hugo's css.TailwindCSS feature](https://gohugo.io/functions/css/tailwindcss/) feature?

As a published theme, I believe that the css should not be built every time when building the site, and users don't have to install node_modules. So let's simply commit the generated `assets/css/main.css` and load it from layouts directly. 

To generate the main.css file, `npx @tailwindcss/cli -i assets/css/tailwind.css -o assets/css/main.css` is called. And for development, `npx @tailwindcss/cli -i assets/css/tailwind.css -o assets/css/main.css -w` (the "-w") is very consistent.
