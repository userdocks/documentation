---
id: put-user-access-status
title: PUT /apps/:appId/users/:userId/access-status/:accessStatus
description: PUT /users/:userId/access-status/:accessStatus
slug: /api/rest/users/put-users-access-status
tags: [api, rest, user management, user, access status]
---

### Request

This route will change the access status on a account.

#### Request Method:

- `PUT`

#### Base URL:

- `https://api.userdocks.com`

#### End Point:

- `/api/v1/apps/:appId/users/:userId/access-status/:accessStatus`

##### Path Variables:

| Variable | Type | Required | Description |
|---|---|---|---|
| :appId | `String` | `true` | the UUID of the app
| :userId | `String` | `true` | the UUID of the user
| :accessStatus | `String` | `true` | either `0` or `1` equivalent to `freezed` or `unfreezed`

##### Query Parameters:

None

#### HTTP Headers:

> Note: Never use API Keys on the client

> Note: This endpoint can only be accessed with an API key

| Property       | Type        | Required  | Access                 | Description                   |
| -------------- | ----------- | --------- | ---------------------- | ----------------------------- |
| X-API-KEY      | `String` | `true` | **Only access to App** | Api key for the userdocks app |
| X-API-KEY-TYPE | `String` | `true` | **Only access to App** | `write`                        |
| X-CLIENT-ID    | `String` | `true` | **Only access to App** | `UUID` of the userdocks app   |

#### HTTP Body:

None

#### Response:

- `Object`

#### Example:

```js
try {
  // call userdocks user management API
  const response = await fetch('https://api.userdocks.com/api/v1/apps/:appId/users/:userId/access-status/:accessStatus', {
    method: 'PUT',
    headers: {
      'X-API-KEY': String,
      'X-CLIENT-ID': String,
      'X-API-KEY-TYPE': 'write',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
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
// POST /api/v1/apps/:appId/users/:userId/access-status/:accessStatus
{
  "success": Boolean,
  "message": String,
  "error": null,
  "data": null,
}
```

#### Error Response:

Can have the following HTTP Status Codes:

- `400` - Bad Request
- `401` - Unauthorized
- `403` - Forbidden
- `500` - Internal Server Error

```json
// POST /api/v1/users/:userId/access-status/:accessStatus
{
  "success": Boolean,
  "error": String,
  "message": null,
  "data": null
}
```
