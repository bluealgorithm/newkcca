import React, { useState } from 'react';
import Footer from '../../components/Footer';
import Nav from '../../components/Nav';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import 'animate.css';
import { url } from '../../url';
import Animation from '../../components/Animation';
import { usePaystackPayment } from 'react-paystack';
import WhatsappButton from '../../components/WhatsappButton';
import { MdArrowDownward } from 'react-icons/md';

const pk = process.env.NEXT_PUBLIC_PAYSTACK_KEY;
const ReturninigPayment = () => {
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
		regId: state.regId,
		amount: 517500,
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
				fullName: fullName,
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
					<h1 className='md:max-w-[1164px] font-[600] text-[20px] md:text-[40px] uppercase'>
						Pay an annual club fee of N5,000
					</h1>
					<div className='w-[96px] h-[5px] mt-[8px] mb-[32px] bg-primary'></div>
					{/* <h3 className='mb-[32px] font-[600] text-[20px] md:text-[24px] leading-6'>
						Pay an annual club fee of N10,000
					</h3> */}
					<div className='flex flex-col justify-center items-center'>
						<MdArrowDownward
							size={40}
							className='animate-bounce text-primary'
						/>
						<p className='mb-[8px] font-[600] text-[18px] leading-6 text-center'>
							Make sure you input the right Registration ID which
							was sent to your email after registration.
						</p>
					</div>
					{/* <p className='font-[400] text-[16px] leading-6'>
						KINDLY INPUT YOUR PERSONAL INFO
					</p> */}
					<form>
						<div className='md:flex md:gap-[122px]'>
							<div className='form-inp mt-[24px] md:w-[616px]'>
								<label
									htmlFor='fullName'
									className='font-[400] text-[20px]  md:text-[24px]'
								>
									Full Name
									<span className='text-red-500'> *</span>
								</label>
								<input
									required
									type='text'
									id='fullName'
									className='w-full h-[56px] border-none mt-[8px] p-[16px]'
									style={{
										background: '#FFFFFF',
										boxShadow:
											' 4px 4px 8px rgba(0, 0, 0, 0.16)',
										borderRadius: '8px',
									}}
									placeholder='full Name'
									name='fullName'
									value={state.fullName}
									onChange={handleChange}
								/>
							</div>
							<div className='form-inp mt-[24px] md:w-[616px]'>
								<label
									htmlFor='email'
									className='font-[400] text-[20px]  md:text-[24px]'
								>
									Email Address{' '}
									<span className='text-red-500'> *</span>
								</label>
								<input
									required
									type='text'
									id='email'
									className='w-full h-[56px] border-none mt-[8px] p-[16px]'
									style={{
										background: '#FFFFFF',
										boxShadow:
											' 4px 4px 8px rgba(0, 0, 0, 0.16)',
										borderRadius: '8px',
									}}
									placeholder='email'
									name='email'
									value={state.email}
									onChange={handleChange}
								/>
							</div>
						</div>
						{/* END OF FORM ROW */}
						<div className='md:flex md:gap-[122px]'>
							<div className='form-inp mt-[24px] md:w-[530px]'>
								<label
									htmlFor='regId'
									className='font-[400] text-[20px]  md:text-[24px]'
								>
									Registration ID
									<span className='text-red-500'> *</span>
								</label>
								<input
									required
									type='number'
									id='regId'
									className='w-full h-[56px] border-none mt-[8px] p-[16px]'
									style={{
										background: '#FFFFFF',
										boxShadow:
											' 4px 4px 8px rgba(0, 0, 0, 0.16)',
										borderRadius: '8px',
									}}
									placeholder='regId'
									name='regId'
									value={state.regId}
									onChange={handleChange}
								/>
							</div>
						</div>
						<div className='w-4/5 md:w-[332px] mx-auto md:mx-0'>
							{filled ? (
								<PaystackHookExample />
							) : (
								<button
									// onClick={handleSubmit}
									type='submit'
									className='h-[56px] font-[600] text-[16px] md:text-[24px] text-white w-full bg-green-500 hover:bg-primary mt-[36px] rounded-full'
								>
									fill the required info
								</button>
							)}
						</div>
					</form>
				</div>
			</Animation>
			<div className='relative'>
				<WhatsappButton />
			</div>
			<Footer />
		</>
	);
};

export default ReturninigPayment;
