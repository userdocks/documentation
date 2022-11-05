---
id: get-subscriptions
title: GET /analytics/subscriptions
description: GET /analytics/subscriptions
slug: /api/rest/analytics/get-subscriptions
tags: [api, rest, user management, analytics, subscriptions]
---


### Request

This route will return the all subscription payments for an application between a two dates.

#### Request Method:

- `GET`

#### Base URL:

- `https://api.userdocks.com`

#### End Point:

- `/api/v1/analytics/subscriptions`

##### Path Variables:

None

##### Query Parameters:

| Variable | Type | Required | Description |
|---|---|---|---|
| from | `String` | `true` | a date in ISO 8601 format (YYYY-MM-DD) e.g. **2022-12-01**
| to | `String` | `true` | a date in ISO 8601 format (YYYY-MM-DD) e.g. **2022-12-02**

#### HTTP Headers:

> Note: Never use API Keys on the client

> Note: This endpoint can only be accessed with an API key

| Property       | Type        | Required  | Access                 | Description                   |
| -------------- | ----------- | --------- | ---------------------- | ----------------------------- |
| X-API-KEY      | `String` | `true` | **Only access to App** | Api key for the userdocks app |
| X-API-KEY-TYPE | `String` | `true` | **Only access to App** | `read`                        |
| X-CLIENT-ID    | `String` | `true` | **Only access to App** | `UUID` of the userdocks app   |

#### Response:

- `Object`

#### Example:

```js
try {
  // call userdocks user management API
  const response = await fetch('https://api.userdocks.com/api/v1/analytics/subscriptions?from=2022-12-01&to=2022-12-02', {
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
// GET /api/v1/analytics/subscriptions
{
  "success": Boolean,
  "message": String,
  "error": null,
  "data": {
    "subscriptions": [
      {
        "id": String,
        "paid": Boolean,
        "test": Boolean,
        "until": Number,
        "cancelled": Boolean,
        "stripeSubscriptionId": String,
        "stripePriceId": String,
        "stripeCustomerId": String,
        "stripeCouponId": String,
        "userId": String,
        "mailchimpMemberId": String,
        "appId": String,
        "tenantId": String,
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
          "tenantId": Boolean,
          "tenant": {
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
          }
        }
      },
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
// GET /api/v1/analytics/subscriptions
{
  "success": Boolean,
  "error": String,
  "message": null,
  "data": null
}
```
