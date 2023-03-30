---
id: delete-users
title: DELETE /users/:userId
description: DELETE /users/:userId
slug: /api/rest/users/delete-users
tags: [api, rest, user management, users]
---

### Request

This route will delete a user from an application.

If a user is deleted the tenant will also be deleted, as well as all subscriptions at the end of the current billing cycle.

#### Request Method:

- `DELETE`

#### Base URL:

- `https://api.userdocks.com`

#### End Point:

- `/api/v1/users/:userId`

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
| Authorization  | `String` | `true` | **Only access to this user** | Access Token for userdocks tenant |

#### HTTP Body:

None

#### Response:

- `Object`

#### Example:

```js
try {
  // call userdocks user management API
  const response = await fetch('https://api.userdocks.com/api/v1/users/:userId', {
    method: 'DELETE',
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
// DELETE /api/v1/users/:userId
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
// DELETE /api/v1/users/:userId
{
  "success": Boolean,
  "error": String,
  "message": null,
  "data": null
}
```
