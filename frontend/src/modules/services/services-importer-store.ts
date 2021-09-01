import importerStore from '@/shared/importer/importer-store';
import { ServicesService } from '@/modules/services/services-service';
import servicesImporterFields from '@/modules/services/services-importer-fields';
import { i18n } from '@/i18n';

export default importerStore(
  ServicesService.import,
  servicesImporterFields,
  i18n('entities.services.importer.fileName'),
  i18n('entities.services.importer.hint'),
);
