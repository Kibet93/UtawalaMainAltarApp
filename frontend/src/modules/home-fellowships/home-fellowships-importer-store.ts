import importerStore from '@/shared/importer/importer-store';
import { HomeFellowshipsService } from '@/modules/home-fellowships/home-fellowships-service';
import homeFellowshipsImporterFields from '@/modules/home-fellowships/home-fellowships-importer-fields';
import { i18n } from '@/i18n';

export default importerStore(
  HomeFellowshipsService.import,
  homeFellowshipsImporterFields,
  i18n('entities.homeFellowships.importer.fileName'),
  i18n('entities.homeFellowships.importer.hint'),
);
