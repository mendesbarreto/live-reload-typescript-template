import { DateTime } from 'luxon';

const updatedStartedAt: string | Date = new Date();

const updatedStartedAtDate =
  typeof updatedStartedAt === 'string'
    ? updatedStartedAt
    : updatedStartedAt.toISOString();

console.log(updatedStartedAtDate);
const currentMonitoringDate =
  DateTime.fromISO(updatedStartedAtDate).toFormat('yyyy-MM-dd');

console.log(currentMonitoringDate);
