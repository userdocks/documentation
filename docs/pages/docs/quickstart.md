---
id: quickstart
title: Quickstart
description: Quickstart
slug: /quickstart
tags: [getting started]
---

# Quickstart

* Create an account on [https://userdocks.com](https://userdocks.com)
* Click on `Add project` to create your first project
* Click on `Add app` to create your frist app
* Copy the app id
* Add this script to your page `<script defer src="https://unpkg.com/@userdocks/web-client-sdk/dist/userdocks.umd.js"></script>`
* Initialize userdocks with your options `<script>userdocks.initialize({ app: { origin: <uri-of-your-app>, clientId: <your-app-id>, redirectUri: <your-redirect-uri> } })</script>` [read more](https://github.com/userdocks/web-client-sdk#userdocksinitialize)
* Add a button to your website `<button onclick="userdocks.redirectTo({ type: 'signUp' })">Sign Up</button>`
* Register your first user
