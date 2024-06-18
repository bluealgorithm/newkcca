"use client"; // Ensure this is at the very top

import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import "animate.css";
import { useRouter } from "next/router";
import Select from "react-select";
import { z } from "zod";
import { useForm, Resolver } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Toaster, toast } from "sonner";
import Nav from "../../../components/Nav";
import WhatsappButton from "../../../components/WhatsappButton";
import Footer from "../../../components/Footer";
import { RegistrationFormData } from "../types/types";
import { SubmitHandler } from "react-hook-form";
import { useCreateApplication } from "../hooks/useApi";

const API_URL = "https://restfulcountries.com/api/v1/countries";
const BEARER_TOKEN = process.env.NEXT_PUBLIC_COUNTRY_FETCH_TOKEN;

const formSchema = z.object({
  emailAddress: z.string().email("Enter a Valid Email Address"),
  age: z.string().min(1, "Age is Required").max(2, "Age must be a 2-digit number"),
  hasCodingExperience: z.string().min(1, "Please select an option"),
  programmingLanguages: z.array(z.string()).optional().refine(arr => arr !== undefined && arr.length > 0, "Please select at least one programming language"),
  otherLanguage: z.string().optional(),
  completedCodingCourse: z.string().min(1, "Please select an option"),
  completedPaidCourse: z.string().optional().refine(val => val === "" || val === "yes" || val === "no", "Invalid value for Paid Course"),
  comfortableWithCode: z.string().min(1, "Please select an option"),
  currentGrade: z.string().min(1, "Current Grade is required"),
  programInterest: z.string().min(1, "Please select a program"),
  interestReason: z.string().min(1, "Please provide a reason"),
  careerGoals: z.string().min(1, "Please provide your career goals"),
  financialBackground: z.string().min(1, "Please select an option"),
  additionalOfferings: z.string().min(1, "Please select an option"),
  additionalOfferingsImportance: z.string().min(1, "Please select an option"),
});

const resolver = zodResolver(formSchema);

