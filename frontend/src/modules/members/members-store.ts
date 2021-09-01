import membersListStore from '@/modules/members/members-list-store';
import membersViewStore from '@/modules/members/members-view-store';
import membersImporterStore from '@/modules/members/members-importer-store';
import membersFormStore from '@/modules/members/members-form-store';
import membersDestroyStore from '@/modules/members/members-destroy-store';

export default {
  namespaced: true,

  modules: {
    destroy: membersDestroyStore,
    form: membersFormStore,
    list: membersListStore,
    view: membersViewStore,
    importer: membersImporterStore,
  },
};
