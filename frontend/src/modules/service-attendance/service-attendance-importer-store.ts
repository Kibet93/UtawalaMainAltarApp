import importerStore from '@/shared/importer/importer-store';
import { ServiceAttendanceService } from '@/modules/service-attendance/service-attendance-service';
import serviceAttendanceImporterFields from '@/modules/service-attendance/service-attendance-importer-fields';
import { i18n } from '@/i18n';

export default importerStore(
  ServiceAttendanceService.import,
  serviceAttendanceImporterFields,
  i18n('entities.serviceAttendance.importer.fileName'),
  i18n('entities.serviceAttendance.importer.hint'),
);
