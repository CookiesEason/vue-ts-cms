import { App } from 'vue';
import {
  ElButton,
  ElForm,
  ElFormItem,
  ElTabs,
  ElTabPane,
  ElIcon,
  ElInput,
  ElCheckbox,
  ElLink,
  ElContainer,
  ElMain,
  ElHeader,
  ElAside,
  ElMenu,
  ElMenuItem,
  ElSubMenu,
} from 'element-plus';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import 'element-plus/dist/index.css';

const components = [
  ElButton,
  ElForm,
  ElFormItem,
  ElTabs,
  ElTabPane,
  ElIcon,
  ElInput,
  ElCheckbox,
  ElLink,
  ElContainer,
  ElHeader,
  ElMain,
  ElAside,
  ElMenu,
  ElMenuItem,
  ElSubMenu,
];

export default {
  install(app: App) {
    for (const component of components) {
      app.component(component.name, component);
    }
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component);
    }
  },
};
