import React, { useEffect } from "react";
import { FieldValues, useForm } from "react-hook-form";
import "animate.css";
import { useRouter } from "next/router";
import Nav from "../../../components/Nav";
import WhatsappButton from "../../../components/WhatsappButton";
import Footer from "../../../components/Footer";
import { useCreateRegistration, useGetApplication } from "../../hooks/useApi";

const Registration = () => {
  const router = useRouter();
  const applicationId = router.query.id;

  const { data, isLoading, isSuccess } = useGetApplication(
    applicationId as string
  );
  const { mutate, isPending } = useCreateRegistration();

  const { register, handleSubmit, setValue } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      city: "",
      state: "",
      address: "",
      country: "",
      cohort: "",
      age: "",
      gender: "",
      isBoarding: "",
      school: "",
      schoolAddress: "",
      parentName: "",
      email: "",
      phoneNumber: "",
      isInSchool: ""
    },
  });

  useEffect(() => {
    if (isSuccess) {
      const { data: applicationInfo } = data;

      setValue("age", applicationInfo?.data.generalInformation.age || "");
      setValue(
        "email",
        applicationInfo?.data.generalInformation.emailAddress || ""
      );
    }
  }, [data, isSuccess, setValue]);

  useEffect(() => {
    const timer = setTimeout(() => {
      alert(
        "Kindly use correct email address because you will have to confirm it before your registration can be validated"
      );
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const onSubmit = (data: FieldValues) => {
    mutate({
      id: applicationId as string, // Include the id property here
      address: data.address,
      age: data.age,
      city: data.city,
      cohort: new Date().getFullYear().toString(),
      country: data.country,
      emailAddress: data.email,
      firstName: data.firstName,
      gender: data.gender,
      isBoarding: data.isBoarding === "yes",
      isInSchool: data.isInSchool === "yes",
      lastName: data.lastName,
      parentName: data.parentName,
      phoneNumber: data.phoneNumber,
      school: data.school,
      schoolAddress: data.schoolAddress,
      state: data.state,
    });
  };

  return (
    <>
      <Nav />
      <div className=" bg-white pb-[40px] md:pb-[160px] text-black">
        <section className="w-[90%] md:w-[1104px] mt-[30px] md:mt-[72px] p-[10px] md:p-[40px] mx-auto flex flex-col gap-[15px] md:gap-[40px] justify-center border border-primary pb-4">
          <h3 className="font-[500] font-montserrat text-[24px] leading-[32px] text-black text-center">
            Registration Form
          </h3>
          <h3 className="font-[500] font-montserrat text-[24px] leading-[32px] text-black text-left">
            Personal Information:
          </h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="md:flex gap-x-[40px]">
              <div className="flex-1 mb-[20px] md:mb-0">
                <label
                  htmlFor="fname"
                  className="font-[400] font-montserrat text-[16px] leading-[24px] block"
                >
                  First name
                </label>
                <input
                  {...register("firstName")}
                  required
                  type="text"
                  className="font-[400] text-[14px] font-montserrat text-[#a2a3a3] w-full h-[56px] border-none mt-[8px] p-[16px]"
                  style={{
                    background: "#FFFFFF",
                    boxShadow: " 4px 4px 8px rgba(0, 0, 0, 0.16)",
                    borderRadius: "8px",
                  }}
                  id="fname"
                />
              </div>
              <div className="flex-1 mb-[20px] md:mb-0">
                <label
                  htmlFor="lname"
                  className="font-[400] font-montserrat text-[16px] leading-[24px] block"
                >
                  Last name
                </label>
                <input
                  {...register("lastName")}
                  required
                  type="text"
                  className="font-[400] text-[14px] font-montserrat text-[#a2a3a3] w-full h-[56px] border-none mt-[8px] p-[16px]"
                  style={{
                    background: "#FFFFFF",
                    boxShadow: " 4px 4px 8px rgba(0, 0, 0, 0.16)",
                    borderRadius: "8px",
                  }}
                  id="lname"
                />
              </div>
            </div>
            <div className="md:flex md:gap-x-[40px]">
              <div className="flex-1 mb-[20px] md:mb-0">
                <label
                  htmlFor="city"
                  className="font-[400] font-montserrat text-[16px] leading-[24px] block"
                >
                  City
                </label>
                <input
                  {...register("city")}
                  required
                  type="text"
                  className="font-[400] text-[14px] font-montserrat text-[#a2a3a3] w-full h-[56px] border-none mt-[8px] p-[16px]"
                  style={{
                    background: "#FFFFFF",
                    boxShadow: " 4px 4px 8px rgba(0, 0, 0, 0.16)",
                    borderRadius: "8px",
                  }}
                  id="city"
                />
              </div>
              <div className="flex-1 mb-[20px] md:mb-0">
                <label
                  htmlFor="address"
                  className="font-[400] font-montserrat text-[16px] leading-[24px] block"
                >
                  Address
                </label>
                <input
                  {...register("address")}
                  required
                  type="text"
                  className="font-[400] text-[14px] font-montserrat text-[#a2a3a3] w-full h-[56px] border-none mt-[8px] p-[16px]"
                  style={{
                    background: "#FFFFFF",
                    boxShadow: " 4px 4px 8px rgba(0, 0, 0, 0.16)",
                    borderRadius: "8px",
                  }}
                  id="address"
                />
              </div>
            </div>
            <div className="md:flex md:gap-x-[40px]">
              <div className="flex-1 mb-[20px] md:mb-0">
                <label
                  htmlFor="country"
                  className="font-[400] font-montserrat text-[16px] leading-[24px] block"
                >
                  Country
                </label>
                <input
                  {...register("country")}
                  required
                  type="text"
                  className="font-[400] text-[14px] font-montserrat text-[#a2a3a3] w-full h-[56px] border-none mt-[8px] p-[16px]"
                  style={{
                    background: "#FFFFFF",
                    boxShadow: " 4px 4px 8px rgba(0, 0, 0, 0.16)",
                    borderRadius: "8px",
                  }}
                  id="country"
                />
              </div>
              <div className="flex-1 mb-[20px] md:mb-0">
                <label
                  htmlFor="state"
                  className="font-[400] font-montserrat text-[16px] leading-[24px] block"
                >
                  State
                </label>
                <input
                  {...register("state")}
                  required
                  type="text"
                  className="font-[400] text-[14px] font-montserrat text-[#a2a3a3] w-full h-[56px] border-none mt-[8px] p-[16px]"
                  style={{
                    background: "#FFFFFF",
                    boxShadow: " 4px 4px 8px rgba(0, 0, 0, 0.16)",
                    borderRadius: "8px",
                  }}
                  id="state"
                />
              </div>
            </div>
            <div className="md:flex gap-x-[40px]">
              <div className="flex-1 mb-[20px] md:mb-0">
                <label
                  htmlFor="age"
                  className="font-[400] font-montserrat text-[16px] leading-[24px] block"
                >
                  Age
                </label>
                <input
                  {...register("age")}
                  required
                  type="number"
                  className="font-[400] text-[14px] font-montserrat text-[#a2a3a3] w-full h-[56px] border-none mt-[8px] p-[16px]"
                  style={{
                    background: "#FFFFFF",
                    boxShadow: " 4px 4px 8px rgba(0, 0, 0, 0.16)",
                    borderRadius: "8px",
                  }}
                  id="age"
                />
              </div>
              <div className="flex-1 mb-[20px] md:mb-0">
                <label
                  htmlFor="gender"
                  className="font-[400] font-montserrat text-[16px] leading-[24px] block"
                >
                  Gender
                </label>
                <select
                  {...register("gender")}
                  required
                  className="font-[400] text-[14px] font-montserrat text-[#a2a3a3] w-full h-[56px] border-none mt-[8px] p-[16px] bg-white"
                  style={{
                    background: "#FFFFFF",
                    boxShadow: " 4px 4px 8px rgba(0, 0, 0, 0.16)",
                    borderRadius: "8px",
                  }}
                  id="gender"
                >
                  <option value="">-- Select Gender --</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
            <div className="md:flex md:gap-x-[40px]">
              <div className="flex-1 mb-[20px] md:mb-0">
                <label
                  htmlFor="isBoarding"
                  className="font-[400] font-montserrat text-[16px] leading-[24px] block"
                >
                  Are in Boarding School?
                </label>
                <select
                  {...register("isInSchool")}
                  required
                  className="font-[400] text-[14px] font-montserrat text-[#a2a3a3] w-full h-[56px] border-none mt-[8px] p-[16px] bg-white"
                  style={{
                    background: "#FFFFFF",
                    boxShadow: " 4px 4px 8px rgba(0, 0, 0, 0.16)",
                    borderRadius: "8px",
                  }}
                  id="isBoarding"
                >
                  <option value="">-- Are you in school --</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
              <div className="flex-1 mb-[20px] md:mb-0">
                <label
                  htmlFor="isBoarding"
                  className="font-[400] font-montserrat text-[16px] leading-[24px] block"
                >
                  Boarding School?
                </label>
                <select
                  {...register("isBoarding")}
                  required
                  className="font-[400] text-[14px] font-montserrat text-[#a2a3a3] w-full h-[56px] border-none mt-[8px] p-[16px] bg-white"
                  style={{
                    background: "#FFFFFF",
                    boxShadow: " 4px 4px 8px rgba(0, 0, 0, 0.16)",
                    borderRadius: "8px",
                  }}
                  id="isBoarding"
                >
                  <option value="">-- Select Boarding --</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
              <div className="flex-1 mb-[20px] md:mb-0">
                <label
                  htmlFor="school"
                  className="font-[400] font-montserrat text-[16px] leading-[24px] block"
                >
                  School
                </label>
                <input
                  {...register("school")}
                  required
                  type="text"
                  className="font-[400] text-[14px] font-montserrat text-[#a2a3a3] w-full h-[56px] border-none mt-[8px] p-[16px]"
                  style={{
                    background: "#FFFFFF",
                    boxShadow: " 4px 4px 8px rgba(0, 0, 0, 0.16)",
                    borderRadius: "8px",
                  }}
                  id="school"
                />
              </div>
            </div>
            <div className="md:flex md:gap-x-[40px]">
              <div className="flex-1 mb-[20px] md:mb-0">
                <label
                  htmlFor="schoolAddress"
                  className="font-[400] font-montserrat text-[16px] leading-[24px] block"
                >
                  School Address
                </label>
                <input
                  {...register("schoolAddress")}
                  required
                  type="text"
                  className="font-[400] text-[14px] font-montserrat text-[#a2a3a3] w-full h-[56px] border-none mt-[8px] p-[16px]"
                  style={{
                    background: "#FFFFFF",
                    boxShadow: " 4px 4px 8px rgba(0, 0, 0, 0.16)",
                    borderRadius: "8px",
                  }}
                  id="schoolAddress"
                />
              </div>
              <div className="flex-1 mb-[20px] md:mb-0">
                <label
                  htmlFor="parentName"
                  className="font-[400] font-montserrat text-[16px] leading-[24px] block"
                >
                  Parent/Guardian Name
                </label>
                <input
                  {...register("parentName")}
                  required
                  type="text"
                  className="font-[400] text-[14px] font-montserrat text-[#a2a3a3] w-full h-[56px] border-none mt-[8px] p-[16px]"
                  style={{
                    background: "#FFFFFF",
                    boxShadow: " 4px 4px 8px rgba(0, 0, 0, 0.16)",
                    borderRadius: "8px",
                  }}
                  id="parentName"
                />
              </div>
            </div>
            <div className="md:flex md:gap-x-[40px]">
              <div className="flex-1 mb-[20px] md:mb-0">
                <label
                  htmlFor="email"
                  className="font-[400] font-montserrat text-[16px] leading-[24px] block"
                >
                  Email Address
                </label>
                <input
                  {...register("email")}
                  required
                  type="email"
                  className="font-[400] text-[14px] font-montserrat text-[#a2a3a3] w-full h-[56px] border-none mt-[8px] p-[16px]"
                  style={{
                    background: "#FFFFFF",
                    boxShadow: " 4px 4px 8px rgba(0, 0, 0, 0.16)",
                    borderRadius: "8px",
                  }}
                  id="email"
                />
              </div>
              <div className="flex-1 mb-[20px] md:mb-0">
                <label
                  htmlFor="phoneNumber"
                  className="font-[400] font-montserrat text-[16px] leading-[24px] block"
                >
                  Phone Number
                </label>
                <input
                  {...register("phoneNumber")}
                  required
                  type="tel"
                  className="font-[400] text-[14px] font-montserrat text-[#a2a3a3] w-full h-[56px] border-none mt-[8px] p-[16px]"
                  style={{
                    background: "#FFFFFF",
                    boxShadow: " 4px 4px 8px rgba(0, 0, 0, 0.16)",
                    borderRadius: "8px",
                  }}
                  id="phoneNumber"
                />
              </div>
            </div>

            <div className="flex justify-center mt-[32px]">
              <button
                type="submit"
                className="bg-primary w-[188px] h-[48px] rounded-[8px] text-white font-montserrat font-[500] text-[16px] leading-[24px]"
              >
                {isPending ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>
        </section>
      </div>
      <WhatsappButton />
      <Footer />
    </>
  );
};

export default Registration;
