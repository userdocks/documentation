---
id: get-tenants
title: GET /tenants/:tenantId
description: GET /tenants/:tenantId
slug: /api/rest/tenants/get-tenants
tags: [api, rest, user management, tenants]
---

### Request

This route will return a tenant of the app.

#### Request Method:

- `GET`

#### Base URL:

- `https://api.userdocks.com`

#### End Point:

- `/api/v1/tenants/:tenantId`

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
| X-API-KEY-TYPE | `String` | `true` | **Only access to App** | `read`                       |
| X-CLIENT-ID    | `String` | `true` | **Only access to App** | `UUID` of the userdocks app   |

#### HTTP Body:

None

#### Response:

- `Object`

#### Example:

```js
try {
  // call userdocks user management API
  const response = await fetch('https://api.userdocks.com/api/v1/tenants/:tenantId', {
    method: 'GET',
    headers: {
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
// GET /api/v1/tenants/:tenantId
{
  "success": Boolean,
  "message": String,
  "error": null,
  "data": {
    "kind": "tenant",
    "id": String,
    "name": String,
    "stripeCustomerId": String,
    "stripePriceId": String,
    "stripeProductId": String,
    "stripeSubscriptionId": String,
    "stripeTrialingPriceId": String,
    "stripeTrialingProductId": String,
    "stripeTrialingSubscriptionId": String,
    "stripeCheckoutSessionId": String,
    "stripeDefaultPaymentMethodId": String,
    "stripeSubscriptionCancelAtPeriodEnd": Boolean,
    "stripeSubscriptionCancelAt": String,
    "stripePaymentMethod": String, // 'card' or 'userdocks_promo_code' or somthing with 'promo' specified by the user
    "mode": String,// 'payment' or 'subscription'
    "description": String,
    "stripeOneTimePaymentValidThru": String,
    "freezedDueFailedPayment": Boolean,
    "paidUntil": String,
    "freeUntil": String,
    "paidUnits": String,
    "freeUnits": String,
    "companyName": String,
    "companyVATId": String, // value added tax identification number
    "companyTaxType": String,
    "companyTaxExempt": String, // none, exempt or reverse
    "isBusinessCustomer": Boolean,
    "isInvoicePending": Boolean,
    "freezed": Boolean,
    "paymentFailed": Boolean,
    "paymentFailedCount": Number,
    "paymentFailedDate": String,
    "deleted": Boolean,
    "shippingAddress": {
      "id": String,
      "name": String,
      "city": String,
      "country": String,
      "line1": String,
      "line2": String,
      "postal_code": String,
      "state": String,
      "type": String,
      "deleted": Boolean
    },
    "billingAddress": {
      "id": String,
      "name": String,
      "city": String,
      "country": String,
      "line1": String,
      "line2": String,
      "postal_code": String,
      "state": String,
      "type": String,
      "deleted": Boolean
    },
    "users": [
      {
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
        "verified_by_admin": Boolean,
        "github_email_verified": Boolean,
        "google_email_verified": Boolean,
        "facebook_email_verified": Boolean,
        "twitter_email_verified": Boolean,
        "lastSignInAt": Boolean,
        "lastSignInIp": Boolean,
        "tenantId": Boolean
      }
    ]
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
// GET /api/v1/tenants/:tenantId
{
  "success": Boolean,
  "error": String,
  "message": null,
  "data": null
}
```
