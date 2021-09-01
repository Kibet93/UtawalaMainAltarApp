import { i18n } from '@/i18n';
import IdField from '@/shared/fields/id-field';
import { GenericModel } from '@/shared/model/generic-model';
import DateTimeRangeField from '@/shared/fields/date-time-range-field';
import DateTimeField from '@/shared/fields/date-time-field';
import StringField from '@/shared/fields/string-field';
import EnumeratorField from '@/shared/fields/enumerator-field';

function label(name) {
  return i18n(`entities.liveService.fields.${name}`);
}

function enumeratorLabel(name, value) {
  return i18n(`entities.liveService.enumerators.${name}.${value}`);
}

const fields = {
  id: new IdField('id', label('id')),
  name: new StringField('name', label('name'), {
    "required": true
  }),
  status: new EnumeratorField('status', label('status'), [
    { id: 'Live Now', label: enumeratorLabel('status', 'Live Now') },
    { id: 'Ended', label: enumeratorLabel('status', 'Ended') },
  ],{}),
  url: new StringField('url', label('url'), {
    "required": true
  }),
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

};

export class LiveServiceModel extends GenericModel {
  static get fields() {
    return fields;
  }
}
