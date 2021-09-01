import { AnnouncementTargetsService } from '@/modules/announcement-targets/announcement-targets-service';
import RelationToOneField from '@/shared/fields/relation-to-one-field';
import RelationToManyField from '@/shared/fields/relation-to-many-field';
import Permissions from '@/security/permissions';

export class AnnouncementTargetsField {
  static relationToOne(name, label, options) {
    return new RelationToOneField(
      name,
      label,
      '/announcement-targets',
      Permissions.values.announcementTargetsRead,
      AnnouncementTargetsService.listAutocomplete,
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
      '/announcement-targets',
      Permissions.values.announcementTargetsRead,
      AnnouncementTargetsService.listAutocomplete,
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
