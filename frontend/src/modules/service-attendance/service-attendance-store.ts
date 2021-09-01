import serviceAttendanceListStore from '@/modules/service-attendance/service-attendance-list-store';
import serviceAttendanceViewStore from '@/modules/service-attendance/service-attendance-view-store';
import serviceAttendanceImporterStore from '@/modules/service-attendance/service-attendance-importer-store';
import serviceAttendanceFormStore from '@/modules/service-attendance/service-attendance-form-store';
import serviceAttendanceDestroyStore from '@/modules/service-attendance/service-attendance-destroy-store';

export default {
  namespaced: true,

  modules: {
    destroy: serviceAttendanceDestroyStore,
    form: serviceAttendanceFormStore,
    list: serviceAttendanceListStore,
    view: serviceAttendanceViewStore,
    importer: serviceAttendanceImporterStore,
  },
};
