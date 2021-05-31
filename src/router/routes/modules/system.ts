/*
 * @Author: wangzhichiao<https://github.com/wzc570738205>
 * @Date: 2021-05-27 10:47:11
 * @LastEditors: wangzhichiao<https://github.com/wzc570738205>
 * @LastEditTime: 2021-05-27 10:52:11
 */
import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const system: AppRouteModule = {
  path: '/system',
  name: 'System',
  component: LAYOUT,
  redirect: '/system/user',
  meta: {
    icon: 'grommet-icons:user-admin',
    title: t('routes.system.title'),
  },
  children: [
    {
      path: 'user',
      name: 'UserPage',
      component: () => import('/@/views/sys/user/index.vue'),
      meta: {
        title: t('routes.system.user.title'),
        icon: 'ant-design:user-outlined',
      },
    },
  ],
};

export default system;
