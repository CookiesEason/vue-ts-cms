import { IBreadcrumb } from './../components/base-ui/breadcrumb/type/index';
import { RouteRecordRaw } from 'vue-router';

let firstMenu: any = null;

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
        if (!firstMenu) {
          firstMenu = menu;
        }
      } else {
        _select(menu.children);
      }
    }
  };
  _select(userMenus);
  return routes;
}

export function pathMapBreadcrumbs(userMenus: any[], currentPath: string) {
  const breadcrumbs: IBreadcrumb[] = [];
  pathMaptoMenu(userMenus, currentPath, breadcrumbs);
  return breadcrumbs;
}

export function pathMaptoMenu(
  userMenus: any[],
  currentPath: string,
  breadcrumbs?: IBreadcrumb[]
): any {
  for (const menu of userMenus) {
    if (menu.type === 1) {
      const findMenu = pathMaptoMenu(menu.children ?? [], currentPath);
      if (findMenu) {
        breadcrumbs?.push({ name: menu.name });
        breadcrumbs?.push({ name: findMenu.name });
        return findMenu;
      }
    } else if (menu.type === 2 && menu.url === currentPath) {
      return menu;
    }
  }
}

// export function pathMaptoMenu(userMenus: any[], currentPath: string): any {
//   for (const menu of userMenus) {
//     if (menu.type === 1) {
//       const findMenu = pathMaptoMenu(menu.children ?? [], currentPath);
//       if (findMenu) {
//         return findMenu;
//       }
//     } else if (menu.type === 2 && currentPath === menu.url) {
//       return menu;
//     }
//   }
// }

export { firstMenu };
