'use client'; // Ensure this is at the very top

import React, { useState, useEffect, useRef } from 'react';
import Footer from '../../components/Footer';
import Nav from '../../components/Nav';
import Swal from 'sweetalert2';
import 'animate.css';
import { url } from '../../url';
import WhatsappButton from '../../components/WhatsappButton';
import { useRouter } from 'next/router';
import Select from 'react-select';
import { ZodType, z } from "zod";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Toaster, toast } from 'sonner';
const API_URL = 'https://restfulcountries.com/api/v1/countries';
const BEARER_TOKEN = process.env.NEXT_PUBLIC_COUNTRY_FETCH_TOKEN;

interface RegistrationFormData {
  firstName: string;
  lastName: string;
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
}

const RegistrationForm: React.FC = () => {

  // Schema for the first step (General Information)
  const firstStepSchema = z.object({
    emailAddress: z.string().email('Invalid email address'),
    age: z.string().min(1, 'Age is required').max(2, 'Age must be a 2-digit number'),
    currentGrade: z.string().min(1, 'Current Grade is required'),
  });

  // Schema for the second step (Coding Experience)
  const secondStepSchema = z.object({
    hasCodingExperience: z.string().min(1, 'Please select an option'),
    programmingLanguages: z.array(z.string()).optional().refine((arr) => arr !== undefined && arr.length > 0, 'Please select at least one programming language'),
    otherLanguage: z.string().optional(),
    completedCodingCourse: z.string().min(1, 'Please select an option'),
    completedPaidCourse: z.string().optional().refine(
      (val) => val === '' || val === 'yes' || val === 'no',
      'Invalid value for Paid Course'
    ),
    comfortableWithCode: z.string().min(1, 'Please select an option'),
  });

  // Schema for the third step (Interests)
  const thirdStepSchema = z.object({
    programInterest: z.string().min(1, 'Please select a program'),
    interestReason: z.string().min(1, 'Please provide a reason'),
    careerGoals: z.string().min(1, 'Please provide your career goals'),
    financialBackground: z.string().min(1, 'Please select an option'),
    additionalOfferings: z.string().min(1, 'Please select an option'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    trigger,
  } = useForm({
    resolver: zodResolver(firstStepSchema),
  });

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<RegistrationFormData>({
    firstName: '',
    lastName: '',
    emailAddress: '',
    age: '',
    currentGrade: '',
    hasCodingExperience: '',
    programmingLanguages: [],
    otherLanguage: '',
    completedCodingCourse: '',
    completedPaidCourse: '',
    comfortableWithCode: '',
    programInterest: '',
    interestReason: '',
    careerGoals: '',
    financialBackground: '',
    additionalOfferings: '',
  });

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
      setFormData({ ...formData, [name]: currentValues.filter((item) => item !== value) });
    }
  };


  const handleNext = async () => {
    let isValid = false;

    if (step === 1) {
      isValid = await trigger(['emailAddress', 'age', 'currentGrade']);
      if (!isValid) {
        toast.error('Please fill all required fields in step 1', {
          duration: 3000,
        });
      }
    } else if (step === 2) {
      isValid = await trigger(['hasCodingExperience', 'programmingLanguages', 'completedCodingCourse', 'completedPaidCourse', 'comfortableWithCode']);
      if (!isValid) {
        toast.error('Please fill all required fields in step 2.', {
          duration: 3000,
        });
      }
    } else if (step === 3) {
      isValid = await trigger(['programInterest', 'interestReason', 'careerGoals', 'financialBackground', 'additionalOfferings']);
      if (!isValid) {
        toast.error('Please fill all required fields in step 3.', {
          duration: 3000,
        });
      }
    }

    if (isValid) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    // Add your form submission logic here
  };

  return (
    <>
      <Nav />
      <Toaster
        toastOptions={{
          style: { background: 'rgb(177, 16, 16)', color: 'white' },
          className: 'my-toast',
        }}
        position="top-center"
      />
      <div className="max-w-4xl mx-auto p-8">

        <h1 className="text-2xl font-bold mb-8 text-center">Registration Questionnaire</h1>

        <div className="flex items-center justify-center mb-8">
          <div className={`flex items-center ${step >= 1 ? 'text-[#63CA97]' : 'text-gray-400'}`}>
            <div className={`w-8 h-8 flex items-center justify-center rounded-full border-2 ${step >= 1 ? 'border-[#63CA97]' : 'border-gray-400'}`}>
              1
            </div>
            <span className="ml-2">General Information</span>
          </div>
          <div className={`flex-1 border-t-2 mx-4 ${step >= 2 ? 'border-[#63CA97]' : 'border-gray-400'}`}></div>
          <div className={`flex items-center ${step >= 2 ? 'text-[#63CA97]' : 'text-gray-400'}`}>
            <div className={`w-8 h-8 flex items-center justify-center rounded-full border-2 ${step >= 2 ? 'border-[#63CA97]' : 'border-gray-400'}`}>
              2
            </div>
            <span className="ml-2">Coding Experience</span>
          </div>
          <div className={`flex-1 border-t-2 mx-4 ${step >= 3 ? 'border-[#63CA97]' : 'border-gray-400'}`}></div>
          <div className={`flex items-center ${step >= 3 ? 'text-[#63CA97]' : 'text-gray-400'}`}>
            <div className={`w-8 h-8 flex items-center justify-center rounded-full border-2 ${step >= 3 ? 'border-[#63CA97]' : 'border-gray-400'}`}>
              3
            </div>
            <span className="ml-2">Interests</span>
          </div>
        </div>

        <form onSubmit={onFormSubmit}>
          {step === 1 && (
            <div className="mb-4">
              <h2 className="text-2xl font-bold mb-6">General Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="mb-2">
                  <label htmlFor="emailAddress" className="mb-2 block font-semibold">
                    Email Address <span className='text-red-400'>*</span>
                  </label>
                  <input
                    type="email"
                    id="emailAddress"
                    {...register('emailAddress')}
                    value={formData.emailAddress}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border ${errors.emailAddress ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:ring-1 focus:ring-[#63CA97]`}
                  />
                  {errors.emailAddress && (
                    <span className='text-red-500'>{errors.emailAddress.message?.toString()}</span>
                  )}
                </div>

                <div className="mb-2">
                  <label htmlFor="gender" className="mb-2 block font-semibold">
                    Age <span className='text-red-400'>*</span>
                  </label>
                  <input
                    type="number  "
                    id="age"
                    {...register('age')}
                    value={formData.age}
                    onChange={handleChange}
                    min={9}
                    max={16}
                    maxLength={2}
                    pattern="\d{1,2}" // Allow only 1 or 2 digits
                    className={`w-full px-3 py-2 border ${errors.age ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:ring-1 focus:ring-[#63CA97]`}
                  />
                  {errors.age && <span className='text-red-500'>{errors.age.message?.toString()}</span>}
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="mb-4">
              <h2 className="text-2xl font-bold mb-6">Coding Experience</h2>
              <div className="mb-4">
                <label className="mb-2 block font-semibold">Have you ever done any coding before?</label>
                <div className="flex items-center mb-2">
                  <input
                    type="radio"
                    id="hasCodingExperienceYes"
                    value="yes"
                    checked={formData.hasCodingExperience === 'yes'}
                    onChange={handleChange}
                    className="mr-2"
                    required
                  />
                  <label htmlFor="hasCodingExperienceYes" className="mr-4">Yes</label>
                  <input
                    type="radio"
                    id="hasCodingExperienceNo"
                    value="no"
                    checked={formData.hasCodingExperience === 'no'}
                    onChange={handleChange}
                    className="mr-2"
                    required
                  />
                  <label htmlFor="hasCodingExperienceNo">No</label>
                </div>
              </div>

              {formData.hasCodingExperience === 'yes' && (
                <>
                  <div className="mb-4">
                    <label className="mb-2 block font-semibold">Which programming languages are you familiar with? (Select all that apply)</label>
                    <div className="flex flex-wrap">
                      {['Scratch', 'HTML/CSS', 'JavaScript', 'Python', 'Solidity', 'Other'].map(language => (
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
                    {formData.programmingLanguages.includes('Other') && (
                      <div className="mt-2">
                        <label htmlFor="otherLanguage" className="mb-2 block font-semibold">Please specify:</label>
                        <input
                          type="text"
                          id="otherLanguage"
                          name="otherLanguage"
                          value={formData.otherLanguage || ''}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded"
                        />
                      </div>
                    )}
                  </div>

                  <div className="mb-4">
                    <label className="mb-2 block font-semibold">I have completed a coding course or program before:</label>
                    <div className="flex items-center mb-2">
                      <input
                        type="radio"
                        id="completedCodingCourseTrue"
                        name="completedCodingCourse"
                        value="true"
                        checked={formData.completedCodingCourse === 'true'}
                        onChange={handleChange}
                        className="mr-2"
                        required
                      />
                      <label htmlFor="completedCodingCourseTrue" className="mr-4">True</label>
                      <input
                        type="radio"
                        id="completedCodingCourseFalse"
                        name="completedCodingCourse"
                        value="false"
                        checked={formData.completedCodingCourse === 'false'}
                        onChange={handleChange}
                        className="mr-2"
                        required
                      />
                      <label htmlFor="completedCodingCourseFalse">False</label>
                    </div>
                  </div>

                  {formData.completedCodingCourse === 'true' && (
                    <div className="mb-4">
                      <label className="mb-2 block font-semibold">If you have completed a course before, was it a paid program?</label>
                      <div className="flex items-center mb-2">
                        <input
                          type="radio"
                          id="completedPaidCourseYes"
                          name="completedPaidCourse"
                          value="yes"
                          checked={formData.completedPaidCourse === 'yes'}
                          onChange={handleChange}
                          className="mr-2"
                          required

                        />
                        <label htmlFor="completedPaidCourseYes" className="mr-4">Yes</label>
                        <input
                          type="radio"
                          id="completedPaidCourseNo"
                          name="completedPaidCourse"
                          value="no"
                          checked={formData.completedPaidCourse === 'no'}
                          onChange={handleChange}
                          className="mr-2"
                          required
                        />
                        <label htmlFor="completedPaidCourseNo">No</label>
                      </div>
                    </div>
                  )}

                  <div className="mb-4">
                    <label className="mb-2 block font-semibold">I feel comfortable writing, reading and understanding basic code:</label>
                    <div className="flex items-center mb-2">
                      <input
                        type="radio"
                        id="comfortableWithCodeYes"
                        name="comfortableWithCode"
                        value="yes"
                        checked={formData.comfortableWithCode === 'yes'}
                        onChange={handleChange}
                        className="mr-2"
                        required
                      />
                      <label htmlFor="comfortableWithCodeYes" className="mr-4">Yes</label>
                      <input
                        type="radio"
                        id="comfortableWithCodeNo"
                        name="comfortableWithCode"
                        value="no"
                        checked={formData.comfortableWithCode === 'no'}
                        onChange={handleChange}
                        className="mr-2"
                        required
                      />
                      <label htmlFor="comfortableWithCodeNo">No</label>
                    </div>
                  </div>
                </>
              )}
            </div>
          )}

          {step === 3 && (
            <div className="mb-4">
              <h2 className="text-2xl font-bold mb-6">Interests</h2>
              <div className="mb-4">
                <label className="mb-2 block font-semibold">Which program are you most interested in?</label>
                <select
                  name="programInterest"
                  value={formData.programInterest}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                  required
                >
                  <option value="" disabled>Select</option>
                  <option value="Web Development (for beginners)">Web Development (for beginners)</option>
                  <option value="Web Development (for intermediate or advanced learners)">Web Development (for intermediate or advanced learners)</option>
                  <option value="Scratch Programming (for beginners)">Scratch Programming (for beginners)</option>
                  <option value="Game Development">Game Development</option>
                  <option value="Web 3 Development">Web 3 Development</option>
                </select>
              </div>

              <div className="mb-4">
                <label className="mb-2 block font-semibold">Why are you interested in learning to code?</label>
                <textarea
                  name="interestReason"
                  value={formData.interestReason}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#63CA97]"
                  rows={3}
                  required
                ></textarea>
              </div>

              <div className="mb-4">
                <label className="mb-2 block font-semibold">What are your career goals related to technology (if any)?</label>
                <textarea
                  name="careerGoals"
                  value={formData.careerGoals}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#63CA97]"
                  rows={3}
                  required
                ></textarea>
              </div>

              <div className="mb-4">
                <p className="mb-4 text-gray-600">Please note: We do not require answers to any questions about your family's financial background to participate in our core programs. However, answering this question will help us connect you with relevant scholarship opportunities.</p>

                <label className="mb-2 block font-semibold">Do you think you could be challenged with paying for this program if admitted into this program?</label>
                <div className="flex items-center mb-2">
                  <input
                    type="radio"
                    id="financialBackgroundYes"
                    name="financialBackground"
                    value="yes"
                    checked={formData.financialBackground === 'yes'}
                    onChange={handleChange}
                    className="mr-2 focus:outline-none focus:ring-1 focus:ring-[#63CA97]"
                    required
                  />

                  <label htmlFor="financialBackgroundYes" className="mr-4">Yes</label>
                  <input
                    type="radio"
                    id="financialBackgroundNo"
                    name="financialBackground"
                    value="no"
                    checked={formData.financialBackground === 'no'}
                    onChange={handleChange}
                    className="mr-2 focus:outline-none focus:ring-1 focus:ring-[#63CA97]"
                    required
                  />
                  <label htmlFor="financialBackgroundNo">No</label>
                </div>
                <p className="mb-4 text-gray-600">At Alpha Blue, we offer various activities and resources at our bootcamp to enhance your learning experience, such as guest speaker sessions, career development workshops, industry hackathons, and access to collaborative workspaces. To what extent do you consider these additional offerings when choosing a program?</p>
              </div>

              <div className="mb-4">
                <label className="mb-2 block font-semibold">To what extent do you consider these additional offerings when choosing a program?</label>
                <select
                  name="additionalOfferings"
                  value={formData.additionalOfferings}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                  required
                >
                  <option value="" disabled>Select</option>
                  <option value="Not a Factor">Not a Factor</option>
                  <option value="Somewhat Important">Somewhat Important</option>
                  <option value="Very Important">Very Important</option>
                </select>
              </div>
            </div>
          )}

          <div className="flex justify-between mt-4">
            {step > 1 && (
              <button
                type="button"
                onClick={handleBack}
                className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
              >
                Back
              </button>
            )}
            {step < 3 && (
              <button
                type="button"
                onClick={handleNext}
                className="bg-[#63CA97] text-white px-4 py-2 rounded hover:bg-[#63CA97]"
              >
                Next
              </button>
            )}
            {step === 3 && (
              <button
                type="submit"
                className="bg-[#63CA97] text-white px-4 py-2 rounded hover:bg-[#63CA97]"
              >
                Submit
              </button>
            )}
          </div>
        </form>
        <div className='relative'>
          <WhatsappButton />
        </div>
        <Footer />
      </div>
    </>

  );
};

export default RegistrationForm;
