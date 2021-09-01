import { ReservedSeatsModel } from '@/modules/reserved-seats/reserved-seats-model';

const { fields } = ReservedSeatsModel;

export default [
  fields.id,
  fields.seatNo,
  fields.reservedFor,
  fields.serviceBooked,
  fields.createdAt,
  fields.updatedAt
];
