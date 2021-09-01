import { LiveServiceModel } from '@/modules/live-service/live-service-model';

const { fields } = LiveServiceModel;

export default [
  fields.name,
  fields.status,
  fields.url,
];
