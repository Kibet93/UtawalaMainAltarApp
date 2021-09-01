import { i18n } from '@/i18n';
import IdField from '@/shared/fields/id-field';
import { GenericModel } from '@/shared/model/generic-model';
import DateTimeRangeField from '@/shared/fields/date-time-range-field';
import DateTimeField from '@/shared/fields/date-time-field';
import StringField from '@/shared/fields/string-field';
import EnumeratorField from '@/shared/fields/enumerator-field';
import DateField from '@/shared/fields/date-field';
import DateRangeField from '@/shared/fields/date-range-field';

function label(name) {
  return i18n(`entities.services.fields.${name}`);
}

function enumeratorLabel(name, value) {
  return i18n(`entities.services.enumerators.${name}.${value}`);
}

const fields = {
  id: new IdField('id', label('id')),
  name: new StringField('name', label('name'), {
    "required": true
  }),
  date: new DateField('date', label('date'), {
    "required": true
  }),
  status: new EnumeratorField('status', label('status'), [
    { id: 'Active', label: enumeratorLabel('status', 'Active') },
    { id: 'Live Now', label: enumeratorLabel('status', 'Live Now') },
    { id: 'Ended', label: enumeratorLabel('status', 'Ended') },
  ],{}),
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
  dateRange: new DateRangeField(
    'dateRange',
    label('dateRange'),
  ),
};

export class ServicesModel extends GenericModel {
  static get fields() {
    return fields;
  }
}
