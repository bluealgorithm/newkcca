import React, { useState } from 'react';
import Footer from '../../components/Footer';
import Nav from '../../components/Nav';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import 'animate.css';
import { url } from '../../url';
import Animation from '../../components/Animation';
// import Modal from '../components/Modal';
import { usePaystackPayment } from 'react-paystack';
import WhatsappButton from '../../components/WhatsappButton';
import { MdArrowDownward } from 'react-icons/md';

const pk = process.env.NEXT_PUBLIC_PAYSTACK_KEY;
const Payment = () => {
	React.useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	let filled = false;
	const [ticket, setTicket] = useState(0);
	const [state, setState] = useState([
		{
			fullName: '',
			email: '',
			regId: '',
		},
	]);
	if (state.fullName && state.email && state.regId) {
		filled = true;
	}
	// const PaystackProps = {
	//   email: state.email,
	//   amount: Number(state.reservation),
	//   metadata: {
	//     name: state.name,
	//     phone: state.number,
	//   },
	//   publicKey: pk,
	//   text: "Pay Now",
	//   // onSuccess: () => createInfo(),
	//   onSuccess: () => handleAlert(),
	//   onClose: () => handlePaymentErrorAlert(),
	// };

	const config = {
		metdata: {
			name: state.fullName,
			email: state.email,
			regId: state.regId,
		},
		email: state.email,
		amount: 1025000,
		publicKey: pk,
	};

	const MySwal = withReactContent(Swal);
	const handlePaymentErrorAlert = () => {
		Swal.fire({
			title: 'Error',
			text: 'Payment not successfull kindly try again',
			showClass: {
				popup: 'animate__animated animate__fadeInDown',
			},
			hideClass: {
				popup: 'animate__animated animate__fadeOutUp',
			},
		});
	};
	const handleFormErrorAlert = () => {
		Swal.fire({
			title: 'Error',
			text: 'Form Not Submited',
			showClass: {
				popup: 'animate__animated animate__fadeInDown',
			},
			hideClass: {
				popup: 'animate__animated animate__fadeOutUp',
			},
		});
	};
	const onSuccess = (reference) => {
		createInfo();
	};

	const onClose = () => {
		handlePaymentErrorAlert();
	};
	// you can call this function anything
	const PaystackHookExample = () => {
		const initializePayment = usePaystackPayment(config);
		return (
			<div>
				<button
					type='button'
					onClick={() => {
						initializePayment(onSuccess, onClose);
					}}
					className='h-[56px] font-[600] text-[20px] md:text-[24px] text-black w-full bg-primary hover:bg-primary mt-[36px] rounded-full'
				>
					Pay Now
				</button>
			</div>
		);
	};

	const handleAlert = () => {
		Swal.fire({
			title: 'THANK YOU!',
			text: 'For filling out this form. We will contact you via mail shortly.',
			showClass: {
				popup: 'animate__animated animate__fadeInDown',
			},
			hideClass: {
				popup: 'animate__animated animate__fadeOutUp',
			},
		});
	};
	const handleChange = (evt) => {
		const value =
			evt.target.type === 'checkbox'
				? evt.target.checked
				: evt.target.value;
		setState({
			...state,
			[evt.target.name]: value,
		});
	};
	// if (state.mode === "Virtual") {
	//   setTicket(state.reservation);
	// }

	const createInfo = async () => {
		let myHeaders = new Headers();
		myHeaders.append('Content-Type', 'application/json');
		let response = await fetch(`${url}payment`, {
			method: 'post',
			headers: myHeaders,
			body: JSON.stringify({
				fullName: state.fullName,
				emailAddress: state.email,
				regId: state.regId,
				amount: state.amount,
			}),
		});
		if (response.status === 400) handleFormErrorAlert();
		else {
			setState('');
			Array.from(document.querySelectorAll('input')).forEach(
				(input) => (input.value = '')
			);
			handleAlert();
		}
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		createInfo();
	};
	return (
		<>
			<Nav />
			<Animation>
				<div className='p-[20px] md:p-[60px] md:px-[80px]'>
					<h2 className='md:max-w-[1164px] font-[600] text-[20px] md:text-[40px]'>
						Hello, Full Name
					</h2>
					<p className='mt-2 mb-1 text-lg'>Pay 10,000 below to complete your KCCA Registration in the {new Date().getFullYear().toString()} Cohort</p>
					<div className='w-[96px] h-[5px] mt-[8px] mb-[32px] bg-primary'></div>
						<div className='md:flex md:gap-[122px]'>
							<div className='form-inp mt-[24px] md:w-[616px]'>
								<p className=''>Full Name</p>
								<h3
									htmlFor='fullName'
									className='font-[400] text-[20px]  md:text-[24px]'
								>
									Akachukwu Egboluche
								</h3>
							</div>
							<div className='form-inp mt-[24px] md:w-[616px]'>
								<p>Email Address</p>
								<h3
									htmlFor='email'
									className='font-[400] text-[20px]  md:text-[24px]'
								>
									egbolucheakachukwu@gmail.com
								</h3>
							</div>
						</div>
						<div className='w-4/5 md:w-[332px] mx-auto md:mx-0'>
							{filled ? (
								<PaystackHookExample />
							) : (
								<button
									// onClick={handleSubmit}
									type='submit'
									className='h-[48px] font-[600] text-[16px] md:text-[24px] text-white w-full bg-green-500 hover:bg-primary mt-[36px] rounded-md'
								>
									Pay Now
								</button>
							)}
						</div>
					{/* <div className='flex flex-col justify-center items-center mt-[70px]'>
						<MdArrowDownward
							size={40}
							className='animate-bounce text-primary'
						/>
						<h3 className='text-italic font-bold text-xl md:text-2xl text-center'>
							To get a Table of Ten kindly contact +2348131983791,
							or +2347013411186
						</h3>
					</div> */}
				</div>
			</Animation>
			<div className='relative'>
				<WhatsappButton />
			</div>
			<Footer />
		</>
	);
};

export default Payment;
