---
id: put-users
title: PUT /users/:userId
description: PUT /users/:userId
slug: /api/rest/users/put-users
tags: [api, rest, user management, users]
---

### Request

This route will update a user of an application.

#### Request Method:

- `PUT`

#### Base URL:

- `https://api.userdocks.com`

#### End Point:

- `/v1/users/:userId`

##### Path Variables:

| Variable | Type | Required | Description |
|---|---|---|---|
| :userId | `String` | `true` | the UUID of the user

##### Query Parameters:

| Variable | Type | Required | Description |
|---|---|---|---|
| :test | `Boolean` | `false` | indicates if the stripe testing API is used or not

#### HTTP Headers:

> Note: Never use API Keys on the client

Access from your server via API keys:

| Property       | Type        | Required  | Access                 | Description                   |
| -------------- | ----------- | --------- | ---------------------- | ----------------------------- |
| X-API-KEY      | `String` | `true` | **Only access to App** | Api key for the userdocks app |
| X-API-KEY-TYPE | `String` | `true` | **Only access to App** | `write`                       |
| X-CLIENT-ID    | `String` | `true` | **Only access to App** | `UUID` of the userdocks app   |

Access from the client via an access token:

| Property       | Type        | Required  | Access                 | Description                   |
| -------------- | ----------- | --------- | ---------------------- | ----------------------------- |
| Authorization  | `String` | `true` | **Only access to this tenant** | Access Token for userdocks tenant |

#### HTTP Body:

> Note: optional variables are marked with a `?` (questionmark) at the end. Do not include the questionmark in the request.

A JSON object:

```json
{
  "user": {
    "language?": String,
    "salutation?": String,
    "salutationOther?": String,
    "acceptedNewsletter?": Boolean,
    "name?": String,
    // open id fields use snake case
    "given_name?": String,
    "family_name?": String,
    "middle_name?": String,
    "nickname?": String,
    "preferred_username?": String,
    "profile?": String,
    "picture?": String,
    "website?": String,
    "email?": String,
    "gender?": String,
    "other_gender?": String,
    "birthdate?": String,
    "zoneinfo?": String,
    "locale?": String,
    "phone_number?": String,
  },
  "test?": Boolean
}
```

#### Response:

- `Object`

#### Example:

```js
try {
  // call userdocks user management API
  const response = await fetch('https://api.userdocks.com/v1/users/:userId', {
    method: 'POST',
    headers: {
      // 'Authorization': String, // when accessed from the client e.g. `Bearer ${accessToken}`
      'X-API-KEY': String,
      'X-CLIENT-ID': String,
      'X-API-KEY-TYPE': 'write',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user: {
        id: String,
        language": String,
        salutation": String,
        salutationOther": String,
        acceptedNewsletter": Boolean,
        name: String,
        // open id fields use snake case
        given_name: String,
        family_name: String,
        middle_name: String,
        nickname: String,
        preferred_username: String,
        profile: String,
        picture: String,
        website: String,
        email: String,
        gender: String,
        other_gender: String,
        birthdate: String,
        zoneinfo: String,
        locale: String,
        phone_number: String,
        freezed: Boolean,
        deleted: Boolean,
        tenantId: Boolean
      }
    }),
  });
  const { data } = await response.json();

  // do something with the data
} catch (err) {
  console.error(err);
  // handle error
}
```

#### Successful Response:

Can have the following HTTP Status Codes:

- `200` - OK

```json
// POST /v1/users/:userId
{
  "success": Boolean,
  "message": String,
  "error": null,
  "data": null
}
```

#### Error Response:

Can have the following HTTP Status Codes:

- `400` - Bad Request
- `401` - Unauthorized
- `403` - Forbidden
- `500` - Internal Server Error

```json
// POST /v1/users/:userId
{
  "success": Boolean,
  "error": String,
  "message": null,
  "data": null
}
```
