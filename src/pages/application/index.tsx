"use client";

import React from "react";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Nav from "../../../components/Nav";
import { Toaster } from "sonner";
import { useCreateApplication } from "../../hooks/useApi";
import {
  AdditionalOfferings,
  ApplicationData,
  Experience,
  FinancialBackground,
  GeneralInformation,
  Interests,
} from "../types/types";
import { toast } from "sonner";

const Spinner = () => (
  <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    ></circle>
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    ></path>
  </svg>
);

const formSchema = z.object({
  emailAddress: z.string().email("Enter a Valid Email Address"),
  age: z
    .string()
    .optional()
    .refine(
      (val) =>
        typeof val === "string" &&
        (val === "" || (val.length >= 1 && val.length <= 2)),
      "Age must be a 2-digit number"
    ),
  grade: z.string().min(1, "Grade is required"),
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  gender: z.string().min(1, "Gender is required"),
  country: z.string().min(1, "Country is required"),
  city: z.string().min(1, "City is required"),
  address: z.string().min(1, "Address is required"),
  isInSchool: z.string().min(1, "Please select an option"),
  venue: z.string().min(1, "Venue is required"),
  school: z.string().min(1, "School is required"),
  schoolAddress: z.string().min(1, "School address is required"),
  parentName: z.string().min(1, "Parent name is required"),
  phoneNumber: z.string().min(1, "Phone number is required"),
  state: z.string().min(1, "State is required"),
  hasCodingExperience: z.string().min(1, "Please select an option"),
  programmingLanguages: z.array(z.string()).optional(),
  otherLanguage: z.string().optional(),
  completedCodingCourse: z
    .string()
    .min(1, "Please select an option")
    .optional(),
  completedPaidCourse: z.string().min(1, "Please select an option").optional(),
  comfortableWithCode: z
    .string()
    .optional()
    .refine((val) => val !== "", "Please select an option")
    .optional(),
  programInterest: z
    .string()
    .optional()
    .refine((val) => val !== "", "Please select a program"),
  interestReason: z.string().min(1, "Please provide a reason"),
  careerGoals: z.string().min(1, "Please provide your career goals"),
  financialBackground: z
    .string()
    .optional()
    .refine((val) => val !== "", "Please select an option"),
  additionalOfferings: z
    .string()
    .optional()
    .refine((val) => val !== "", "Please select an option"),
  additionalOfferingsImportance: z
    .string()
    .optional()
    .refine((val) => val !== "", "Please select an option"),
});

const resolver = zodResolver(formSchema);

