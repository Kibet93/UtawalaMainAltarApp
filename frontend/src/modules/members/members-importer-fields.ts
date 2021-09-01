import { MembersModel } from '@/modules/members/members-model';

const { fields } = MembersModel;

export default [
  fields.category,
  fields.accountabilityGroup,
  fields.membershipStatus,
  fields.age,
  fields.homeFellowship,
  fields.nationalID,
  fields.phoneNumber,
  fields.occupation,
  fields.residence,
  fields.fullName,
  fields.email,
];
