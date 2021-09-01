import routes from '@/modules/reserved-seats/reserved-seats-routes';
import store from '@/modules/reserved-seats/reserved-seats-store';
import ReservedSeatsAutocompleteInput from '@/modules/reserved-seats/components/reserved-seats-autocomplete-input.vue';

export default {
  components: {
    'app-reserved-seats-autocomplete-input': ReservedSeatsAutocompleteInput,
  },
  routes,
  store,
};
