import routes from '@/modules/calendar/calendar-routes';
import store from '@/modules/calendar/calendar-store';
import CalendarAutocompleteInput from '@/modules/calendar/components/calendar-autocomplete-input.vue';

export default {
  components: {
    'app-calendar-autocomplete-input': CalendarAutocompleteInput,
  },
  routes,
  store,
};
