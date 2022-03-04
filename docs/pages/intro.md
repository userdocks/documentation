---
title: Introduction
sidebar_position: 1
slug: /
---

![logo userdocks standard](/img/logo_userdocks_standard.jpg)

# Introduction

> **userdocks** adds authentication and authorization to your web apps and static sites by adding a single JavaScript file to your code. It is completly framework agnostic.

## The Problem

Adding authentication, authorization, and user management to your web application can be a very time consuming task, especially when you have to add features to your initial product.

**Features like**:

- Adding a social login for identity providers
  - e.g. Facebook, Twitter, Google, GitHub
- Adding authorization
  - e.g. different user roles with different access to your application
- Adding user management
  - e.g. freezing/unfreezing user accounts, deleting users, revoking tokens, adding, user roles, manage user role access, adding user roles to users, inviting new users, making the app invite only, etc...
- Adding payment solutions
  - e.g. adding a subscription model for your users, adding one time payments, adding freezing users based on failed payments, etc...

These are just a few features you might encounter along your way of creating your application. And for every project you have to start all over again. That is where `Identidy & Access Management Broker/Provider` come in handy. They offer broad solutions for these kind of problems.

We believe that an `Identity & Access Management Broker/Provider` should not only abstract `authentication, authorization, payment solutions and user management` away for its clients. It should also be self explainatory and "easy" to implement. But sadly most `IAM` Brokers/Providers want you to learn another "framework" - their framework - where they have a hundred diffenert solutions for the same problem. This will take you to the beginning of the problem once again, step by step: learning it, teaching it to your colleagues, and finally implementing it with your team. This will take hours, days or even weeks (probably per developer) and most importantly, of course will cost you money.

This is why we created `userdocks`.

## The Solution

![logo userdocks standard](/img/logo_userdocks_standard.jpg)

A single JavaScript file for your web application with a minimal SDK. Not hard to learn, and easy to implement:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>My first userdocks app</title>
  </head>
  <body>
    <button
      id="userdocks-sign-in-button"
      data-client-id="<your-userdocks-app-id>"
      data-redirect-uri="<https://your-web-app.com/callback>"
    >
      Login
    </button>
    <button
      id="userdocks-sign-up-button"
      data-client-id="<your-userdocks-app-id>"
      data-redirect-uri="<https://your-web-app.com/callback>"
    >
      Sign Up
    </button>
    <script
      src="https://sdk.userdocks.com/identity.js"
      type="text/javascript"
    ></script>
  </body>
</html>
```

Two buttons (Login, Sign Up) with some attributes, and a single JavaScript file. Congratulations, you are finished implementing the very basic `authentication, authorization and user management` for your web application.

When a user on your web app clicks sign-up, it is redirected to a unique login page for your web application. After registration, confirming email address, and login the user will be redirected to your `data-redirect-uri`. Here you will need to exchange a code for an access and an id token.

```js
// script on your callback-uri

// exchange the code for the tokens
const isLoginSuccess = await window.USERDOCKS.exchangeCodeForToken();
if (isLoginSuccess) {
  // redirect your user to your application
}
```

Everytime a user makes a request to `userdocks` you would need to add the `access_token` to your HTTP headers, and you will use the `id_token` to verify the user on your own application backend. Every token is secured with a 512 bit secret. You will get a unique secret per application and you can use this secret to verify the `ìd_token` on your server, the `access_tokens` have another secret that is only known by our application (userdocks) so you will not be able to verify the signature on your own server.

```js
// get the tokens that are only stored in-memory and in another thread via a web worker
const {
  token_type,
  expires_in,
  redirect_uri,
  access_token,
  id_token,
} = await window.USERDOCKS.getToken();

// make a request to `userdocks` or your own server
// example url
await fetch('https://api.userdocks.com/api/v1/hello', {
  method: 'POST',
  headers: {
    Authorization: `${token_type} ${access_token}`, // or `${token_type} ${id_token}` if you make a request to your own server
  },
  // example data
  body: JSON.stringify({
    hello: 'world',
  }),
});
```

If the user is switching tabs or is reloading the site the `getToken` method will serve an empty token which will resolve in an error when tring to access private data on `userdocks` or your own server. So there is a `silent refresh` method, which will spawn an hidden iframe which tries to authenticate the user without the user having to enter any credientials. If there is an active session we will return the tokens, which you can use to redo the previous failed request.

```js
// silently refresh, without any user action
await silentRefresh({
  client_id: '<your-userdocks-app-id>',
  redirect_uri: '<https://your-web-app.com/callback>',
  origin: '<https://your-web-app.com>',
});

// get the NEW tokens that are only stored in-memory and in another thread via a web worker
const {
  token_type,
  expires_in,
  redirect_uri,
  access_token,
  id_token,
} = await window.USERDOCKS.getToken();

// RETRY the request to `userdocks` or your own server
// example url
await fetch('https://api.userdocks.com/api/v1/hello', {
  method: 'POST',
  headers: {
    Authorization: `${token_type} ${access_token}`, // or `${token_type} ${id_token}` if you make a request to your own server
  },
  // example data
  body: JSON.stringify({
    hello: 'world',
  }),
});
```
