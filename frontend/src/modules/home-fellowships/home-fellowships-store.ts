import homeFellowshipsListStore from '@/modules/home-fellowships/home-fellowships-list-store';
import homeFellowshipsViewStore from '@/modules/home-fellowships/home-fellowships-view-store';
import homeFellowshipsImporterStore from '@/modules/home-fellowships/home-fellowships-importer-store';
import homeFellowshipsFormStore from '@/modules/home-fellowships/home-fellowships-form-store';
import homeFellowshipsDestroyStore from '@/modules/home-fellowships/home-fellowships-destroy-store';

export default {
  namespaced: true,

  modules: {
    destroy: homeFellowshipsDestroyStore,
    form: homeFellowshipsFormStore,
    list: homeFellowshipsListStore,
    view: homeFellowshipsViewStore,
    importer: homeFellowshipsImporterStore,
  },
};
