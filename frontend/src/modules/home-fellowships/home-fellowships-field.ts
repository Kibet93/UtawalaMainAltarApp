import { HomeFellowshipsService } from '@/modules/home-fellowships/home-fellowships-service';
import RelationToOneField from '@/shared/fields/relation-to-one-field';
import RelationToManyField from '@/shared/fields/relation-to-many-field';
import Permissions from '@/security/permissions';

export class HomeFellowshipsField {
  static relationToOne(name, label, options) {
    return new RelationToOneField(
      name,
      label,
      '/home-fellowships',
      Permissions.values.homeFellowshipsRead,
      HomeFellowshipsService.listAutocomplete,
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
      '/home-fellowships',
      Permissions.values.homeFellowshipsRead,
      HomeFellowshipsService.listAutocomplete,
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
