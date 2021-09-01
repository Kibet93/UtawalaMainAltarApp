import routes from '@/modules/accountability-groups/accountability-groups-routes';
import store from '@/modules/accountability-groups/accountability-groups-store';
import AccountabilityGroupsAutocompleteInput from '@/modules/accountability-groups/components/accountability-groups-autocomplete-input.vue';

export default {
  components: {
    'app-accountability-groups-autocomplete-input': AccountabilityGroupsAutocompleteInput,
  },
  routes,
  store,
};
