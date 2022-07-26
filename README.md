# Countr Website

This website is built using [Docusaurus 2](https://docusaurus.io/) and deployed using [Cloudflare Pages](https://pages.cloudflare.com/).

The deployed version is available at [countr.xyz](https://countr.xyz) or [countr.pages.dev](https://countr.pages.dev).

## Contribute

You can contribute in two ways:
1. Edit or create new content in the [`/content`](content/) directory. **You don't need to know programming to write new content**, but you should know some markdown. If not then we'll help you out :)
    * *Optional: set up a [local development](#local-development) to preview your edits.*
2. Edit the actual source code of the website. You need programming for this though.
    * The frontend code is in the [`/src`](src/) directory, and static files are in [`/static`](static/).
    * The backend code is in the [`/functions`](functions/) directory and uses [Cloudflare Pages' Functions](https://developers.cloudflare.com/pages/platform/functions/).
    * *You're required to set up a [local development](#local-development) for this, but we assume you know how to do this.*

Any contribution is welcome as long as it follows our guidelines.

### Installation

```sh
$ npm i
```

### Local development

```sh
$ npm run dev
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build and test

```sh
$ npm run build
$ npm run serve
```

This generates static content into the `build` directory and can be served using any static contents hosting service. The second command also serves the content locally for testing.
