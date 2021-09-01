import { AnnouncementModel } from '@/modules/announcement/announcement-model';

const { fields } = AnnouncementModel;

export default [
  fields.id,
  fields.name,
  fields.dueDate,
  fields.message,
  fields.target,
  fields.announcedBy,
  fields.createdAt,
  fields.updatedAt
];
