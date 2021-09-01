import { i18n } from '@/i18n';
import IdField from '@/shared/fields/id-field';
import { GenericModel } from '@/shared/model/generic-model';
import DateTimeRangeField from '@/shared/fields/date-time-range-field';
import DateTimeField from '@/shared/fields/date-time-field';
import IntegerField from '@/shared/fields/integer-field';
import IntegerRangeField from '@/shared/fields/integer-range-field';
import StringField from '@/shared/fields/string-field';
import DecimalRangeField from '@/shared/fields/decimal-range-field';
import DecimalField from '@/shared/fields/decimal-field';
import { ServicesField } from '@/modules/services/services-field';
import { UserField } from '@/modules/user/user-field';

function label(name) {
  return i18n(`entities.serviceAttendance.fields.${name}`);
}

const fields = {
  id: new IdField('id', label('id')),
  name: new StringField('name', label('name'), {}),
  service: ServicesField.relationToOne('service', label('service'), {}),
  temperatureReading: new DecimalField('temperatureReading', label('temperatureReading'), {
    "min": 0
  }),
  saetNumber: new IntegerField('saetNumber', label('saetNumber'), {
    "min": 1
  }),
  comment: new StringField('comment', label('comment'), {}),
  member: UserField.relationToOne('member', label('member'), {}),
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
  temperatureReadingRange: new DecimalRangeField(
    'temperatureReadingRange',
    label('temperatureReadingRange'),
  ),
  saetNumberRange: new IntegerRangeField(
    'saetNumberRange',
    label('saetNumberRange'),
  ),
};

export class ServiceAttendanceModel extends GenericModel {
  static get fields() {
    return fields;
  }
}
