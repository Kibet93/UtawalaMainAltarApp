import routes from '@/modules/home-fellowships/home-fellowships-routes';
import store from '@/modules/home-fellowships/home-fellowships-store';
import HomeFellowshipsAutocompleteInput from '@/modules/home-fellowships/components/home-fellowships-autocomplete-input.vue';

export default {
  components: {
    'app-home-fellowships-autocomplete-input': HomeFellowshipsAutocompleteInput,
  },
  routes,
  store,
};
