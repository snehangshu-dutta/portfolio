import { TTimeStamp } from '../TimeStamp/types';

export type TTimeLine = {
  phase: string;
  //   timeStamps: TTimeStamp[];
  //   skils: string[];
  details: TTimeStamp[] | TSkillDetail[];
};

export type TSkillDetail = {
  domain: string;
  languange: string;
};
