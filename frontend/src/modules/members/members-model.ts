import { i18n } from '@/i18n';
import IdField from '@/shared/fields/id-field';
import { GenericModel } from '@/shared/model/generic-model';
import DateTimeRangeField from '@/shared/fields/date-time-range-field';
import DateTimeField from '@/shared/fields/date-time-field';
import IntegerField from '@/shared/fields/integer-field';
import IntegerRangeField from '@/shared/fields/integer-range-field';
import StringField from '@/shared/fields/string-field';
import EnumeratorField from '@/shared/fields/enumerator-field';
import { CategoryField } from '@/modules/category/category-field';
import { AccountabilityGroupsField } from '@/modules/accountability-groups/accountability-groups-field';
import { HomeFellowshipsField } from '@/modules/home-fellowships/home-fellowships-field';
import { UserField } from '@/modules/user/user-field';

function label(name) {
  return i18n(`entities.members.fields.${name}`);
}

function enumeratorLabel(name, value) {
  return i18n(`entities.members.enumerators.${name}.${value}`);
}

function placeholder(name) {
  return i18n(`entities.members.placeholders.${name}`);
}

function hint(name) {
  return i18n(`entities.members.hints.${name}`);
}

const fields = {
  id: new IdField('id', label('id')),
  category: CategoryField.relationToOne('category', label('category'), {
    "required": true
  }),
  accountabilityGroup: AccountabilityGroupsField.relationToOne('accountabilityGroup', label('accountabilityGroup'), {}),
  membershipStatus: new EnumeratorField('membershipStatus', label('membershipStatus'), [
    { id: 'Visitor', label: enumeratorLabel('membershipStatus', 'Visitor') },
    { id: 'Member', label: enumeratorLabel('membershipStatus', 'Member') },
    { id: 'Away', label: enumeratorLabel('membershipStatus', 'Away') },
    { id: 'Suspended', label: enumeratorLabel('membershipStatus', 'Suspended') },
  ],{}),
  age: new IntegerField('age', label('age'), {}),
  homeFellowship: HomeFellowshipsField.relationToOne('homeFellowship', label('homeFellowship'), {}),
  nationalID: new IntegerField('nationalID', label('nationalID'), {
    "required": true
  }),
  phoneNumber: new StringField('phoneNumber', label('phoneNumber'), {
    "placeholder": placeholder('phoneNumber'),
    "hint": hint('phoneNumber'),
    "min": 10,
    "max": 13
  }),
  occupation: new StringField('occupation', label('occupation'), {
    "placeholder": placeholder('occupation'),
    "hint": hint('occupation'),
    "required": true
  }),
  residence: new StringField('residence', label('residence'), {
    "placeholder": placeholder('residence'),
    "hint": hint('residence'),
    "required": true
  }),
  fullName: new StringField('fullName', label('fullName'), {
    "placeholder": placeholder('fullName'),
    "required": true,
    "max": 70
  }),
  email: UserField.relationToOne('email', label('email'), {}),
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
  ageRange: new IntegerRangeField(
    'ageRange',
    label('ageRange'),
  ),
  nationalIDRange: new IntegerRangeField(
    'nationalIDRange',
    label('nationalIDRange'),
  ),
};

export class MembersModel extends GenericModel {
  static get fields() {
    return fields;
  }
}
