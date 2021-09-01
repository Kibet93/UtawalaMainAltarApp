import importerStore from '@/shared/importer/importer-store';
import { CalendarService } from '@/modules/calendar/calendar-service';
import calendarImporterFields from '@/modules/calendar/calendar-importer-fields';
import { i18n } from '@/i18n';

export default importerStore(
  CalendarService.import,
  calendarImporterFields,
  i18n('entities.calendar.importer.fileName'),
  i18n('entities.calendar.importer.hint'),
);
