import { i18n } from '@/i18n';
import IdField from '@/shared/fields/id-field';
import { GenericModel } from '@/shared/model/generic-model';
import DateTimeRangeField from '@/shared/fields/date-time-range-field';
import DateTimeField from '@/shared/fields/date-time-field';
import IntegerField from '@/shared/fields/integer-field';
import IntegerRangeField from '@/shared/fields/integer-range-field';
import StringField from '@/shared/fields/string-field';
import { ServicesField } from '@/modules/services/services-field';

function label(name) {
  return i18n(`entities.reservedSeats.fields.${name}`);
}

const fields = {
  id: new IdField('id', label('id')),
  seatNo: new IntegerField('seatNo', label('seatNo'), {
    "required": true
  }),
  reservedFor: new StringField('reservedFor', label('reservedFor'), {
    "required": true
  }),
  serviceBooked: ServicesField.relationToOne('serviceBooked', label('serviceBooked'), {
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
  seatNoRange: new IntegerRangeField(
    'seatNoRange',
    label('seatNoRange'),
  ),
};

export class ReservedSeatsModel extends GenericModel {
  static get fields() {
    return fields;
  }
}
