---
id: post-users
title: POST /users/:userId
description: POST /users/:userId
slug: /api/rest/users/post-users
tags: [api, rest, user management, users]
---

### Request

This route will send an invite email to a new user.

#### Request Method:

- `POST`

#### Base URL:

- `https://api.userdocks.com`

#### End Point:

- `/api/v1/users/:userId`

##### Path Variables:

| Variable | Type | Required | Description |
|---|---|---|---|
| :userId | `String` | `true` | the UUID of the user

##### Query Parameters:

None

#### HTTP Headers:

> Note: Never use API Keys on the client

> Note: This endpoint can only be accessed with an API key

| Property       | Type        | Required  | Access                 | Description                   |
| -------------- | ----------- | --------- | ---------------------- | ----------------------------- |
| X-API-KEY      | `String` | `true` | **Only access to App** | Api key for the userdocks app |
| X-API-KEY-TYPE | `String` | `true` | **Only access to App** | `write`                   |
| X-CLIENT-ID    | `String` | `true` | **Only access to App** | `UUID` of the userdocks app   |

#### HTTP Body:

> Note: optional variables are marked with a `?` (questionmark) at the end. Do not include the questionmark in the request.

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
  const response = await fetch('https://api.userdocks.com/api/v1/users/:userId', {
    method: 'POST',
    headers: {
      'X-API-KEY': String,
      'X-CLIENT-ID': String,
      'X-API-KEY-TYPE': 'write',
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
