---
id: put-users-promotion-codes
title: PUT /users/:userId/promotion-codes/:promotionCode
description: PUT /users/:userId/promotion-codes/:promotionCode
slug: /api/rest/users/put-users-promotion-codes
tags: [api, rest, user management, apps, checkout-sessions]
---

### Request

This route will allow a user to use a promotion code.

E.g., update `freeUnits` or `freeUntil` on a tenant.

These codes can be created via the dashbaord.

#### Request Method:

- `PUT`

#### Base URL:

- `https://api.userdocks.com`

#### End Point:

- `/v1/users/:userId/promotion-codes/:promotionCode`

##### Path Variables:

| Variable | Type | Required | Description |
|---|---|---|---|
| :userId | `String` | `true` | the UUID of the user
| :promotionCode | `String` | `true` | the promotion code to use for the user

##### Query Parameters:

None

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

None

#### Response:

- `Object`

#### Example:

```js
try {
  // call userdocks user management API
  const response = await fetch('https://api.userdocks.com/v1/users/:userId/promotion-codes/:promotionCode', {
    method: 'PUT',
    headers: {
      // 'Authorization': String, // when accessed from the client e.g. `Bearer ${accessToken}`
      'X-API-KEY': String,
      'X-CLIENT-ID': String,
      'X-API-KEY-TYPE': 'write',
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
// PUT /v1/users/:userId/promotion-codes/:promotionCode
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
// PUT /v1/users/:userId/promotion-codes/:promotionCode
{
  "success": Boolean,
  "error": String,
  "message": null,
  "data": null
}
```
