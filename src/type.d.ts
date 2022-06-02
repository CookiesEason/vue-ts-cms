import { Store } from 'vuex';
import { Filters } from '@/global/register-props';

declare module '@vue/runtime-core' {
  // provide typings for `this.$store`
  interface ComponentCustomProperties {
    $store: Store<State>;
    $filters: Filters;
  }
}
