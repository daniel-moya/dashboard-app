import { format } from 'date-fns';

const parseIsoString = (isoString: string): Date => new Date(isoString);

export const getFormattedDate = (isoString: string): string => format(parseIsoString(isoString), 'MMM d, yyyy');

export const getFormattedTime = (isoString: string): string => format(parseIsoString(isoString), 'HH:mm:ss');

