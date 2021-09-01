import importerStore from '@/shared/importer/importer-store';
import { AnnouncementTargetsService } from '@/modules/announcement-targets/announcement-targets-service';
import announcementTargetsImporterFields from '@/modules/announcement-targets/announcement-targets-importer-fields';
import { i18n } from '@/i18n';

export default importerStore(
  AnnouncementTargetsService.import,
  announcementTargetsImporterFields,
  i18n('entities.announcementTargets.importer.fileName'),
  i18n('entities.announcementTargets.importer.hint'),
);
