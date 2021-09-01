import announcementListStore from '@/modules/announcement/announcement-list-store';
import announcementViewStore from '@/modules/announcement/announcement-view-store';
import announcementImporterStore from '@/modules/announcement/announcement-importer-store';
import announcementFormStore from '@/modules/announcement/announcement-form-store';
import announcementDestroyStore from '@/modules/announcement/announcement-destroy-store';

export default {
  namespaced: true,

  modules: {
    destroy: announcementDestroyStore,
    form: announcementFormStore,
    list: announcementListStore,
    view: announcementViewStore,
    importer: announcementImporterStore,
  },
};
