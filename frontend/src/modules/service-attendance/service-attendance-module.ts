import routes from '@/modules/service-attendance/service-attendance-routes';
import store from '@/modules/service-attendance/service-attendance-store';
import ServiceAttendanceAutocompleteInput from '@/modules/service-attendance/components/service-attendance-autocomplete-input.vue';

export default {
  components: {
    'app-service-attendance-autocomplete-input': ServiceAttendanceAutocompleteInput,
  },
  routes,
  store,
};
