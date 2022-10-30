---
id: put-tenants
title: PUT /tenants/:tenantId
description: PUT /tenants/:tenantId
slug: /api/rest/tenants/put-tenants
tags: [api, rest, user management, tenants]
---

This route will update a tenant of your app.

### Request

#### Base URL:

- `https://api.userdocks.com`

#### End Point:

- `/api/v1/tenants/:tenantId`

##### Path Variables

- `:tenantId` (required)
  - if used with the `Authorization` header with an `access token` you can only get the tenant that is connected to the token

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
| X-API-KEY-TYPE | `String` | `true` | **Only access to App** | `read`                        |
| X-CLIENT-ID    | `String` | `true` | **Only access to App** | `UUID` of the userdocks app   |

#### HTTP Body:

A JSON object.

```json
{
  "tenant": {
    "name": String,
    "stripeOneTimePaymentValidThru": String,
    "description": String,
    "companyName": String,
    "companyVATId": String, // value added tax identification number
    "companyTaxType": String,
    "companyTaxExempt": String, // none, exempt or reverse
    "isBusinessCustomer": Boolean,
    "isInvoicePending": Boolean,
    "shippingAddress": {
      "name": String,
      "city": String,
      "country": String,
      "line1": String,
      "line2": String,
      "postal_code": String,
      "state": String,
    },
    "billingAddress": {
      "name": String,
      "city": String,
      "country": String,
      "line1": String,
      "line2": String,
      "postal_code": String,
      "state": String,
    },
  },
}
```

#### Response:

- `Object`

#### Example:

```js
try {
  // call userdocks user management API
  const response = await fetch('https://api.userdocks.com/api/v1/tenants/:tenantId', {
    method: 'PUT',
    headers: {
      // an access token can also be used
      // Authorization: `${token.type} ${token.accessToken}`,
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
// PUT /api/v1/tenants/:tenantId
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
// PUT /api/v1/tenants/:tenantId
{
  "success": Boolean,
  "error": String,
  "message": null,
  "data": null
}
```
