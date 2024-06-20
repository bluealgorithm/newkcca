"use client";

import React from "react";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Nav from "../../../components/Nav";
import { Toaster } from "sonner";
import { useCreateApplication } from "../../hooks/useApi";
import { AdditionalOfferings, ApplicationData, Experience, FinancialBackground, GeneralInformation, Interests } from "../types/types";

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
  hasCodingExperience: z.string().min(1, "Please select an option"),
  programmingLanguages: z
    .array(z.string())
    .optional(),
  otherLanguage: z.string().optional(),
  completedCodingCourse: z.string().min(1, "Please select an option").optional(),
  completedPaidCourse: z
    .string()
    .optional(),
  comfortableWithCode: z
    .string()
    .optional()
    .refine((val) => val !== "", "Please select an option").optional(),
  currentGrade: z.string().min(1, "Current Grade is required"),
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
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ resolver });
  const { mutate, isPending } = useCreateApplication();

  const hasCodingExperience = watch("hasCodingExperience");

  const onSubmit = (data: FieldValues) => {
    const {
      emailAddress,
      age,
      hasCodingExperience,
      programmingLanguages,
      completedCodingCourse,
      completedPaidCourse,
      comfortableWithCode,
      currentGrade,
      programInterest,
      interestReason,
      careerGoals,
      financialBackground: financialBackgroundStr,
      additionalOfferings: additionalOfferingsStr,
      additionalOfferingsImportance,
    } = data;

    const generalInformation: GeneralInformation = {
      emailAddress,
      age: Number(age),
      grade: currentGrade,
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
    };

    mutate(applicationData);
  };

  return (
    <>
      <Nav />
      <Toaster
        toastOptions={{
          style: { background: "rgb(177, 16, 16)", color: "white" },
          className: "my-toast",
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
            <h2 className="text-2xl font-bold mb-6">Educational Information</h2>
            <div className="mb-4">
              <label
                htmlFor="currentGrade"
                className="mb-2 block font-semibold"
              >
                Current Grade <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                id="currentGrade"
                {...register("currentGrade")}
                className={`w-full px-3 py-2 border ${
                  errors.currentGrade ? "border-red-500" : "border-gray-300"
                } rounded focus:outline-none focus:ring-1 focus:ring-[#63CA97]`}
              />
              {errors.currentGrade && (
                <span className="text-red-500">
                  {errors.currentGrade.message?.toString()}
                </span>
              )}
            </div>
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
              className="px-6 py-3 bg-[#63CA97] text-white font-semibold rounded-md focus:outline-none hover:bg-[#579d7e] transition-colors duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default RegistrationForm;
