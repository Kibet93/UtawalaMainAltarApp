import { ServiceAttendanceService } from '@/modules/service-attendance/service-attendance-service';
import RelationToOneField from '@/shared/fields/relation-to-one-field';
import RelationToManyField from '@/shared/fields/relation-to-many-field';
import Permissions from '@/security/permissions';

export class ServiceAttendanceField {
  static relationToOne(name, label, options) {
    return new RelationToOneField(
      name,
      label,
      '/service-attendance',
      Permissions.values.serviceAttendanceRead,
      ServiceAttendanceService.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.name,
        };
      },
      options,
    );
  }

  static relationToMany(name, label, options) {
    return new RelationToManyField(
      name,
      label,
      '/service-attendance',
      Permissions.values.serviceAttendanceRead,
      ServiceAttendanceService.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.name,
        };
      },
      options,
    );
  }
}
