import liveServiceListStore from '@/modules/live-service/live-service-list-store';
import liveServiceViewStore from '@/modules/live-service/live-service-view-store';
import liveServiceImporterStore from '@/modules/live-service/live-service-importer-store';
import liveServiceFormStore from '@/modules/live-service/live-service-form-store';
import liveServiceDestroyStore from '@/modules/live-service/live-service-destroy-store';

export default {
  namespaced: true,

  modules: {
    destroy: liveServiceDestroyStore,
    form: liveServiceFormStore,
    list: liveServiceListStore,
    view: liveServiceViewStore,
    importer: liveServiceImporterStore,
  },
};
