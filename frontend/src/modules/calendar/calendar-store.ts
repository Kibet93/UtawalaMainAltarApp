import calendarListStore from '@/modules/calendar/calendar-list-store';
import calendarViewStore from '@/modules/calendar/calendar-view-store';
import calendarImporterStore from '@/modules/calendar/calendar-importer-store';
import calendarFormStore from '@/modules/calendar/calendar-form-store';
import calendarDestroyStore from '@/modules/calendar/calendar-destroy-store';

export default {
  namespaced: true,

  modules: {
    destroy: calendarDestroyStore,
    form: calendarFormStore,
    list: calendarListStore,
    view: calendarViewStore,
    importer: calendarImporterStore,
  },
};
