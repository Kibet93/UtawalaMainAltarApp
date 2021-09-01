import importerStore from '@/shared/importer/importer-store';
import { ReservedSeatsService } from '@/modules/reserved-seats/reserved-seats-service';
import reservedSeatsImporterFields from '@/modules/reserved-seats/reserved-seats-importer-fields';
import { i18n } from '@/i18n';

export default importerStore(
  ReservedSeatsService.import,
  reservedSeatsImporterFields,
  i18n('entities.reservedSeats.importer.fileName'),
  i18n('entities.reservedSeats.importer.hint'),
);
