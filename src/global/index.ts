import { App } from 'vue';
import registerElement from './register-element';

export default {
  install(app: App) {
    app.use(registerElement);
  },
};
