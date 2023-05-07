---
id: get-tenant-stripe-invoices
title: GET /tenants/:tenantId/stripe-invoices
description: GET /tenants/:tenantId/stripe-invoices
slug: /api/rest/tenants/get-stripe-invoices
tags: [api, rest, user management, tenants, stripe, invoices]
---

### Request

> **_Note: You and your company are soley responsible for invoices for the users (customers), as well as all tax obligations that result in any country for you and your company. Use the stripe test API to check your invoices before going into production. E.g., if all necessary data is displayed, as well as if the correct tax is applied, and so on._**

#### Request Method:

- `GET`

#### Base URL:

- `https://api.userdocks.com`

#### End Point:

- `/v1/tenants/:tenantId/stripe-invoices`

##### Path Variables:

| Variable | Type | Required | Description |
|---|---|---|---|
| :tenantId | `String` | `true` | the UUID of the tenant

##### Query Parameters:

| Variable | Type | Required | Description |
|---|---|---|---|
| :userId | `String` | `true` | the UUID of the tenant
| :test | `Boolean` | `false` | indicates if the stripe testing API is used or not
| :limit | `Number` | `false` | if not set it will automatically be limited by 100 stripe invoices
| :startingAfter | `String` | `false` | a stripe invoice ID
| :startingbefore | `String` | `false` | a stripe invoice ID

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
  const response = await fetch('https://api.userdocks.com/v1/tenants/:tenantId/stripe-invoices?userId=String', {
    method: 'GET',
    headers: {
      // 'Authorization': String, // when accessed from the client e.g. `Bearer ${accessToken}`
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
// GET /v1/tenants/:tenantId/stripe-invoices
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
// GET /v1/tenants/:tenantId/stripe-invoices
{
  "success": Boolean,
  "error": String,
  "message": null,
  "data": {
    invoices: Object[], // https://stripe.com/docs/api/invoices/object?lang=node
  }
}
```
