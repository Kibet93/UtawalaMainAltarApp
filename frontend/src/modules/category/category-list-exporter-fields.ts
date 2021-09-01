import { CategoryModel } from '@/modules/category/category-model';

const { fields } = CategoryModel;

export default [
  fields.id,
  fields.name,
  fields.leader,
  fields.createdAt,
  fields.updatedAt
];
