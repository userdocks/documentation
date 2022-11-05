---
id: post-tenant-stripe-invoices
title: POST /tenants/:tenantId/stripe-invoices
description: POST /tenants/:tenantId/stripe-invoices
slug: /api/rest/tenants/post-stripe-invoices
tags: [api, rest, user management, tenants, stripe, invoices, subscriptions, one-time payments]
---

### Request

> **_Note: You and your company are soley responsible for invoices for the users (customers), as well as all tax obligations that result in any country for you and your company. Use the stripe test API to check your invoices before going into production. E.g., if all necessary data is displayed, as well as if the correct tax is applied, and so on._**

This endpoint will create a new invoice for a tenant, charging the stripe default payment method.

#### Request Method:

- `POST`

#### Base URL:

- `https://api.userdocks.com`

#### End Point:

- `/api/v1/tenants/:tenantId/stripe-invoices`

##### Path Variables:

| Variable | Type | Required | Description |
|---|---|---|---|
| :tenantId | `String` | `true` | the UUID of the tenant

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

> Note: optional variables are marked with a `?` (questionmark) at the end. Do not include the questionmark in the request.

A JSON object.

```json
{
  "price": String, // stripe price ID
  "taxRate": String, // stripe tax rate ID
  "mode": String, // payment, subscription
  "quantity": Number,
  "tenantId": String,
  "userId": String,
  "test?": Boolean, // if true uses the stripe test API
  "footer?": String, // footer text of the invoice
}
```

#### Response:

- `Object`

#### Example:

```js
try {
  // call userdocks user management API
  const response = await fetch('https://api.userdocks.com/api/v1/tenants/:tenantId/stripe-invoices', {
    method: 'POST',
    headers: {
      'X-API-KEY': String,
      'X-CLIENT-ID': String,
      'X-API-KEY-TYPE': 'write',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      price: String, // stripe price ID
      taxRate: String, // stripe tax rate ID
      mode: String, // payment, subscription
      quantity: Number,
      test?: Boolean, // if true uses the stripe test API
      footer?: String, // footer text of the invoice
      tenantId?: String,
      userId?: String,
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
// POST /api/v1/tenants/:tenantId/stripe-invoices
{
  "success": Boolean,
  "message": String,
  "error": null,
  "data": {
    "paymentIntents": Object, // https://stripe.com/docs/api/payment_intents/object?lang=node
  },
}
```

#### Error Response:

Can have the following HTTP Status Codes:

- `400` - Bad Request
- `401` - Unauthorized
- `403` - Forbidden
- `500` - Internal Server Error

```json
// POST /api/v1/tenants/:tenantId/stripe-invoices
{
  "success": Boolean,
  "error": String,
  "message": null,
  "data": null
}
```
