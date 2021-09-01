import routes from '@/modules/announcement-targets/announcement-targets-routes';
import store from '@/modules/announcement-targets/announcement-targets-store';
import AnnouncementTargetsAutocompleteInput from '@/modules/announcement-targets/components/announcement-targets-autocomplete-input.vue';

export default {
  components: {
    'app-announcement-targets-autocomplete-input': AnnouncementTargetsAutocompleteInput,
  },
  routes,
  store,
};
