export interface GeneralInformation {
  emailAddress: string;
  age: number;
  grade: string;
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

export interface UserData {
  username: string;
  password: string;
}

export interface ApplicationData {
  generalInformation: GeneralInformation;
  experience: Experience;
  interests: Interests;
  financialBackground: FinancialBackground;
  additionalOfferings: AdditionalOfferings;
}


export interface RegistrationData {
  id: string;
  firstName: string;
  lastName: string;
  city: string;
  address: string;
  cohort: string;
  age: string;
  isBoarding: boolean;
  isInSchool: boolean;
  school: string;
  schoolAddress: string;
  parentName: string;
  emailAddress: string;
  phoneNumber: string;
  state: string;
  country: string;
  gender: string;
}

export interface PaymentData {
  cohort: string;
  track: string;
}


export interface RegistrationFormData {
  id: string;
  emailAddress: string;
  age: string;
  currentGrade: string;
  hasCodingExperience: boolean;
  programmingLanguages: string[];
  otherLanguage: string;
  completedCodingCourse: boolean;
  completedPaidCourse: false;
  comfortableWithCode: boolean;
  programInterest: string;
  interestReason: string;
  careerGoals: string;
  financialBackground: boolean;
  additionalOfferings: string;
  additionalOfferingsImportance: string;
}
