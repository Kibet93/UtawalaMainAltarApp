import routes from '@/modules/category/category-routes';
import store from '@/modules/category/category-store';
import CategoryAutocompleteInput from '@/modules/category/components/category-autocomplete-input.vue';

export default {
  components: {
    'app-category-autocomplete-input': CategoryAutocompleteInput,
  },
  routes,
  store,
};
