import { ServiceAttendanceModel } from '@/modules/service-attendance/service-attendance-model';

const { fields } = ServiceAttendanceModel;

export default [
  fields.name,
  fields.service,
  fields.temperatureReading,
  fields.saetNumber,
  fields.comment,
  fields.member,
];
