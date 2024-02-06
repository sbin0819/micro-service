import React from 'react';
import { type RouteObject } from 'react-router-dom';
import { AppRoutingManager, Auth0ClientProvider } from '@mono/shell-router';
import PageList from './pages/page-list';
import PageDetail from './pages/page-detail';
import Layout from './components/layout';

const domain = process.env.REACT_APP_AUTH0_DOMAIN!;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID!;
const redirectUri = process.env.REACT_APP_AUTH0_CALLBACK_URL!;

export const routes: RouteObject[] = [
  {
    path: '/',
    element: (
      <Auth0ClientProvider options={{ domain, clientId, redirectUri }}>
        <Layout>
          <AppRoutingManager type="app-edu" />
        </Layout>
      </Auth0ClientProvider>
    ),
    errorElement: <div>App Edu Error</div>,
    children: [
      {
        index: true,
        element: <PageList />,
      },
      {
        path: ':id',
        element: <PageDetail />,
      },
    ],
  },
];
