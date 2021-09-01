import reservedSeatsListStore from '@/modules/reserved-seats/reserved-seats-list-store';
import reservedSeatsViewStore from '@/modules/reserved-seats/reserved-seats-view-store';
import reservedSeatsImporterStore from '@/modules/reserved-seats/reserved-seats-importer-store';
import reservedSeatsFormStore from '@/modules/reserved-seats/reserved-seats-form-store';
import reservedSeatsDestroyStore from '@/modules/reserved-seats/reserved-seats-destroy-store';

export default {
  namespaced: true,

  modules: {
    destroy: reservedSeatsDestroyStore,
    form: reservedSeatsFormStore,
    list: reservedSeatsListStore,
    view: reservedSeatsViewStore,
    importer: reservedSeatsImporterStore,
  },
};
