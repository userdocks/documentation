---
id: get-users-me
title: GET /users/me
description: GET /users/me
slug: /api/rest/users/get-users
tags: [api, rest, user management, users]
---

### Request

This route will return the user that is connected with the bearer token.

#### Request Method:

- `GET`

#### Base URL:

- `https://api.userdocks.com`

#### End Point:

- `/api/v1/users/me`

##### Path Variables

None

##### Query Parameters

None

#### HTTP Headers:

> Note: This endpoint can only be accessed with an Bearer token.

| Property      | Type        | Required  | Access                 | Description |
| ------------- | ----------- | --------- | ---------------------- | ----------- |
| Authorization | `String` | `true` | **Only access to App** |             |

#### HTTP Body:

None

#### Response:

- `Object`

#### Example:

```js
try {
  // call userdocks user management API
  const response = await fetch('https://api.userdocks.com/api/v1/users/me', {
    method: 'GET',
    headers: {
      // an access token can also be used
      Authorization: `${token.type} ${token.accessToken}`,
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
// GET /api/v1/users/me
{
  "success": Boolean,
  "message": String,
  "error": null,
  "data": {
    "kind": "user",
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
```

#### Error Response:

Can have the following HTTP Status Codes:

- `400` - Bad Request
- `401` - Unauthorized
- `403` - Forbidden
- `500` - Internal Server Error

```json
// GET /api/v1/users/me
{
  "success": Boolean,
  "error": String,
  "message": null,
  "data": null
}
```
