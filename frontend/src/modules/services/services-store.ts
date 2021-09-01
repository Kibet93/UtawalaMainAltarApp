import servicesListStore from '@/modules/services/services-list-store';
import servicesViewStore from '@/modules/services/services-view-store';
import servicesImporterStore from '@/modules/services/services-importer-store';
import servicesFormStore from '@/modules/services/services-form-store';
import servicesDestroyStore from '@/modules/services/services-destroy-store';

export default {
  namespaced: true,

  modules: {
    destroy: servicesDestroyStore,
    form: servicesFormStore,
    list: servicesListStore,
    view: servicesViewStore,
    importer: servicesImporterStore,
  },
};
