import { Suspense, lazy } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { Iconify } from '@/components/icon';
import { CircleLoading } from '@/components/loading';

import { AppRouteObject } from '#/router';

const AnimatePage = lazy(() => import('@/pages/components/animate'));
const ScrollPage = lazy(() => import('@/pages/components/scroll'));
const IconPage = lazy(() => import('@/pages/components/icon'));

const components: AppRouteObject = {
  order: 3,
  path: 'components',
  element: (
    <Suspense fallback={<CircleLoading />}>
      <Outlet />
    </Suspense>
  ),
  meta: {
    label: 'sys.menu.babylonJs',
    icon: <Iconify icon="solar:widget-6-bold-duotone" className="ant-menu-item-icon" size="24" />,
    key: '/babylon',
  },
  children: [
    {
      index: true,
      element: <Navigate to="icon2" replace />,
    },
    {
      path: 'icon2',
      element: <IconPage />,
      meta: { label: 'sys.menu.icon', key: '/components/icon2' },
    },
    {
      path: 'animate2',
      element: <AnimatePage />,
      meta: { label: 'sys.menu.animate', key: '/components/animate2' },
    },
    {
      path: 'scroll2',
      element: <ScrollPage />,
      meta: { label: 'sys.menu.scroll', key: '/components/scroll2' },
    },
  ],
};

export default components;
