import { AnnouncementTargetsModel } from '@/modules/announcement-targets/announcement-targets-model';

const { fields } = AnnouncementTargetsModel;

export default [
  fields.id,
  fields.name,
  fields.createdAt,
  fields.updatedAt
];
