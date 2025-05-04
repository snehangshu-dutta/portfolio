/* eslint-disable @typescript-eslint/no-explicit-any */
import { TTimeStamp } from '../TimeStamp/types';

export const isTTimeStamp = (item: any): item is TTimeStamp => {
  return (
    typeof item === 'object' &&
    item !== null &&
    'title' in item &&
    'duration' in item &&
    'description' in item
  );
};

export const isTTimeStampArray = (details: any): details is TTimeStamp[] => {
  return Array.isArray(details) && details.every(isTTimeStamp);
};
