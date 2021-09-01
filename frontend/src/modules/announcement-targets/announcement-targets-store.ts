import announcementTargetsListStore from '@/modules/announcement-targets/announcement-targets-list-store';
import announcementTargetsViewStore from '@/modules/announcement-targets/announcement-targets-view-store';
import announcementTargetsImporterStore from '@/modules/announcement-targets/announcement-targets-importer-store';
import announcementTargetsFormStore from '@/modules/announcement-targets/announcement-targets-form-store';
import announcementTargetsDestroyStore from '@/modules/announcement-targets/announcement-targets-destroy-store';

export default {
  namespaced: true,

  modules: {
    destroy: announcementTargetsDestroyStore,
    form: announcementTargetsFormStore,
    list: announcementTargetsListStore,
    view: announcementTargetsViewStore,
    importer: announcementTargetsImporterStore,
  },
};
