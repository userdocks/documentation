---
id: post-users-referral-invites
title: POST /users/:userId/referral-invites
description: POST /users/:userId/referral-invites
slug: /api/rest/users/post-users-referral-invites
tags: [api, rest, user management, users, referral invites]
---

This route will send an invite email to a new user.

### Request

#### Base URL:

- `https://api.userdocks.com`

#### End Point:

- `/api/v1/users/:userId/referral-invites`

##### Path Variables

- `:userId` (required)
  - if used with the `Authorization` header with an `access token` you can use the user connected with the `access token`

##### Query Parameters

None

#### HTTP Headers:

If used on the client:

| Property      | Type        | Required  | Access                 | Description |
| ------------- | ----------- | --------- | ---------------------- | ----------- |
| Authorization | `String` | `true` | **Only access to App** |             |

If used on the server:

> NOTE: Never use API Keys on the client

| Property       | Type        | Required  | Access                 | Description                   |
| -------------- | ----------- | --------- | ---------------------- | ----------------------------- |
| X-API-KEY      | `String` | `true` | **Only access to App** | Api key for the userdocks app |
| X-API-KEY-TYPE | `String` | `true` | **Only access to App** | `write`                       |
| X-CLIENT-ID    | `String` | `true` | **Only access to App** | `UUID` of the userdocks app   |

#### HTTP Body:

A JSON object.

```json
{
  "email": String,
  "language": String,
}
```

#### Response:

- `Object`

#### Example:

```js
try {
  // call userdocks user management API
  const response = await fetch('https://api.userdocks.com/api/v1/users/:userId/referral-invites', {
    method: 'POST',
    headers: {
      // an access token can also be used
      // Authorization: `${token.type} ${token.accessToken}`,
      'X-API-KEY': String,
      'X-CLIENT-ID': String,
      'X-API-KEY-TYPE': 'read',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: String,
      language: String,
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

- `201` - Created

```json
// POST /api/v1/users/:userId/referral-invites
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
// POST /api/v1/users/:userId/referral-invites
{
  "success": Boolean,
  "error": String,
  "message": null,
  "data": null
}
```
