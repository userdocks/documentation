---
id: get-secrets
title: GET /apps/:appId/secrets
description: GET /apps/:appId/secrets
slug: /api/rest/apps/appId/get-secrets
tags: [api, rest, user management, apps, secrets]
---

This route will return the secret for an application.

### Request

#### Base URL:

- `https://api.userdocks.com`

#### End Point:

- `/api/v1/apps/:appId/secrets`

##### Path Variables

- `:appId` (required): the UUID of your app

##### Query Parameters

None

#### HTTP Headers:

> Note: This endpoint can only be accessed with an API key.

| Property       | Type        | Required  | Access                 | Description                   |
| -------------- | ----------- | --------- | ---------------------- | ----------------------------- |
| X-API-KEY      | `String` | `true` | **Only access to App** | Api key for the userdocks app |
| X-API-KEY-TYPE | `String` | `true` | **Only access to App** | `read`                        |
| X-CLIENT-ID    | `String` | `true` | **Only access to App** | `UUID` of the userdocks app   |

#### HTTP Body:

None.

#### Response:

- `Object`

#### Example:

```js
try {
  // call userdocks user management API
  const response = await fetch('https://api.userdocks.com/api/v1/apps/:appId/secrets', {
    method: 'GET',
    headers: {
      'X-API-KEY': String,
      'X-CLIENT-ID': String,
      'X-API-KEY-TYPE': 'read',
      'Content-Type': 'application/json',
    },
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
// GET /api/v1/apps/:appId/secrets
{
  "success": Boolean,
  "message": String,
  "error": null,
  "data": {
    "secret": String
  }
}
```

#### Error Response:

Can have the following HTTP Status Codes:

- `400` - Bad Request
- `401` - Unauthorized
- `403` - Forbidden
- `500` - Internal Server Error

```json
// GET /api/v1/apps/:appId/secrets
{
  "success": Boolean,
  "error": String,
  "message": null,
  "data": null
}
```
