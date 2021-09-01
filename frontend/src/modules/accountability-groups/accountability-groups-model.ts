import { i18n } from '@/i18n';
import IdField from '@/shared/fields/id-field';
import { GenericModel } from '@/shared/model/generic-model';
import DateTimeRangeField from '@/shared/fields/date-time-range-field';
import DateTimeField from '@/shared/fields/date-time-field';
import StringField from '@/shared/fields/string-field';
import { CategoryField } from '@/modules/category/category-field';
import { UserField } from '@/modules/user/user-field';

function label(name) {
  return i18n(`entities.accountabilityGroups.fields.${name}`);
}

const fields = {
  id: new IdField('id', label('id')),
  name: new StringField('name', label('name'), {}),
  category: CategoryField.relationToOne('category', label('category'), {}),
  leader: UserField.relationToOne('leader', label('leader'), {
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

export class AccountabilityGroupsModel extends GenericModel {
  static get fields() {
    return fields;
  }
}
