/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    'docs/introduction',
    'docs/quickstart',
    {
      type: 'category',
      link: {
        type: 'generated-index',
        description: 'TEST TEST TES',
      },
      collapsed: true,
      label: 'Dashboard',
      items: [
        {
          type: 'doc',
          label: 'Overview',
          id: 'docs/dashboard/index',
        },
        {
          type: 'doc',
          label: 'Accounts',
          id: 'docs/dashboard/accounts',
        },
        {
          type: 'category',
          link: {
            type: 'doc',
            id: 'docs/dashboard/projects/index',
          },
          collapsed: true,
          label: 'Projects',
          items: [
            {
              type: 'doc',
              label: 'Team Members',
              id: 'docs/dashboard/projects/team-members',
            },
          ],
        },
        {
          type: 'category',
          link: {
            type: 'doc',
            id: 'docs/dashboard/apps/index',
          },
          collapsed: true,
          label: 'Apps',
          items: [
            {
              type: 'doc',
              label: 'Secrets',
              id: 'docs/dashboard/apps/secrets',
            },
            {
              type: 'doc',
              label: 'Sign In Methods',
              id: 'docs/dashboard/apps/sign-in-methods',
            },
            {
              type: 'category',
              link: {
                type: 'doc',
                id: 'docs/dashboard/payments/index',
              },
              collapsed: true,
              label: 'Payments',
              items: [
                {
                  type: 'doc',
                  label: 'Promo Codes',
                  id: 'docs/dashboard/payments/promo-codes',
                },
                {
                  type: 'doc',
                  label: 'Promomotions',
                  id: 'docs/dashboard/payments/promotions',
                },
                {
                  type: 'doc',
                  label: 'Referral Promotions',
                  id: 'docs/dashboard/payments/referral-promotions',
                },
              ],
            },
            {
              type: 'category',
              link: {
                type: 'doc',
                id: 'docs/dashboard/user-management/index',
              },
              collapsed: true,
              label: 'User Management',
              items: [
                {
                  type: 'doc',
                  label: 'Users',
                  id: 'docs/dashboard/user-management/users',
                },
                {
                  type: 'doc',
                  label: 'User Roles',
                  id: 'docs/dashboard/user-management/user-roles',
                },
                {
                  type: 'doc',
                  label: 'Newsletter',
                  id: 'docs/dashboard/user-management/newsletter',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  api: [
    {
      type: 'doc',
      label: 'Introduction',
      id: 'api/introduction',
    },
    {
      type: 'category',
      link: {
        type: 'generated-index',
      },
      collapsed: true,
      label: 'Client',
      items: [
        {
          type: 'doc',
          label: 'Introduction',
          id: 'api/client/index',
        },
        {
          type: 'doc',
          label: 'Web Client SDK',
          id: 'api/client/web-client-sdk',
        },
        {
          type: 'doc',
          label: 'React SDK',
          id: 'api/client/react-sdk',
        },
      ],
    },
    {
      type: 'category',
      link: {
        type: 'generated-index',
      },
      collapsed: true,
      label: 'Server',
      items: [
        {
          type: 'doc',
          label: 'Introduction',
          id: 'api/server/index',
        },
        {
          type: 'doc',
          label: 'Node.js Server SDK',
          id: 'api/server/nodejs-server-sdk',
        },
      ],
    },
    {
      type: 'category',
      link: {
        type: 'generated-index',
      },
      collapsed: true,
      label: 'REST',
      items: [
        {
          type: 'doc',
          label: 'Introduction',
          id: 'api/rest/index',
        },
        {
          type: 'category',
          link: {
            type: 'generated-index',
          },
          collapsed: true,
          label: 'Analytics',
          items: [
            {
              type: 'doc',
              label: 'GET /analytics/one-time-payments',
              id: 'api/rest/analytics/get-one-time-payments',
            },
            {
              type: 'doc',
              label: 'GET /analytics/sign-ins',
              id: 'api/rest/analytics/get-sign-ins',
            },
            {
              type: 'doc',
              label: 'GET /analytics/subcriptions',
              id: 'api/rest/analytics/get-subscriptions',
            },
            {
              type: 'doc',
              label: 'GET /analytics/tenants',
              id: 'api/rest/analytics/get-tenants',
            },
          ],
        },
        {
          type: 'category',
          link: {
            type: 'generated-index',
          },
          collapsed: true,
          label: 'Apps',
          items: [
            {
              type: 'doc',
              label: 'GET /apps/:appId/public-keys',
              id: 'api/rest/apps/get-public-keys',
            },
            {
              type: 'doc',
              label: 'GET /apps/:appId/promotions',
              id: 'api/rest/apps/get-promotions',
            },
            {
              type: 'doc',
              label: 'GET /apps/:appId/user-roles',
              id: 'api/rest/apps/get-user-roles',
            },
            {
              type: 'doc',
              label: 'PUT /apps/:appId/users/userId/access-status/:accessStatus',
              id: 'api/rest/apps/put-user-access-status',
            },
          ],
        },
        {
          type: 'category',
          link: {
            type: 'generated-index',
          },
          collapsed: true,
          label: 'Tenants',
          items: [
            {
              type: 'doc',
              label: 'GET /tenants/me',
              id: 'api/rest/tenants/get-tenants-me',
            },
            {
              type: 'doc',
              label: 'GET /tenants/:tenantId',
              id: 'api/rest/tenants/get-tenants',
            },
            {
              type: 'doc',
              label: 'PUT /tenants/:tenantId',
              id: 'api/rest/tenants/put-tenants',
            },
            {
              type: 'doc',
              label: 'POST /tenants/:tenantId/checkout-sessions',
              id: 'api/rest/tenants/post-tenant-checkout-sessions',
            },
            {
              type: 'doc',
              label: 'PUT /tenants/:tenantId/stripe-invoices',
              id: 'api/rest/tenants/put-tenant-stripe-subscriptions',
            },
            {
              type: 'doc',
              label: 'DELETE /tenants/:tenantId/stripe-subscriptions',
              id: 'api/rest/tenants/delete-tenant-stripe-subscriptions',
            },
            {
              type: 'doc',
              label: 'DELETE /tenants/:tenantId/stripe-payment-methods',
              id: 'api/rest/tenants/delete-tenant-stripe-payment-methods',
            },
            {
              type: 'doc',
              label: 'GET /tenants/:tenantId/stripe-invoices',
              id: 'api/rest/tenants/get-tenant-stripe-invoices',
            },
            {
              type: 'doc',
              label: 'POST /tenants/:tenantId/stripe-invoices',
              id: 'api/rest/tenants/post-tenant-stripe-invoices',
            },
          ],
        },
        {
          type: 'category',
          link: {
            type: 'generated-index',
          },
          collapsed: true,
          label: 'Users',
          items: [
            {
              type: 'doc',
              label: 'POST /users/:userId',
              id: 'api/rest/users/post-users',
            },
            {
              type: 'doc',
              label: 'GET /users/:userId',
              id: 'api/rest/users/get-users',
            },
            {
              type: 'doc',
              label: 'PUT /users/:userId',
              id: 'api/rest/users/put-users',
            },
            {
              type: 'doc',
              label: 'DELETE /users/:userId',
              id: 'api/rest/users/delete-users',
            },
            {
              type: 'doc',
              label: 'PUT /users/:userId/promotion-codes/:promotionCode',
              id: 'api/rest/users/put-users-promotion-codes',
            },
            {
              type: 'doc',
              label: 'POST /users/:userId/referral-invites',
              id: 'api/rest/users/post-users-referral-invites',
            },
          ],
        },
      ],
    },
  ],
};

module.exports = sidebars;
