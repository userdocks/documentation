---
id: put-tenants
title: PUT /tenants/:tenantId
description: PUT /tenants/:tenantId
slug: /api/rest/tenants/put-tenants
tags: [api, rest, user management, tenants]
---

### Request

This route will update a tenant of the app.

#### Request Method:

- `PUT`

#### Base URL:

- `https://api.userdocks.com`

#### End Point:

- `/v1/tenants/:tenantId`

##### Path Variables:

| Variable | Type | Required | Description |
|---|---|---|---|
| :tenantId | `String` | `true` | the UUID of the tenant

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

> Note: optional variables are marked with a `?` (questionmark) at the end. Do not include the questionmark in the request.

A JSON object.

```json
{
  "kind": "tenant",
  "name?": String,
  "stripeOneTimePaymentValidThru?": String,
  "description?": String,
  "companyName?": String,
  "companyVATId?": String, // value added tax identification number
  "companyTaxType?": String,
  "companyTaxExempt?": String, // none, exempt or reverse
  "isBusinessCustomer?": Boolean,
  "isInvoicePending?": Boolean,
  "shippingAddress?": {
    "name?": String,
    "city?": String,
    "country?": String,
    "line1?": String,
    "line2?": String,
    "postal_code?": String,
    "state?": String,
  },
  "billingAddress?": {
    "name?": String,
    "city?": String,
    "country?": String,
    "line1?": String,
    "line2?": String,
    "postal_code?": String,
    "state?": String,
  },
  "test?": Boolean
}
```

#### Response:

- `Object`

#### Example:

```js
try {
  // call userdocks user management API
  const response = await fetch('https://api.userdocks.com/v1/tenants/:tenantId', {
    method: 'PUT',
    headers: {
      // 'Authorization': String, // when accessed from the client e.g. `Bearer ${accessToken}`
      'X-API-KEY': String,
      'X-CLIENT-ID': String,
      'X-API-KEY-TYPE': 'write',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      tenant: {
        id: String,
        name: String,
        stripeOneTimePaymentValidThru: String,
        description: String,
        companyName: String,
        companyVATId: String, // value added tax identification number
        companyTaxType: String,
        companyTaxExempt: String, // none, exempt or reverse
        isBusinessCustomer: Boolean,
        isInvoicePending: Boolean,
        shippingAddress: {
          name: String,
          city: String,
          country: String,
          line1: String,
          line2: String,
          postal_code: String,
          state: String,
          type: String,
          deleted: Boolean,
        },
        billingAddress: {
          name: String,
          city: String,
          country: String,
          line1: String,
          line2: String,
          postal_code: String,
          state: String,
          type: String,
          deleted: Boolean,
        },
      },
    });
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
// PUT /v1/tenants/:tenantId
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
// PUT /v1/tenants/:tenantId
{
  "success": Boolean,
  "error": String,
  "message": null,
  "data": null
}
```
