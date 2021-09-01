import Header from '@/modules/layout/components/header.vue';
import Menu from '@/modules/layout/components/menu.vue';
import Layout from '@/modules/layout/components/layout.vue';
import store from '@/modules/layout/layout-store';
import routes from '@/modules/layout/layout-routes';

export default {
  components: {
    'app-header': Header,
    'app-menu': Menu,
    'app-layout': Layout,
  },

  filters: [],

  mixins: [],

  store,

  routes,
};
