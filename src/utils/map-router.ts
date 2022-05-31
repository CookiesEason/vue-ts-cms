import { RouteRecordRaw } from 'vue-router';
export function mapMenusToRoutes(userMenus: any[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = [];
  const allRoutes: RouteRecordRaw[] = [];

  const routeFiles = require.context('../router/main', true, /\.ts/);
  routeFiles.keys().forEach((element) => {
    const route = require('../router/main' + element.split('.')[1]);
    allRoutes.push(route.default);
  });
  const _select = (userMenus: any[]) => {
    for (const menu of userMenus) {
      if (menu.type === 2) {
        const route = allRoutes.find((element) => {
          return element.path === menu.url;
        });
        if (route) {
          routes.push(route);
        }
      } else {
        _select(menu.children);
      }
    }
  };
  _select(userMenus);
  return routes;
}
