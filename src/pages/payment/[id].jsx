import React, { useState } from "react";
import Footer from "../../../components/Footer";
import Nav from "../../../components/Nav";
import Swal from "sweetalert2";
import "animate.css";
import Animation from "../../../components/Animation";
import { usePaystackPayment } from "react-paystack";
import WhatsappButton from "../../../components/WhatsappButton";
import { useCreatePayment, useGetRegistration } from "../../hooks/useApi";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Toaster, toast } from "sonner";

const pk = process.env.NEXT_PUBLIC_PAYSTACK_KEY;
const Payment = () => {
  const router = useRouter();
  const registrationId = router.query.id
  const { data, isLoading, isSuccess } = useGetRegistration(registrationId);
  const { mutate, isPending, isSuccess: submitted } = useCreatePayment();
  const [paymentExists, setPaymentExists] = useState(false)


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
      amount: ""
    },
  ]);

  useEffect(() => {
    if (isSuccess) {
      const registration = data?.data?.data; // Access the nested data
      if (registration) { // Check if registration exists
        setState({
          fullName: `${registration.firstName} ${registration.lastName}`,
          email: registration.emailAddress,
          id: registration._id,
          amount: registration.track === "KCCA Prime" ? (6025000 / 100).toString() : (20000 / 100).toString()
        });
      }
    }
  }, [isSuccess, data?.data.data]);

  if (state.fullName && state.email && state.regId) {
    filled = true;
  }

  const config = {
    reference: (new Date()).getTime().toString(),
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


  const onSuccess = (reference) => {
    const registration = data?.data?.data;

    if (registration.paymentId) {
      setPaymentExists(true); // Set the state variable to indicate a payment already exists
      toast.error("Payment already exists", {
        duration: 3000,
        position: 'top-center',
        style: {
          background: 'red',
          color: 'white',
        },
      });
      return; // Return early to prevent creating a new payment
    }


    try {
      mutate({
        id: registrationId,
        cohort: new Date().getFullYear().toString(),
        track: registration.track,
        amount: registration.track === "KCCA Prime" ? (5025000 / 100).toString() : (20000 / 100).toString()
      });

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
          className="h-[56px] font-[600] text-[20px] md:text-[24px] text-black w-full bg-primary hover:bg-primary mt-[36px] rounded-full"
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

  return isLoading || !registrationId ? "Loading" : (
    <>
      <Toaster />
      <Nav />
      <Animation>
        {/* Please do not waste your time complaining or tryint to resolve this. It just works
          Also we were in a hurry so dont judge, we write better code
        */}
        <div className="p-[20px] md:p-[60px] md:px-[80px]">
          <h2 className="md:max-w-[1164px] font-[600] text-[20px] md:text-[40px]">
            Hello, {data?.data?.data?.firstName} {data?.data?.data?.lastName}
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
                {data?.data?.data?.emailAddress}
              </h3>
            </div>
          </div>
          <div className="w-4/5 md:w-[332px] mx-auto md:mx-0">
            <PaystackHookExample />
          </div>
        </div>
      </Animation>
      <div className="relative">
        <WhatsappButton />
      </div>
      <Footer />
    </>
  );
};

export default Payment;
