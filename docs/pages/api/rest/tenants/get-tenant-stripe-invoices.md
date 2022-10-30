---
id: get-tenant-stripe-invoices
title: GET /tenants/:tenantId/stripe-invoices
description: GET /tenants/:tenantId/stripe-invoices
slug: /api/rest/tenants/get-stripe-invoices
tags: [api, rest, user management, tenants, stripe, invoices]
---

> **_NOTE: You and your company are soley responsible for invoices for your users (customers), as well as all tax obligations that result in any country for you and your company. Use the stripe test API to check your invoices before going into production. E.g., if all necessary data is displayed, as well as if the correct tax is applied, and so on._**

### Request

#### Base URL:

- `https://api.userdocks.com`

#### End Point:

- `/api/v1/tenants/:tenantId/stripe-invoices`

##### Path Variables

- `:tenantId` (required)
  - if used with the `Authorization` header with an `access token` you can only get the tenant that is connected to the token

##### Query Parameters

- `test`?: Boolean - if true uses the stripe test API
- `userId`?: String - only needed if used with an API Key
- `limit`?: Number - limit the number of invoices returned
- `startingAfter`?: String - an stripe invoice ID
- `startingBefore`?: String - an stripe invoice ID

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
| X-API-KEY-TYPE | `String` | `true` | **Only access to App** | `read` or `write`                      |
| X-CLIENT-ID    | `String` | `true` | **Only access to App** | `UUID` of the userdocks app   |

#### HTTP Body:

None.

#### Response:

- `Object`

#### Example:

```js
try {
  // call userdocks user management API
  const response = await fetch('https://api.userdocks.com/api/v1/tenants/:tenantId/stripe-invoices?userId=String', {
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
// PUT /api/v1/tenants/:tenantId/stripe-invoices
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
// PUT /api/v1/tenants/:tenantId/stripe-invoices
{
  "success": Boolean,
  "error": String,
  "message": null,
  "data": {
    invoices: Object[], // https://stripe.com/docs/api/invoices/object?lang=node
  }
}
```
