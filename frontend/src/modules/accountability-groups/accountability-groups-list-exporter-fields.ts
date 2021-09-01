import { AccountabilityGroupsModel } from '@/modules/accountability-groups/accountability-groups-model';

const { fields } = AccountabilityGroupsModel;

export default [
  fields.id,
  fields.name,
  fields.category,
  fields.leader,
  fields.createdAt,
  fields.updatedAt
];