const RegistrationForm: React.FC = () => {
  const { isPending, isSuccess, mutate } = useCreateApplication();

  const [formData, setFormData] = useState<RegistrationFormData>({
    emailAddress: "",
    age: "",
    currentGrade: "",
    hasCodingExperience: false,
    programmingLanguages: [],
    otherLanguage: "",
    completedCodingCourse: false,
    completedPaidCourse: false,
    comfortableWithCode: false,
    programInterest: "",
    interestReason: "",
    careerGoals: "",
    financialBackground: false,
    additionalOfferings: "yes",
    additionalOfferingsImportance: "somewhatImportant",
  });

  const { register, handleSubmit, formState: { errors } } = useForm<RegistrationFormData>({ resolver });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked, value } = e.target;
    const currentValues = formData.programmingLanguages;
    if (checked) {
      setFormData({ ...formData, [name]: [...currentValues, value] });
    } else {
      setFormData({ ...formData, [name]: currentValues.filter(item => item !== value) });
    }
  };

  const onFormSubmit: SubmitHandler<RegistrationFormData> = async (data) => {
    console.log(data);
    // Add your form submission logic here
    mutate({
      generalInformation: {
        age: data.age,
        emailAddress: data.emailAddress,
        grade: data.currentGrade,
      },
      experience: {
        hasCodingExperience: data.hasCodingExperience,
        programmingLanguages: data.programmingLanguages,
        hasCompletedCodingProgram: data.completedCodingCourse,
        programWasPaid: data.completedPaidCourse,
        canWriteOrUnderstandCode: data.comfortableWithCode,
      },
      interests: {
        programInterest: data.programInterest,
        whyInterestedInCoding: data.interestReason,
        careerGoals: data.careerGoals,
      },
      financialBackground: {
        hasChallengePayingForProgram: data.financialBackground,
      },
      additionalOfferings: {
        importanceOfAdditionalOfferings: data.additionalOfferingsImportance,
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
                <label htmlFor="emailAddress" className="mb-2 block font-semibold">
                  Email Address <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  id="emailAddress"
                  {...register("emailAddress")}
                  value={formData.emailAddress}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border ${errors.emailAddress ? "border-red-500" : "border-gray-300"} rounded focus:outline-none focus:ring-1 focus:ring-[#63CA97]`}
                />
                {errors.emailAddress && <span className="text-red-500">{errors.emailAddress.message?.toString()}</span>}
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
                  className={`w-full px-3 py-2 border ${errors.age ? "border-red-500" : "border-gray-300"} rounded focus:outline-none focus:ring-1 focus:ring-[#63CA97]`}
                />
                {errors.age && <span className="text-red-500">{errors.age.message?.toString()}</span>}
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
                  checked={formData.hasCodingExperience}
                  onChange={handleChange}
                  className="mr-2"
                />
                <label htmlFor="hasCodingExperienceYes" className="mr-4">Yes</label>
                <input
                  type="radio"
                  id="hasCodingExperienceNo"
                  name="hasCodingExperience"
                  value="no"
                  checked={formData.hasCodingExperience}
                  onChange={handleChange}
                  className="mr-2"
                />
                <label htmlFor="hasCodingExperienceNo">No</label>
              </div>
            </div>

            {formData.hasCodingExperience && (
              <>
                <div className="mb-4">
                  <label className="mb-2 block font-semibold">
                    Which programming languages are you familiar with? (Select all that apply)
                  </label>
                  <div className="flex flex-wrap">
                    {["Scratch", "HTML/CSS", "JavaScript", "Python", "Solidity", "Other"].map(language => (
                      <div key={language} className="mr-4 mb-2">
                        <input
                          type="checkbox"
                          id={language}
                          name="programmingLanguages"
                          value={language}
                          checked={formData.programmingLanguages.includes(language)}
                          onChange={handleCheckboxChange}
                          className="mr-2"
                        />
                        <label htmlFor={language}>{language}</label>
                      </div>
                    ))}
                  </div>
                </div>

                {formData.programmingLanguages.includes("Other") && (
                  <div className="mb-2">
                    <label htmlFor="otherLanguage" className="mb-2 block font-semibold">
                      Please specify other language
                    </label>
                    <input
                      type="text"
                      id="otherLanguage"
                      {...register("otherLanguage")}
                      value={formData.otherLanguage}
                      onChange={handleChange}
                      className={`w-full px-3 py-2 border ${errors.otherLanguage ? "border-red-500" : "border-gray-300"} rounded focus:outline-none focus:ring-1 focus:ring-[#63CA97]`}
                    />
                    {errors.otherLanguage && <span className="text-red-500">{errors.otherLanguage.message?.toString()}</span>}
                  </div>
                )}

                <div className="mb-4">
                  <label className="mb-2 block font-semibold">
                    Have you completed a coding course or program before?
                  </label>
                  <div className="flex items-center mb-2">
                    <input
                      type="radio"
                      id="completedCodingCourseYes"
                      name="completedCodingCourse"
                      value="yes"
                      checked={formData.completedCodingCourse}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    <label htmlFor="completedCodingCourseYes" className="mr-4">Yes</label>
                    <input
                      type="radio"
                      id="completedCodingCourseNo"
                      name="completedCodingCourse"
                      value="no"
                      checked={formData.completedCodingCourse}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    <label htmlFor="completedCodingCourseNo">No</label>
                  </div>
                </div>

                {formData.completedCodingCourse && (
                  <div className="mb-4">
                    <label className="mb-2 block font-semibold">
                      Was it a paid course?
                    </label>
                    <div className="flex items-center mb-2">
                      <input
                        type="radio"
                        id="completedPaidCourseYes"
                        name="completedPaidCourse"
                        value="yes"
                        checked={formData.completedPaidCourse}
                        onChange={handleChange}
                        className="mr-2"
                      />
                      <label htmlFor="completedPaidCourseYes" className="mr-4">Yes</label>
                      <input
                        type="radio"
                        id="completedPaidCourseNo"
                        name="completedPaidCourse"
                        value="no"
                        checked={formData.completedPaidCourse}
                        onChange={handleChange}
                        className="mr-2"
                      />
                      <label htmlFor="completedPaidCourseNo">No</label>
                    </div>
                  </div>
                )}

                <div className="mb-4">
                  <label className="mb-2 block font-semibold">
                    Are you comfortable writing or understanding code on your own?
                  </label>
                  <div className="flex items-center mb-2">
                    <input
                      type="radio"
                      id="comfortableWithCodeYes"
                      name="comfortableWithCode"
                      value="yes"
                      checked={formData.comfortableWithCode}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    <label htmlFor="comfortableWithCodeYes" className="mr-4">Yes</label>
                    <input
                      type="radio"
                      id="comfortableWithCodeNo"
                      name="comfortableWithCode"
                      value="no"
                      checked={formData.comfortableWithCode}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    <label htmlFor="comfortableWithCodeNo">No</label>
                  </div>
                </div>
              </>
            )}
          </div>

          <div className="mb-4">
            <h2 className="text-2xl font-bold mb-6">Interest in Coding Program</h2>
            <div className="mb-4">
              <label htmlFor="programInterest" className="mb-2 block font-semibold">
                Which program are you interested in? <span className="text-red-400">*</span>
              </label>
              <select
                id="programInterest"
                {...register("programInterest")}
                value={formData.programInterest}
                onChange={handleChange}
                className={`w-full px-3 py-2 border ${errors.programInterest ? "border-red-500" : "border-gray-300"} rounded focus:outline-none focus:ring-1 focus:ring-[#63CA97]`}
              >
                <option value="" disabled>Select a program</option>
                <option value="webDevelopment">Web Development</option>
                <option value="appDevelopment">App Development</option>
                <option value="gameDevelopment">Game Development</option>
                <option value="dataScience">Data Science</option>
                <option value="machineLearning">Machine Learning</option>
              </select>
              {errors.programInterest && <span className="text-red-500">{errors.programInterest.message?.toString()}</span>}
            </div>

            <div className="mb-4">
              <label htmlFor="interestReason" className="mb-2 block font-semibold">
                Why are you interested in learning to code? <span className="text-red-400">*</span>
              </label>
              <textarea
                id="interestReason"
                {...register("interestReason")}
                value={formData.interestReason}
                onChange={handleChange}
                className={`w-full px-3 py-2 border ${errors.interestReason ? "border-red-500" : "border-gray-300"} rounded focus:outline-none focus:ring-1 focus:ring-[#63CA97]`}
                rows={4}
              ></textarea>
              {errors.interestReason && <span className="text-red-500">{errors.interestReason.message?.toString()}</span>}
            </div>

            <div className="mb-4">
              <label htmlFor="careerGoals" className="mb-2 block font-semibold">
                What are your career goals? <span className="text-red-400">*</span>
              </label>
              <textarea
                id="careerGoals"
                {...register("careerGoals")}
                value={formData.careerGoals}
                onChange={handleChange}
                className={`w-full px-3 py-2 border ${errors.careerGoals ? "border-red-500" : "border-gray-300"} rounded focus:outline-none focus:ring-1 focus:ring-[#63CA97]`}
                rows={4}
              ></textarea>
              {errors.careerGoals && <span className="text-red-500">{errors.careerGoals.message?.toString()}</span>}
            </div>
          </div>

          <div className="mb-4">
            <h2 className="text-2xl font-bold mb-6">Financial Background</h2>
            <div className="mb-4">
              <label htmlFor="financialBackground" className="mb-2 block font-semibold">
                How would you describe your ability to pay for the program? <span className="text-red-400">*</span>
              </label>
              <select
                id="financialBackground"
                {...register("financialBackground")}
                value={formData.financialBackground}
                onChange={handleChange}
                className={`w-full px-3 py-2 border ${errors.financialBackground ? "border-red-500" : "border-gray-300"} rounded focus:outline-none focus:ring-1 focus:ring-[#63CA97]`}
              >
                <option value="" disabled>Select an option</option>
                <option value="high">I can easily afford the program</option>
                <option value="medium">I can afford the program with some difficulty</option>
                <option value="low">I cannot afford the program</option>
              </select>
              {errors.financialBackground && <span className="text-red-500">{errors.financialBackground.message?.toString()}</span>}
            </div>
          </div>

          <div className="mb-4">
            <h2 className="text-2xl font-bold mb-6">Additional Offerings</h2>
            <div className="mb-4">
              <label htmlFor="additionalOfferings" className="mb-2 block font-semibold">
                Are you interested in additional offerings such as mentorship, internships, or career services? <span className="text-red-400">*</span>
              </label>
              <select
                id="additionalOfferings"
                {...register("additionalOfferings")}
                value={formData.additionalOfferings}
                onChange={handleChange}
                className={`w-full px-3 py-2 border ${errors.additionalOfferings ? "border-red-500" : "border-gray-300"} rounded focus:outline-none focus:ring-1 focus:ring-[#63CA97]`}
              >
                <option value="" disabled>Select an option</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
              {errors.additionalOfferings && <span className="text-red-500">{errors.additionalOfferings.message?.toString()}</span>}
            </div>

            {formData.additionalOfferings && (
              <div className="mb-4">
                <label htmlFor="additionalOfferingsImportance" className="mb-2 block font-semibold">
                  How important are these additional offerings to you? <span className="text-red-400">*</span>
                </label>
                <select
                  id="additionalOfferingsImportance"
                  {...register("additionalOfferingsImportance")}
                  value={formData.additionalOfferingsImportance}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border ${errors.additionalOfferingsImportance ? "border-red-500" : "border-gray-300"} rounded focus:outline-none focus:ring-1 focus:ring-[#63CA97]`}
                >
                  <option value="" disabled>Select an option</option>
                  <option value="veryImportant">Very Important</option>
                  <option value="somewhatImportant">Somewhat Important</option>
                  <option value="notImportant">Not Important</option>
                </select>
                {errors.additionalOfferingsImportance && <span className="text-red-500">{errors.additionalOfferingsImportance.message?.toString()}</span>}
              </div>
            )}
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              disabled={isPending}
              className="px-4 py-2 bg-[#63CA97] text-white font-semibold rounded hover:bg-[#4B9E78] focus:outline-none focus:ring-2 focus:ring-[#63CA97]"
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
