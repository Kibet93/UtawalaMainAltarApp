import { ReservedSeatsModel } from '@/modules/reserved-seats/reserved-seats-model';

const { fields } = ReservedSeatsModel;

export default [
  fields.seatNo,
  fields.reservedFor,
  fields.serviceBooked,
];
