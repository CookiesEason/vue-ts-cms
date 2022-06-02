import { App } from 'vue';
import registerElement from './register-element';
import registerProperties from './register-props';

export default {
  install(app: App) {
    app.use(registerElement);
    app.use(registerProperties);
  },
};
