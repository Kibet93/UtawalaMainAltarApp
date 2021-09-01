import { AccountabilityGroupsService } from '@/modules/accountability-groups/accountability-groups-service';
import RelationToOneField from '@/shared/fields/relation-to-one-field';
import RelationToManyField from '@/shared/fields/relation-to-many-field';
import Permissions from '@/security/permissions';

export class AccountabilityGroupsField {
  static relationToOne(name, label, options) {
    return new RelationToOneField(
      name,
      label,
      '/accountability-groups',
      Permissions.values.accountabilityGroupsRead,
      AccountabilityGroupsService.listAutocomplete,
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
      '/accountability-groups',
      Permissions.values.accountabilityGroupsRead,
      AccountabilityGroupsService.listAutocomplete,
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
