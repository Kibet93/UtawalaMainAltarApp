import { ReservedSeatsService } from '@/modules/reserved-seats/reserved-seats-service';
import RelationToOneField from '@/shared/fields/relation-to-one-field';
import RelationToManyField from '@/shared/fields/relation-to-many-field';
import Permissions from '@/security/permissions';

export class ReservedSeatsField {
  static relationToOne(name, label, options) {
    return new RelationToOneField(
      name,
      label,
      '/reserved-seats',
      Permissions.values.reservedSeatsRead,
      ReservedSeatsService.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.seatNo,
        };
      },
      options,
    );
  }

  static relationToMany(name, label, options) {
    return new RelationToManyField(
      name,
      label,
      '/reserved-seats',
      Permissions.values.reservedSeatsRead,
      ReservedSeatsService.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.seatNo,
        };
      },
      options,
    );
  }
}
