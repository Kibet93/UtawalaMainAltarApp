import { CalendarService } from '@/modules/calendar/calendar-service';
import RelationToOneField from '@/shared/fields/relation-to-one-field';
import RelationToManyField from '@/shared/fields/relation-to-many-field';
import Permissions from '@/security/permissions';

export class CalendarField {
  static relationToOne(name, label, options) {
    return new RelationToOneField(
      name,
      label,
      '/calendar',
      Permissions.values.calendarRead,
      CalendarService.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.event,
        };
      },
      options,
    );
  }

  static relationToMany(name, label, options) {
    return new RelationToManyField(
      name,
      label,
      '/calendar',
      Permissions.values.calendarRead,
      CalendarService.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.event,
        };
      },
      options,
    );
  }
}
