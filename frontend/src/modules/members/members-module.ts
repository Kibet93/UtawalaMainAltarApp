import routes from '@/modules/members/members-routes';
import store from '@/modules/members/members-store';
import MembersAutocompleteInput from '@/modules/members/components/members-autocomplete-input.vue';

export default {
  components: {
    'app-members-autocomplete-input': MembersAutocompleteInput,
  },
  routes,
  store,
};
