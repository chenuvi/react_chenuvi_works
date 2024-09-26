import { Typography } from 'antd';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

// import { SvgIcon } from '@/components/icon';
import { Iconify } from '@/components/icon';
import { CircleLoading } from '@/components/loading';

import { AppRouteObject } from '#/router';

function MenuLevel({ title }: { title: string }) {
  return <Typography.Title>Menu Level: {title}</Typography.Title>;
}

function Wrapper({ children }: any) {
  return <Suspense fallback={<CircleLoading />}>{children}</Suspense>;
}

const menulevel: AppRouteObject = {
  order: 2,
  path: 'babylon',
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
      path: 'start',
      meta: { label: 'sys.menu.system.organization', key: '/babylon/start' },
      children: [
        // {
        //   index: true,
        //   element: <Navigate to="demo_1" replace />,
        // },
        {
          path: 'demo_1',
          element: (
            <Wrapper>
              <MenuLevel title="3b" />
            </Wrapper>
          ),
          meta: {
            label: 'sys.menu.menulevel.1b.2a',
            key: '/babylon/start/demo_1',
          },
        },
        //   {
        //     path: 'menu_level_2b',
        //     meta: {
        //       label: 'sys.menu.menulevel.1b.2b.index',
        //       key: '/babylon.js/start_journey/demo_2',
        //     },
        //     //   children: [
        //     //     {
        //     //       path: 'menu_level_3a',
        //     //       element: <MenuLevel title="3a" />,
        //     //       meta: {
        //     //         label: 'sys.menu.menulevel.1b.2b.3a',
        //     //         key: '/menu_level/menu_level_1b/menu_level_2b/menu_level_3a',
        //     //       },
        //     //     },
        //     //     {
        //     //       path: 'menu_level_3b',
        //     //       element: <MenuLevel title="3b" />,
        //     //       meta: {
        //     //         label: 'sys.menu.menulevel.1b.2b.3b',
        //     //         key: '/menu_level/menu_level_1b/menu_level_2b/menu_level_3b',
        //     //       },
        //     //     },
        //     //   ],
        //   },
      ],
    },
  ],
};

export default menulevel;
