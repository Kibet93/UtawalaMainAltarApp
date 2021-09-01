import importerStore from '@/shared/importer/importer-store';
import { CategoryService } from '@/modules/category/category-service';
import categoryImporterFields from '@/modules/category/category-importer-fields';
import { i18n } from '@/i18n';

export default importerStore(
  CategoryService.import,
  categoryImporterFields,
  i18n('entities.category.importer.fileName'),
  i18n('entities.category.importer.hint'),
);
