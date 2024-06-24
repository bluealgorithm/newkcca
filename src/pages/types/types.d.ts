export interface GeneralInformation {
  emailAddress: string;
  age: number;
  grade: string;
  firstName: string;
  lastName: string;
  gender: string;
  country: string;
  city: string;
  address: string;
  isInSchool: boolean;
  venue: string;
  school: string;
  schoolAddress: string;
  parentName: string;
  phoneNumber: string;
  state: string;
}

export interface Experience {
  hasCodingExperience: boolean;
  programmingLanguages: string[];
  hasCompletedCodingProgram: boolean;
  programWasPaid: boolean;
  canWriteOrUnderstandCode: boolean;
}

export interface Interests {
  programInterest: string;
  whyInterestedInCoding: string;
  careerGoals: string;
}

export interface FinancialBackground {
  hasChallengePayingForProgram: boolean;
}

export interface AdditionalOfferings {
  importanceOfAdditionalOfferings: string;
}

export interface ApplicationData {
  generalInformation: GeneralInformation;
  experience: Experience;
  interests: Interests;
  financialBackground: FinancialBackground;
  additionalOfferings: AdditionalOfferings;
  cohort: string;
}

export interface PaymentData {
  id: string;
  cohort: string;
  track: string;
  amount: string;
}
