import { i18n } from '@/i18n';
import IdField from '@/shared/fields/id-field';
import { GenericModel } from '@/shared/model/generic-model';
import DateTimeRangeField from '@/shared/fields/date-time-range-field';
import DateTimeField from '@/shared/fields/date-time-field';
import StringField from '@/shared/fields/string-field';
import DateField from '@/shared/fields/date-field';
import DateRangeField from '@/shared/fields/date-range-field';
import { CategoryField } from '@/modules/category/category-field';
import { UserField } from '@/modules/user/user-field';

function label(name) {
  return i18n(`entities.calendar.fields.${name}`);
}

const fields = {
  id: new IdField('id', label('id')),
  event: new StringField('event', label('event'), {
    "required": true
  }),
  startDateOfActivity: new DateField('startDateOfActivity', label('startDateOfActivity'), {
    "required": true
  }),
  personInCharge: UserField.relationToMany('personInCharge', label('personInCharge'), {
    "required": true
  }),
  participants: CategoryField.relationToMany('participants', label('participants'), {
    "required": true
  }),
  endDate: new DateField('endDate', label('endDate'), {}),
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
  startDateOfActivityRange: new DateRangeField(
    'startDateOfActivityRange',
    label('startDateOfActivityRange'),
  ),
  endDateRange: new DateRangeField(
    'endDateRange',
    label('endDateRange'),
  ),
};

export class CalendarModel extends GenericModel {
  static get fields() {
    return fields;
  }
}
