import { LiveServiceModel } from '@/modules/live-service/live-service-model';

const { fields } = LiveServiceModel;

export default [
  fields.id,
  fields.name,
  fields.status,
  fields.url,
  fields.createdAt,
  fields.updatedAt
];
