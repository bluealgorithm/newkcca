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
  id: string;
  firstName: string;
  lastName: string;
  city: string;
  address: string;
  cohort: string;
  isBoarding: boolean;
  isInSchool: boolean;
  school: string;
  schoolAddress: string;
  parentName: string;
  phoneNumber: string;
  state: string;
  country: string;
  gender: string;
  generalInformation: GeneralInformation;
  experience: Experience;
  interests: Interests;
  financialBackground: FinancialBackground;
  additionalOfferings: AdditionalOfferings;
}


export interface PaymentData {
  id: string;
  cohort: string;
  track: string;
  amount: string;
}


export interface RegistrationFormData {
  id: string;
  emailAddress: string;
  age: number;
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
