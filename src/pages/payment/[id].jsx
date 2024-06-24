import React, { useState } from "react";
import Footer from "../../../components/Footer";
import Nav from "../../../components/Nav";
import Swal from "sweetalert2";
import "animate.css";
import Animation from "../../../components/Animation";
import { usePaystackPayment } from "react-paystack";
import WhatsappButton from "../../../components/WhatsappButton";
import { useCreatePayment, useGetApplication } from "../../hooks/useApi";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Toaster, toast } from "sonner";

const pk = process.env.NEXT_PUBLIC_PAYSTACK_KEY;

const SuccessMessage = () => (
  <div className="text-center mt-8">
    <h2 className="text-2xl font-bold text-blue-600 mb-4">
      🎉 Payment Successful! 🎉
    </h2>
    <p className="text-lg">
      Thank you for completing your KCCA Registration payment for the{" "}
      {new Date().getFullYear().toString()} Cohort.
    </p>
    <p className="text-lg mt-4">
      Please check your email for further instructions and details about the
      program.
    </p>
  </div>
);

const Payment = () => {
  const router = useRouter();
  const registrationId = router.query.id;
  const { data, isLoading, isSuccess } = useGetApplication(registrationId);
  const { mutate, isPending, isSuccess: submitted } = useCreatePayment();
  const [paymentExists, setPaymentExists] = useState(false);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  let filled = false;
  const [ticket, setTicket] = useState(0);
  const [state, setState] = useState([
    {
      fullName: "",
      email: "",
      id: "",
      amount: "",
    },
  ]);

  useEffect(() => {
    if (isSuccess) {
      const registration = data?.data?.data; // Access the nested data
      if (registration) {
        // Check if registration exists
        setState({
          fullName: `${registration.generalInformation.firstName} ${registration.generalInformation.lastName}`,
          email: registration.generalInformation.emailAddress,
          id: registration._id,
          amount: registration.track === "KCCA Prime" ? 6025000 : 1015000,
        });
      }
    }
  }, [isSuccess, data?.data.data]);

  if (state.fullName && state.email && state.regId) {
    filled = true;
  }

  const config = {
    reference: new Date().getTime().toString(),
    metdata: {
      name: state.fullName,
      email: state.email,
      regId: state.regId,
    },
    email: state.email,
    amount: state.amount,
    publicKey: pk,
  };

  const handlePaymentErrorAlert = (message) => {
    Swal.fire({
      title: "Error",
      text: "Payment not successfull kindly try again",
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
    });
  };

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const onSuccess = (reference) => {
    const registration = data?.data?.data;

    if (registration.paymentId) {
      setPaymentExists(true);
      toast.error("Payment already exists", {
        duration: 3000,
        position: "top-center",
        style: {
          background: "red",
          color: "white",
        },
      });
      return;
    }

    try {
      mutate(
        {
          id: registrationId,
          cohort: new Date().getFullYear().toString(),
          track: registration.track,
          amount:
            registration.track === "KCCA Prime"
              ? (6025000 / 100).toString()
              : (1025000 / 100).toString(),
        },
        {
          onSuccess: () => {
            setShowSuccessMessage(true);
            toast.success("Payment Successful!", {
              duration: 5000,
              position: "top-center",
              style: {
                background: "green",
                color: "white",
              },
            });
          },
          onError: (error) => {
            console.error("Error processing payment:", error);
            toast.error("Error processing payment. Please try again.", {
              duration: 5000,
              position: "top-center",
              style: {
                background: "red",
                color: "white",
              },
            });
          },
        }
      );
    } catch (e) {
      console.log(e);
    }
  };

  const onClose = () => {
    if (paymentExists) {
      handlePaymentErrorAlert("Payment already exists"); // Show the error alert if payment exists
    }
  };

  // you can call this function anything
  const PaystackHookExample = () => {
    const initializePayment = usePaystackPayment(config);
    return (
      <div>
        <button
          type="button"
          onClick={() => {
            initializePayment(onSuccess, onClose);
          }}
          className="h-[54px] font-[600] text-[20px] md:text-[24px] text-white w-full bg-primary hover:bg-primary mt-[36px] rounded-md"
        >
          Pay Now
        </button>
      </div>
    );
  };

  const handleAlert = () => {
    Swal.fire({
      title: "THANK YOU!",
      text: "For filling out this form. We will contact you via mail shortly.",
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
    });
  };

  return (
    <>
      <Toaster />
      <Nav />
      {isLoading || !registrationId ? (
        <div className="flex items-center justify-center h-[calc(100vh-205)]">
          <svg
            className="animate-spin -ml-1 mr-3 h-10 w-10 mx-auto my-auto text-black"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx={12}
              cy={12}
              r={10}
              stroke="currentColor"
              strokeWidth={4}
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        </div>
      ) : (
        <Animation>
          <div className="p-[20px] md:p-[60px] md:px-[80px]">
            {showSuccessMessage ? (
              <SuccessMessage />
            ) : (
              <>
                <h2 className="md:max-w-[1164px] font-[600] text-[20px] md:text-[40px]">
                  Hello, {data?.data?.data?.generalInformation.firstName}{" "}
                  {data?.data?.data?.generalInformation.lastName}
                </h2>
                <p className="mt-2 mb-1 text-lg">
                  Pay 10,000 below to complete your KCCA Registration in the{" "}
                  {new Date().getFullYear().toString()} Cohort
                </p>
                <div className="w-[96px] h-[5px] mt-[8px] mb-[32px] bg-primary"></div>
                <div className="md:flex md:gap-[122px]">
                  <div className="form-inp mt-[24px] md:w-[616px]">
                    <p className="">Track</p>
                    <h3 className="font-[400] text-[20px]  md:text-[24px]">
                      {data?.data?.data?.track}
                    </h3>
                  </div>
                  <div className="form-inp mt-[24px] md:w-[616px]">
                    <p>Email Address</p>
                    <h3 className="font-[400] text-[20px]  md:text-[24px]">
                      {data?.data?.data?.generalInformation.emailAddress}
                    </h3>
                  </div>
                </div>
                <div className="w-4/5 md:w-[332px] mx-auto md:mx-0">
                  <PaystackHookExample />
                </div>
              </>
            )}
          </div>
        </Animation>
      )}
      <div className="relative">
        <WhatsappButton />
      </div>
      <Footer />
    </>
  );
};

export default Payment;
