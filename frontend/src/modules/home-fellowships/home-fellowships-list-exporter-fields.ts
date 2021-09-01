import { HomeFellowshipsModel } from '@/modules/home-fellowships/home-fellowships-model';

const { fields } = HomeFellowshipsModel;

export default [
  fields.id,
  fields.name,
  fields.fellowshipPastor,
  fields.createdAt,
  fields.updatedAt
];
