import { ServicesModel } from '@/modules/services/services-model';

const { fields } = ServicesModel;

export default [
  fields.id,
  fields.name,
  fields.date,
  fields.status,
  fields.createdAt,
  fields.updatedAt
];
