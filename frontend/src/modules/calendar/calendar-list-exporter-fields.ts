import { CalendarModel } from '@/modules/calendar/calendar-model';

const { fields } = CalendarModel;

export default [
  fields.id,
  fields.event,
  fields.startDateOfActivity,
  fields.personInCharge,
  fields.participants,
  fields.endDate,
  fields.createdAt,
  fields.updatedAt
];
