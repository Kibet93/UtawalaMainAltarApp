import { storeAsync } from '@/app-module';
import Vue from 'vue';

export default Vue.extend({
  async beforeRouteEnter(to, from, next) {
    if (!to.meta || !to.meta.notEmptyPermissions) {
      next();
      return;
    }

    const store = storeAsync();

    await store.dispatch('auth/doWaitUntilInit');

    if (
      store.getters['auth/signedIn'] &&
      store.getters['auth/roles'].length
    ) {
      next('/');
    } else {
      next();
    }
  },
});
