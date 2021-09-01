import categoryListStore from '@/modules/category/category-list-store';
import categoryViewStore from '@/modules/category/category-view-store';
import categoryImporterStore from '@/modules/category/category-importer-store';
import categoryFormStore from '@/modules/category/category-form-store';
import categoryDestroyStore from '@/modules/category/category-destroy-store';

export default {
  namespaced: true,

  modules: {
    destroy: categoryDestroyStore,
    form: categoryFormStore,
    list: categoryListStore,
    view: categoryViewStore,
    importer: categoryImporterStore,
  },
};
