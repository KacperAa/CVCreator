export interface CvSection {
  iconsSrc: string[];
  subPoints: SubPoints;
}

export interface SubPoints {
  [key: string]: string[];
}
