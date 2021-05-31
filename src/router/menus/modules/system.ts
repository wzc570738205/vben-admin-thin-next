/*
 * @Author: wangzhichiao<https://github.com/wzc570738205>
 * @Date: 2021-05-27 10:38:29
 * @LastEditors: wangzhichiao<https://github.com/wzc570738205>
 * @LastEditTime: 2021-05-27 10:50:17
 */
import type { MenuModule } from '/@/router/types';
import { t } from '/@/hooks/web/useI18n';

const system: MenuModule = {
  orderNo: 1,
  menu: {
    name: t('routes.system.title'),
    path: '/system',
    children: [
      {
        path: 'user',
        name: t('routes.system.user.title'),
      },
    ],
  },
};
export default system;
