import routes from '@/modules/services/services-routes';
import store from '@/modules/services/services-store';
import ServicesAutocompleteInput from '@/modules/services/components/services-autocomplete-input.vue';

export default {
  components: {
    'app-services-autocomplete-input': ServicesAutocompleteInput,
  },
  routes,
  store,
};
