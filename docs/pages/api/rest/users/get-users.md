---
id: get-users
title: GET /users/:userId
description: GET /users/:userId
slug: /api/rest/users/get-users
tags: [api, rest, user management, users]
---

This route will create a checkout-session for a tenant of your app.

Checkout sessions are used to collect payments from your tenants.

### Request

#### Base URL:

- `https://api.userdocks.com`

#### End Point:

- `/api/v1/users/:userId`

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
| X-API-KEY-TYPE | `String` | `true` | **Only access to App** | `read` or `write`                    |
| X-CLIENT-ID    | `String` | `true` | **Only access to App** | `UUID` of the userdocks app   |

#### HTTP Body:

None.

#### Response:

- `Object`

#### Example:

```js
try {
  // call userdocks user management API
  const response = await fetch('https://api.userdocks.com/api/v1/users/:userId', {
    method: 'GET',
    headers: {
      // an access token can also be used
      // Authorization: `${token.type} ${token.accessToken}`,
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
// POST /api/v1/users
{
  "success": Boolean,
  "message": String,
  "error": null,
  "data": {
    "user": {
      "id": String,
      "appId":  String,
      "language": String,
      "salutation": String,
      "salutationOther": String,
      "acceptedNewsletter": Boolean,
      "acceptedNewsletterDate": String,
      "lastAskedNewsletterSignUp": String,
      "mailchimpMemberId": String,
      "name": String,
      // open id fields use snake case
      "given_name": String,
      "family_name": String,
      "middle_name": String,
      "nickname": String,
      "preferred_username": String,
      "profile": String,
      "picture": String,
      "website": String,
      "email": String,
      "email_verified": Boolean,
      "gender": String,
      "other_gender": String,
      "birthdate": String,
      "zoneinfo": String,
      "locale": String,
      "phone_number": String,
      "phone_number_verified": Boolean,
      "freezed": Boolean,
      "deleted": Boolean,
      "tenantId": Boolean
    }
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
// POST /api/v1/users
{
  "success": Boolean,
  "error": String,
  "message": null,
  "data": null
}
```
