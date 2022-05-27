import { App } from 'vue';
import { ElButton, ElForm, ElFormItem } from 'element-plus';
import 'element-plus/dist/index.css';

const components = [ElButton, ElForm, ElFormItem];

export default {
  install(app: App) {
    for (const component of components) {
      app.component(component.name, component);
    }
  },
};
