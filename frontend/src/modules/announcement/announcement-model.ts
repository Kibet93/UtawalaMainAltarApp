import { i18n } from '@/i18n';
import IdField from '@/shared/fields/id-field';
import { GenericModel } from '@/shared/model/generic-model';
import DateTimeRangeField from '@/shared/fields/date-time-range-field';
import DateTimeField from '@/shared/fields/date-time-field';
import StringField from '@/shared/fields/string-field';
import DateField from '@/shared/fields/date-field';
import DateRangeField from '@/shared/fields/date-range-field';
import { AnnouncementTargetsField } from '@/modules/announcement-targets/announcement-targets-field';

function label(name) {
  return i18n(`entities.announcement.fields.${name}`);
}

function placeholder(name) {
  return i18n(`entities.announcement.placeholders.${name}`);
}

const fields = {
  id: new IdField('id', label('id')),
  name: new StringField('name', label('name'), {
    "required": true
  }),
  dueDate: new DateField('dueDate', label('dueDate'), {
    "required": true
  }),
  message: new StringField('message', label('message'), {
    "placeholder": placeholder('message'),
    "required": true
  }),
  target: AnnouncementTargetsField.relationToOne('target', label('target'), {}),
  announcedBy: new StringField('announcedBy', label('announcedBy'), {}),
  createdAt: new DateTimeField(
    'createdAt',
    label('createdAt'),
  ),
  updatedAt: new DateTimeField(
    'updatedAt',
    label('updatedAt'),
  ),
  createdAtRange: new DateTimeRangeField(
    'createdAtRange',
    label('createdAtRange'),
  ),
  dueDateRange: new DateRangeField(
    'dueDateRange',
    label('dueDateRange'),
  ),
};

export class AnnouncementModel extends GenericModel {
  static get fields() {
    return fields;
  }
}
