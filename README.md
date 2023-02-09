[![Build test](https://img.shields.io/github/actions/workflow/status/countr/website/build-test.yml)](https://github.com/countr/website/actions/workflows/build-test.yml)
[![Linting](https://img.shields.io/github/actions/workflow/status/countr/website/linting.yml?label=quality)](https://github.com/countr/website/actions/workflows/linting.yml)
[![Analysis and Scans](https://img.shields.io/github/actions/workflow/status/countr/website/analysis-and-scans.yml?label=scan)](https://github.com/countr/website/actions/workflows/analysis-and-scans.yml)
[![DeepScan grade](https://deepscan.io/api/teams/16173/projects/21787/branches/633467/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=16173&pid=21787&bid=633467)
[![docusaurus version](https://img.shields.io/github/package-json/dependency-version/countr/website/@docusaurus/core?label=docusaurus)](https://github.com/facebook/docusaurus/releases)
[![GitHub Issues](https://img.shields.io/github/issues-raw/countr/website.svg)](https://github.com/countr/website/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr-raw/countr/website.svg)](https://github.com/countr/website/pulls)

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
$ npm i -g pnpm
$ pnpm i
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
