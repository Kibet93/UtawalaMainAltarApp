import importerStore from '@/shared/importer/importer-store';
import { AnnouncementService } from '@/modules/announcement/announcement-service';
import announcementImporterFields from '@/modules/announcement/announcement-importer-fields';
import { i18n } from '@/i18n';

export default importerStore(
  AnnouncementService.import,
  announcementImporterFields,
  i18n('entities.announcement.importer.fileName'),
  i18n('entities.announcement.importer.hint'),
);
