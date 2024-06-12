'use client'; // Ensure this is at the very top

import React, { useState } from 'react';

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

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    // Add your form submission logic here
  };

  return (
    <div className="max-w-4xl mx-auto p-8">
      <div className="flex items-center justify-between py-4 px-6 mb-8">
        <div className="flex">
          <span className="text-black-600 manrope text-2xl">Registration</span>
        </div>
        <div>
          <a href="#" className="text-blue-800 hover:text-gray-800">
            Login
          </a>
        </div>
      </div>

      <h1 className="text-2xl font-bold mb-8 text-center">Registration Questionnaire</h1>

      <div className="flex items-center justify-center mb-8">
        <div className={`flex items-center ${step >= 1 ? 'text-blue-600' : 'text-gray-400'}`}>
          <div className={`w-8 h-8 flex items-center justify-center rounded-full border-2 ${step >= 1 ? 'border-blue-600' : 'border-gray-400'}`}>
            1
          </div>
          <span className="ml-2">General Information</span>
        </div>
        <div className={`flex-1 border-t-2 mx-4 ${step >= 2 ? 'border-blue-600' : 'border-gray-400'}`}></div>
        <div className={`flex items-center ${step >= 2 ? 'text-blue-600' : 'text-gray-400'}`}>
          <div className={`w-8 h-8 flex items-center justify-center rounded-full border-2 ${step >= 2 ? 'border-blue-600' : 'border-gray-400'}`}>
            2
          </div>
          <span className="ml-2">Coding Experience</span>
        </div>
        <div className={`flex-1 border-t-2 mx-4 ${step >= 3 ? 'border-blue-600' : 'border-gray-400'}`}></div>
        <div className={`flex items-center ${step >= 3 ? 'text-blue-600' : 'text-gray-400'}`}>
          <div className={`w-8 h-8 flex items-center justify-center rounded-full border-2 ${step >= 3 ? 'border-blue-600' : 'border-gray-400'}`}>
            3
          </div>
          <span className="ml-2">Interests</span>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <div className="mb-4">
            <h2 className="text-2xl font-bold mb-6">General Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="mb-2">
                <label htmlFor="emailAddress" className="mb-2 block font-semibold">
                  Email Address <span className='text-red-700'>*</span>
                </label>
                <input
                  type="email"
                  id="emailAddress"
                  name="emailAddress"
                  value={formData.emailAddress}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                />
              </div>

              <div className="mb-2">
                <label htmlFor="gender" className="mb-2 block font-semibold">
                  Age <span className='text-red-700'>*</span>
                </label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  max={16}
                  min={9}
                  maxLength={2}
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                />
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
                  name="hasCodingExperience"
                  value="yes"
                  checked={formData.hasCodingExperience === 'yes'}
                  onChange={handleChange}
                  className="mr-2"
                />
                <label htmlFor="hasCodingExperienceYes" className="mr-4">Yes</label>
                <input
                  type="radio"
                  id="hasCodingExperienceNo"
                  name="hasCodingExperience"
                  value="no"
                  checked={formData.hasCodingExperience === 'no'}
                  onChange={handleChange}
                  className="mr-2"
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
                className="w-full px-3 py-2 border border-gray-300 rounded"
                rows={3}
              ></textarea>
            </div>

            <div className="mb-4">
              <label className="mb-2 block font-semibold">What are your career goals related to technology (if any)?</label>
              <textarea
                name="careerGoals"
                value={formData.careerGoals}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded"
                rows={3}
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
                  className="mr-2"
                />

                <label htmlFor="financialBackgroundYes" className="mr-4">Yes</label>
                <input
                  type="radio"
                  id="financialBackgroundNo"
                  name="financialBackground"
                  value="no"
                  checked={formData.financialBackground === 'no'}
                  onChange={handleChange}
                  className="mr-2"
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
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Next
            </button>
          )}
          {step === 3 && (
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
