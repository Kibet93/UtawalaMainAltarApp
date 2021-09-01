import routes from '@/modules/announcement/announcement-routes';
import store from '@/modules/announcement/announcement-store';
import AnnouncementAutocompleteInput from '@/modules/announcement/components/announcement-autocomplete-input.vue';

export default {
  components: {
    'app-announcement-autocomplete-input': AnnouncementAutocompleteInput,
  },
  routes,
  store,
};
