---
id: index
title: Userdocks REST Api
description: Userdocks REST Api
slug: /api/rest
tags: [api, rest, user management]
---

# REST Introduction

> An access token provides access to the userdocks application as well as to your own server if you use userdocks to authenticate users. NEVER store them in cookies or in the local storage. Always use the userdocks SDK to access your tokens.

> API keys are like superuser passwords to the userdocks application. NEVER expose them publicly, NEVER send them to the client, and NEVER make requests from the browser with an API key. Always keep them on your server and only store them in memory in an environment variable.

In this sectionyou will get an overview of the current REST Endpoint of the userdocks API.

If an app user has an user role with the appropriate access, it can access the userdocks user management REST API. You can also manage the userdocks users via your own server with read only and write only api keys.

There are 6 different Access Controll Functions which can be toggled (on/off) on creation of an [user role](/dashboard/user-management).

You can toggle a user role (on/off) in the [dashboard for each user](/dashboard/user-management) or by using this API.