const RegistrationForm = () => {
  const [submitError, setSubmitError] = React.useState<string | null>(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm({ resolver });
  console.log(errors);

  const { mutate, isPending } = useCreateApplication();

  const hasCodingExperience = watch("hasCodingExperience");

  const onSubmit = (data: FieldValues) => {
    setSubmitError(null);
    const {
      emailAddress,
      age,
      hasCodingExperience,
      programmingLanguages,
      completedCodingCourse,
      completedPaidCourse,
      grade,
      comfortableWithCode,
      programInterest,
      interestReason,
      careerGoals,
      financialBackground: financialBackgroundStr,
      additionalOfferings: additionalOfferingsStr,
      additionalOfferingsImportance,
      address,
      city,
      country,
      firstName,
      gender,
      isInSchool,
      lastName,
      parentName,
      phoneNumber,
      state,
      school,
      schoolAddress,
      venue,
    } = data;

    const generalInformation: GeneralInformation = {
      emailAddress,
      age: Number(age),
      grade,
      address,
      city,
      country,
      firstName,
      gender,
      isInSchool,
      lastName,
      parentName,
      phoneNumber,
      state,
      school,
      schoolAddress,
      venue,
    };

    const experience: Experience = {
      hasCodingExperience: hasCodingExperience === "true",
      programmingLanguages: programmingLanguages || [],
      hasCompletedCodingProgram: completedCodingCourse === "true",
      programWasPaid: completedPaidCourse === "true",
      canWriteOrUnderstandCode: comfortableWithCode === "true",
    };

    const interests: Interests = {
      programInterest,
      whyInterestedInCoding: interestReason,
      careerGoals,
    };

    const financialBackground: FinancialBackground = {
      hasChallengePayingForProgram: financialBackgroundStr === "true",
    };

    const additionalOfferingsData: AdditionalOfferings = {
      importanceOfAdditionalOfferings: additionalOfferingsImportance,
    };

    const applicationData: ApplicationData = {
      generalInformation,
      experience,
      interests,
      financialBackground,
      additionalOfferings: additionalOfferingsData,
      cohort: "2024",
    };

    mutate(applicationData, {
      onSuccess: () => {
        toast.success("Application Submitted Successfully, Check Your Email!", {
          style: { background: "green", color: "white" },
          className: "my-toast",
          duration: 5000,
        });
        reset();
      },
      onError: (error) => {
        console.error("Error submitting application:", error);
        toast.error(
          "Error Occurred While Submitting Application or Duplicate Details.",
          {
            style: { background: "red", color: "white" },
            className: "my-toast",
            duration: 5000,
          }
        );
        reset();
      },
    });
  };

  return (
    <>
      <Nav />
      <Toaster
        toastOptions={{
          className: "my-toast",
          duration: 5000,
        }}
        position="top-center"
      />
      <div className="max-w-4xl mx-auto p-8">
        <h1 className="text-2xl font-bold mb-8 text-center">
          Registration Questionnaire
        </h1>

        <form className="space-y-2" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <h2 className="text-2xl font-bold mb-6">General Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="mb-2">
                <label htmlFor="firstName" className="mb-2 block font-semibold">
                  First Name <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  {...register("firstName")}
                  className={`w-full px-3 py-2 border ${
                    errors.firstName ? "border-red-500" : "border-gray-300"
                  } rounded focus:outline-none focus:ring-1 focus:ring-[#63CA97]`}
                />
                {errors.firstName && (
                  <span className="text-red-500">
                    {errors.firstName.message?.toString()}
                  </span>
                )}
              </div>

              <div className="mb-2">
                <label htmlFor="age" className="mb-2 block font-semibold">
                  Last Name <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  id="lastName"
                  {...register("lastName")}
                  className={`w-full px-3 py-2 border ${
                    errors.lastName ? "border-red-500" : "border-gray-300"
                  } rounded focus:outline-none focus:ring-1 focus:ring-[#63CA97]`}
                />
                {errors.lastName && (
                  <span className="text-red-500">
                    {errors.lastName.message?.toString()}
                  </span>
                )}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="mb-2">
                <label
                  htmlFor="emailAddress"
                  className="mb-2 block font-semibold"
                >
                  Email Address <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  id="emailAddress"
                  {...register("emailAddress")}
                  className={`w-full px-3 py-2 border ${
                    errors.emailAddress ? "border-red-500" : "border-gray-300"
                  } rounded focus:outline-none focus:ring-1 focus:ring-[#63CA97]`}
                />
                {errors.emailAddress && (
                  <span className="text-red-500">
                    {errors.emailAddress.message?.toString()}
                  </span>
                )}
              </div>

              <div className="mb-2">
                <label htmlFor="age" className="mb-2 block font-semibold">
                  Age <span className="text-red-400">*</span>
                </label>
                <input
                  type="number"
                  id="age"
                  {...register("age")}
                  min={9}
                  max={16}
                  maxLength={2}
                  pattern="\d{1,2}"
                  className={`w-full px-3 py-2 border ${
                    errors.age ? "border-red-500" : "border-gray-300"
                  } rounded focus:outline-none focus:ring-1 focus:ring-[#63CA97]`}
                />
                {errors.age && (
                  <span className="text-red-500">
                    {errors.age.message?.toString()}
                  </span>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="mb-2">
                <label htmlFor="gender" className="mb-2 block font-semibold">
                  Gender <span className="text-red-400">*</span>
                </label>
                <select
                  id="gender"
                  {...register("gender")}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#63CA97]"
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
                {errors.gender && (
                  <span className="text-red-500">
                    {errors.gender.message?.toString()}
                  </span>
                )}
              </div>

              {/* address, city, country, grade */}
              <div className="mb-2">
                <label htmlFor="address" className="mb-2 block font-semibold">
                  Address <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  id="address"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#63CA97]"
                  {...register("address")}
                />
              </div>

              <div className="mb-2">
                <label htmlFor="city" className="mb-2 block font-semibold">
                  City <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  id="city"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#63CA97]"
                  {...register("city")}
                />
              </div>

              <div className="mb-2">
                <label htmlFor="country" className="mb-2 block font-semibold">
                  Country <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  id="country"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#63CA97]"
                  {...register("country")}
                />
              </div>

              <div className="mb-2">
                <label htmlFor="grade" className="mb-2 block font-semibold">
                  Your current grade <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  id="grade"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#63CA97]"
                  {...register("grade")}
                />
              </div>

              <div className="mb-2">
                <label
                  htmlFor="isInSchool"
                  className="mb-2 block font-semibold"
                >
                  Are you in school? <span className="text-red-400">*</span>
                </label>
                <select
                  id="isInSchool"
                  {...register("isInSchool")}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#63CA97]"
                >
                  <option value="">Select Option</option>
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                </select>
                {errors.isInSchool && (
                  <span className="text-red-500">
                    {errors.isInSchool.message?.toString()}
                  </span>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="mb-2">
                <label htmlFor="venue" className="mb-2 block font-semibold">
                  Choose your preferred Venue{" "}
                  <span className="text-red-400">*</span>
                </label>
                <select
                  id="venue"
                  {...register("venue")}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#63CA97]"
                >
                  <option value="">Select a venue</option>
                  <option
                    value="Treasure Field College, Alama Rd, Link Road Kabong Jos,
                    Plateau State."
                  >
                    Treasure Field College, Alama Rd, Link Road Kabong Jos,
                    Plateau State.
                  </option>
                  <option
                    value="Nigerian Institute of Mining and Geosciences, Tudun Wada,
                    Jos Plateau State."
                  >
                    Nigerian Institute of Mining and Geosciences, Tudun Wada,
                    Jos Plateau State.
                  </option>
                </select>
                {errors.venue && (
                  <span className="text-red-500">
                    {errors.venue.message?.toString()}
                  </span>
                )}
              </div>

              <div className="mb-2">
                <label htmlFor="school" className="mb-2 block font-semibold">
                  School <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  id="school"
                  {...register("school")}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#63CA97]"
                />
                {errors.school && (
                  <span className="text-red-500">
                    {errors.school.message?.toString()}
                  </span>
                )}
              </div>
              <div className="mb-2">
                <label
                  htmlFor="schoolAddress"
                  className="mb-2 block font-semibold"
                >
                  School Address <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  id="schoolAddress"
                  {...register("schoolAddress")}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#63CA97]"
                />
                {errors.schoolAddress && (
                  <span className="text-red-500">
                    {errors.schoolAddress.message?.toString()}
                  </span>
                )}
              </div>
              <div className="mb-2">
                <label
                  htmlFor="parentName"
                  className="mb-2 block font-semibold"
                >
                  Parent/Guardian Name <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  id="parentName"
                  {...register("parentName")}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#63CA97]"
                />
                {errors.parentName && (
                  <span className="text-red-500">
                    {errors.parentName.message?.toString()}
                  </span>
                )}
              </div>
              <div className="mb-2">
                <label
                  htmlFor="phoneNumber"
                  className="mb-2 block font-semibold"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  {...register("phoneNumber")}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#63CA97]"
                />
                {errors.phoneNumber && (
                  <span className="text-red-500">
                    {errors.phoneNumber.message?.toString()}
                  </span>
                )}
              </div>
              <div className="mb-2">
                <label htmlFor="state" className="mb-2 block font-semibold">
                  State
                </label>
                <input
                  type="text"
                  id="state"
                  {...register("state")}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#63CA97]"
                />
                {errors.state && (
                  <span className="text-red-500">
                    {errors.state.message?.toString()}
                  </span>
                )}
              </div>
            </div>
          </div>

          <div className="mb-4">
            <h2 className="text-2xl font-bold mb-6">Coding Experience</h2>
            <div className="mb-4">
              <label className="mb-2 block font-semibold">
                Have you ever done any coding before?
              </label>
              <div className="flex items-center mb-2">
                <input
                  type="radio"
                  id="hasCodingExperienceYes"
                  value="yes"
                  {...register("hasCodingExperience")}
                  className="mr-2"
                />
                <label htmlFor="hasCodingExperienceYes" className="mr-4">
                  Yes
                </label>
                <input
                  type="radio"
                  id="hasCodingExperienceNo"
                  value="no"
                  {...register("hasCodingExperience")}
                  className="mr-2"
                />
                <label htmlFor="hasCodingExperienceNo">No</label>
              </div>
              {errors.hasCodingExperience && (
                <span className="text-red-500">
                  {errors.hasCodingExperience.message?.toString()}
                </span>
              )}
            </div>

            {hasCodingExperience === "yes" && (
              <>
                <div className="mb-4">
                  <label className="mb-2 block font-semibold">
                    Which programming languages are you familiar with? (Select
                    all that apply)
                  </label>
                  <div className="flex flex-wrap">
                    {[
                      "Scratch",
                      "HTML/CSS",
                      "JavaScript",
                      "Python",
                      "Solidity",
                      "Other",
                    ].map((language) => (
                      <div key={language} className="mr-4 mb-2">
                        <input
                          type="checkbox"
                          id={language}
                          value={language}
                          {...register("programmingLanguages")}
                          className="mr-2"
                        />
                        <label htmlFor={language}>{language}</label>
                      </div>
                    ))}
                  </div>
                  {errors.programmingLanguages && (
                    <span className="text-red-500">
                      {errors.programmingLanguages.message?.toString()}
                    </span>
                  )}
                </div>

                <div className="mb-4">
                  <label className="mb-2 block font-semibold">
                    I have completed a coding course or program before:
                  </label>
                  <div className="flex items-center mb-2">
                    <input
                      type="radio"
                      id="completedCodingCourseYes"
                      value="yes"
                      {...register("completedCodingCourse")}
                      className="mr-2"
                    />
                    <label htmlFor="completedCodingCourseYes" className="mr-4">
                      Yes
                    </label>
                    <input
                      type="radio"
                      id="completedCodingCourseNo"
                      value="no"
                      {...register("completedCodingCourse")}
                      className="mr-2"
                    />
                    <label htmlFor="completedCodingCourseNo">No</label>
                  </div>
                  {errors.completedCodingCourse && (
                    <span className="text-red-500">
                      {errors.completedCodingCourse.message?.toString()}
                    </span>
                  )}
                </div>

                <div className="mb-4">
                  <label className="mb-2 block font-semibold">
                    I have completed a paid coding course:
                  </label>
                  <div className="flex items-center mb-2">
                    <input
                      type="radio"
                      id="completedPaidCourseYes"
                      value="yes"
                      {...register("completedPaidCourse")}
                      className="mr-2"
                    />
                    <label htmlFor="completedPaidCourseYes" className="mr-4">
                      Yes
                    </label>
                    <input
                      type="radio"
                      id="completedPaidCourseNo"
                      value="no"
                      {...register("completedPaidCourse")}
                      className="mr-2"
                    />
                    <label htmlFor="completedPaidCourseNo">No</label>
                  </div>
                  {errors.completedPaidCourse && (
                    <span className="text-red-500">
                      {errors.completedPaidCourse.message?.toString()}
                    </span>
                  )}
                </div>

                <div className="mb-4">
                  <label className="mb-2 block font-semibold">
                    How comfortable are you with coding?
                  </label>
                  <select
                    id="comfortableWithCode"
                    {...register("comfortableWithCode")}
                    className={`w-full px-3 py-2 border ${
                      errors.comfortableWithCode
                        ? "border-red-500"
                        : "border-gray-300"
                    } rounded`}
                  >
                    <option value="">Select...</option>
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                  </select>
                  {errors.comfortableWithCode && (
                    <span className="text-red-500">
                      {errors.comfortableWithCode.message?.toString()}
                    </span>
                  )}
                </div>
              </>
            )}
          </div>

          <div className="mb-4">
            <h2 className="text-2xl font-bold mb-6">Program Interests</h2>
            <div className="mb-4">
              <label
                htmlFor="programInterest"
                className="mb-2 block font-semibold"
              >
                Which program are you interested in?{" "}
                <span className="text-red-400">*</span>
              </label>
              <select
                id="programInterest"
                {...register("programInterest")}
                className={`w-full px-3 py-2 border ${
                  errors.programInterest ? "border-red-500" : "border-gray-300"
                } rounded`}
              >
                <option value="">Select...</option>
                <option value="webDevelopmentBeginner">
                  Web Development (for beginners)
                </option>
                <option value="webDevelopmentIntermediate">
                  Web Development (for intermediate or advanced learners)
                </option>
                <option value="scratchProgramming">
                  Scratch Programming (for beginners)
                </option>
                <option value="gameDevelopment">Game Development</option>
                <option value="web3Development">Web 3 Development</option>
              </select>
              {errors.programInterest && (
                <span className="text-red-500">
                  {errors.programInterest.message?.toString()}
                </span>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="interestReason"
                className="mb-2 block font-semibold"
              >
                Why are you interested in this program?{" "}
                <span className="text-red-400">*</span>
              </label>
              <textarea
                id="interestReason"
                {...register("interestReason")}
                rows={4}
                className={`w-full px-3 py-2 border ${
                  errors.interestReason ? "border-red-500" : "border-gray-300"
                } rounded focus:outline-none focus:ring-1 focus:ring-[#63CA97]`}
              />
              {errors.interestReason && (
                <span className="text-red-500">
                  {errors.interestReason.message?.toString()}
                </span>
              )}
            </div>

            <div className="mb-4">
              <label htmlFor="careerGoals" className="mb-2 block font-semibold">
                What are your career goals?{" "}
                <span className="text-red-400">*</span>
              </label>
              <textarea
                id="careerGoals"
                {...register("careerGoals")}
                rows={4}
                className={`w-full px-3 py-2 border ${
                  errors.careerGoals ? "border-red-500" : "border-gray-300"
                } rounded focus:outline-none focus:ring-1 focus:ring-[#63CA97]`}
              />
              {errors.careerGoals && (
                <span className="text-red-500">
                  {errors.careerGoals.message?.toString()}
                </span>
              )}
            </div>
          </div>
          <div className="mb-4">
            <h2 className="text-2xl font-bold mb-6">Additional Information</h2>
            <div className="mb-4">
              <label className="mb-2 block font-semibold">
                Financial Background:
              </label>
              <p className="mb-2 text-sm">
                {`Please note: We do not require answers to any questions about
                your family's financial background to participate in our core
                programs. However, answering this question will help us connect
                you with relevant scholarship opportunities.`}
              </p>
              <div className="flex items-center mb-2">
                <input
                  type="radio"
                  id="financialBackgroundLow"
                  value="low"
                  {...register("financialBackground")}
                  className="mr-2"
                />
                <label htmlFor="financialBackgroundLow" className="mr-4">
                  Low
                </label>
                <input
                  type="radio"
                  id="financialBackgroundMedium"
                  value="medium"
                  {...register("financialBackground")}
                  className="mr-2"
                />
                <label htmlFor="financialBackgroundMedium" className="mr-4">
                  Medium
                </label>
                <input
                  type="radio"
                  id="financialBackgroundHigh"
                  value="high"
                  {...register("financialBackground")}
                  className="mr-2"
                />
                <label htmlFor="financialBackgroundHigh">High</label>
              </div>
              {errors.financialBackground && (
                <span className="text-red-500">
                  {errors.financialBackground.message?.toString()}
                </span>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="additionalOfferings"
                className="mb-2 block font-semibold"
              >
                Would you like to receive information about our additional
                offerings?
              </label>
              <select
                id="additionalOfferings"
                {...register("additionalOfferings")}
                className={`w-full px-3 py-2 border ${
                  errors.additionalOfferings
                    ? "border-red-500"
                    : "border-gray-300"
                } rounded`}
              >
                <option value="">Select...</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
              {errors.additionalOfferings && (
                <span className="text-red-500">
                  {errors.additionalOfferings.message?.toString()}
                </span>
              )}
            </div>

            <div className="mb-4">
              <label
                htmlFor="additionalOfferingsImportance"
                className="mb-2 block font-semibold"
              >
                To what extent do you consider these additional offerings when
                choosing a program?
              </label>
              <p className="mb-2 text-sm">
                At Alpha Blue, we offer various activities and resources at our
                bootcamp to enhance your learning experience, such as guest
                speaker sessions, career development workshops, industry
                hackathons, and access to collaborative workspaces.
              </p>
              <select
                id="additionalOfferingsImportance"
                {...register("additionalOfferingsImportance")}
                className={`w-full px-3 py-2 border ${
                  errors.additionalOfferingsImportance
                    ? "border-red-500"
                    : "border-gray-300"
                } rounded`}
              >
                <option value="">Select...</option>
                <option value="Not a Factor">Not a Factor</option>
                <option value="Somewhat Important">Somewhat Important</option>
                <option value="Very Important">Very Important</option>
              </select>
              {errors.additionalOfferingsImportance && (
                <span className="text-red-500">
                  {errors.additionalOfferingsImportance.message?.toString()}
                </span>
              )}
            </div>
          </div>
          <div className="text-center mt-8">
            <button
              type="submit"
              disabled={isPending}
              className={`px-6 py-3 text-white font-semibold rounded-md focus:outline-none transition-colors duration-300 flex items-center justify-center ${
                isPending
                  ? "bg-[#63CA97] opacity-50 cursor-not-allowed"
                  : submitError
                  ? "bg-red-500 hover:bg-red-600"
                  : "bg-[#63CA97] hover:bg-[#579d7e]"
              }`}
            >
              {isPending ? (
                <>
                  <Spinner />
                  Submitting...
                </>
              ) : submitError ? (
                "Try Again"
              ) : (
                "Apply Now"
              )}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default RegistrationForm;
