import routes from '@/modules/live-service/live-service-routes';
import store from '@/modules/live-service/live-service-store';
import LiveServiceAutocompleteInput from '@/modules/live-service/components/live-service-autocomplete-input.vue';

export default {
  components: {
    'app-live-service-autocomplete-input': LiveServiceAutocompleteInput,
  },
  routes,
  store,
};
