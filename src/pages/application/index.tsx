"use client"; // Ensure this is at the very top

import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import "animate.css";
import { useRouter } from "next/router";
import Select from "react-select";
import { z } from "zod";
import { useForm, Resolver, FieldValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Toaster, toast } from "sonner";
import Nav from "../../../components/Nav";
import WhatsappButton from "../../../components/WhatsappButton";
import Footer from "../../../components/Footer";
import {
  useCreateRegistration,
  useCreateApplication,
  useGetApplication,
  useGetRegistrations,
  useGetApplications,
  useGetPayment,
  useGetPayments,
} from "../hooks/useApi";

const API_URL = "https://restfulcountries.com/api/v1/countries";
const BEARER_TOKEN = process.env.NEXT_PUBLIC_COUNTRY_FETCH_TOKEN;

interface RegistrationFormData {
  emailAddress: string;
  age: string;
  currentGrade: string;
  hasCodingExperience: string;
  programmingLanguages: string[];
  otherLanguage: string;
  completedCodingCourse: string;
  completedPaidCourse: string;
  comfortableWithCode: string;
  programInterest: string;
  interestReason: string;
  careerGoals: string;
  financialBackground: string;
  additionalOfferings: string;
  additionalOfferingsImportance: string;
}

const formSchema = z.object({
  emailAddress: z.string().email("Enter a Valid Email Address"),
  age: z
    .string()
    .min(1, "Age is Required")
    .max(2, "Age must be a 2-digit number"),
  hasCodingExperience: z.string().min(1, "Please select an option"),
  programmingLanguages: z
    .array(z.string())
    .optional()
    .refine(
      (arr) => arr !== undefined && arr.length > 0,
      "Please select at least one programming language"
    ),
  otherLanguage: z.string().optional(),
  completedCodingCourse: z.string().min(1, "Please select an option"),
  completedPaidCourse: z
    .string()
    .optional()
    .refine(
      (val) => val === "" || val === "yes" || val === "no",
      "Invalid value for Paid Course"
    ),
  comfortableWithCode: z
    .string()
    .optional()
    .refine((val) => val !== "", "Please select an option"),
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

const RegistrationForm: React.FC = () => {
  const {
    mutate: createRegistration,
    isPending,
    isError,
  } = useCreateRegistration();
  const [formData, setFormData] = useState<RegistrationFormData>({
    emailAddress: "",
    age: "",
    currentGrade: "",
    hasCodingExperience: "",
    programmingLanguages: [],
    otherLanguage: "",
    completedCodingCourse: "",
    completedPaidCourse: "",
    comfortableWithCode: "",
    programInterest: "",
    interestReason: "",
    careerGoals: "",
    financialBackground: "",
    additionalOfferings: "",
    additionalOfferingsImportance: "",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked, value } = e.target;
    const currentValues = formData.programmingLanguages;
    if (checked) {
      setFormData({ ...formData, [name]: [...currentValues, value] });
    } else {
      setFormData({
        ...formData,
        [name]: currentValues.filter((item) => item !== value),
      });
    }
  };

  const onFormSubmit = (data: FieldValues) => {
    const formData = data as RegistrationFormData;
    // Add your form submission logic here
    createRegistration(formData, {
      onSuccess: (response) => {
        console.log("Registration Successful:", response);
        // Handle success case (e.g., show a success message, reset the form, etc.)
      },
      onError: (error) => {
        console.error("Registration Failed:", error);
        // Handle error case (e.g., show an error message)
      },
    });
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
        <form onSubmit={handleSubmit(onFormSubmit)}>
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
                  value={formData.emailAddress}
                  onChange={handleChange}
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
                  value={formData.age}
                  onChange={handleChange}
                  min={9}
                  max={16}
                  maxLength={2}
                  pattern="\d{1,2}" // Allow only 1 or 2 digits
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
                  name="hasCodingExperience"
                  value="yes"
                  checked={formData.hasCodingExperience === "yes"}
                  onChange={handleChange}
                  className="mr-2"
                />
                <label htmlFor="hasCodingExperienceYes" className="mr-4">
                  Yes
                </label>
                <input
                  type="radio"
                  id="hasCodingExperienceNo"
                  name="hasCodingExperience"
                  value="no"
                  checked={formData.hasCodingExperience === "no"}
                  onChange={handleChange}
                  className="mr-2"
                />
                <label htmlFor="hasCodingExperienceNo">No</label>
              </div>
            </div>

            {formData.hasCodingExperience === "yes" && (
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
                          name="programmingLanguages"
                          value={language}
                          checked={formData.programmingLanguages.includes(
                            language
                          )}
                          onChange={handleCheckboxChange}
                          className="mr-2"
                        />
                        <label htmlFor={language}>{language}</label>
                      </div>
                    ))}
                  </div>
                  {formData.programmingLanguages.includes("Other") && (
                    <div className="mt-2">
                      <label
                        htmlFor="otherLanguage"
                        className="mb-2 block font-semibold"
                      >
                        Please specify:
                      </label>
                      <input
                        type="text"
                        id="otherLanguage"
                        name="otherLanguage"
                        value={formData.otherLanguage || ""}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded"
                      />
                    </div>
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
                      name="completedCodingCourse"
                      value="yes"
                      checked={formData.completedCodingCourse === "yes"}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    <label htmlFor="completedCodingCourseYes" className="mr-4">
                      Yes
                    </label>
                    <input
                      type="radio"
                      id="completedCodingCourseNo"
                      name="completedCodingCourse"
                      value="no"
                      checked={formData.completedCodingCourse === "no"}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    <label htmlFor="completedCodingCourseNo">No</label>
                  </div>
                </div>

                <div className="mb-4">
                  <label className="mb-2 block font-semibold">
                    I have completed a paid coding course:
                  </label>
                  <div className="flex items-center mb-2">
                    <input
                      type="radio"
                      id="completedPaidCourseYes"
                      name="completedPaidCourse"
                      value="yes"
                      checked={formData.completedPaidCourse === "yes"}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    <label htmlFor="completedPaidCourseYes" className="mr-4">
                      Yes
                    </label>
                    <input
                      type="radio"
                      id="completedPaidCourseNo"
                      name="completedPaidCourse"
                      value="no"
                      checked={formData.completedPaidCourse === "no"}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    <label htmlFor="completedPaidCourseNo">No</label>
                  </div>
                </div>

                <div className="mb-4">
                  <label className="mb-2 block font-semibold">
                    How comfortable are you with coding?
                  </label>
                  <select
                    id="comfortableWithCode"
                    name="comfortableWithCode"
                    value={formData.comfortableWithCode}
                    onChange={handleChange}
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
                value={formData.currentGrade}
                onChange={handleChange}
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
                name="programInterest"
                value={formData.programInterest}
                onChange={handleChange}
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
                value={formData.interestReason}
                onChange={handleChange}
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
                value={formData.careerGoals}
                onChange={handleChange}
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
                Please note: We do not require answers to any questions about
                your family's financial background to participate in our core
                programs. However, answering this question will help us connect
                you with relevant scholarship opportunities.
              </p>
              <div className="flex items-center mb-2">
                <input
                  type="radio"
                  id="financialBackgroundLow"
                  name="financialBackground"
                  value="low"
                  checked={formData.financialBackground === "low"}
                  onChange={handleChange}
                  className="mr-2"
                />
                <label htmlFor="financialBackgroundLow" className="mr-4">
                  Low
                </label>
                <input
                  type="radio"
                  id="financialBackgroundMedium"
                  name="financialBackground"
                  value="medium"
                  checked={formData.financialBackground === "medium"}
                  onChange={handleChange}
                  className="mr-2"
                />
                <label htmlFor="financialBackgroundMedium" className="mr-4">
                  Medium
                </label>
                <input
                  type="radio"
                  id="financialBackgroundHigh"
                  name="financialBackground"
                  value="high"
                  checked={formData.financialBackground === "high"}
                  onChange={handleChange}
                  className="mr-2"
                />
                <label htmlFor="financialBackgroundHigh">High</label>
              </div>
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
                name="additionalOfferings"
                value={formData.additionalOfferings}
                onChange={handleChange}
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
                name="additionalOfferingsImportance"
                value={formData.additionalOfferingsImportance}
                onChange={handleChange}
                className={`w-full px-3 py-2 border ${
                  errors.additionalOfferingsImportance
                    ? "border-red-500"
                    : "border-gray-300"
                } rounded`}
              >
                <option value="">Select...</option>
                <option value="notAFactor">Not a Factor</option>
                <option value="somewhatImportant">Somewhat Important</option>
                <option value="veryImportant">Very Important</option>
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
      <WhatsappButton />
      <Footer />
    </>
  );
};

export default RegistrationForm;
