import accountabilityGroupsListStore from '@/modules/accountability-groups/accountability-groups-list-store';
import accountabilityGroupsViewStore from '@/modules/accountability-groups/accountability-groups-view-store';
import accountabilityGroupsImporterStore from '@/modules/accountability-groups/accountability-groups-importer-store';
import accountabilityGroupsFormStore from '@/modules/accountability-groups/accountability-groups-form-store';
import accountabilityGroupsDestroyStore from '@/modules/accountability-groups/accountability-groups-destroy-store';

export default {
  namespaced: true,

  modules: {
    destroy: accountabilityGroupsDestroyStore,
    form: accountabilityGroupsFormStore,
    list: accountabilityGroupsListStore,
    view: accountabilityGroupsViewStore,
    importer: accountabilityGroupsImporterStore,
  },
};
