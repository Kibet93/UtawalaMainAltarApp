import importerStore from '@/shared/importer/importer-store';
import { LiveServiceService } from '@/modules/live-service/live-service-service';
import liveServiceImporterFields from '@/modules/live-service/live-service-importer-fields';
import { i18n } from '@/i18n';

export default importerStore(
  LiveServiceService.import,
  liveServiceImporterFields,
  i18n('entities.liveService.importer.fileName'),
  i18n('entities.liveService.importer.hint'),
);
