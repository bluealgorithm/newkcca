import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Head from 'next/head';
import Link from 'next/link';
import { ImCheckmark } from 'react-icons/im';
const Verified = () => {
	const router = useRouter();
	const { activationToken } = router.query;
	const [status, setStatus] = useState('');
	const [activationStatus, setActivationStatus] = useState('');

	useEffect(() => {
		const activateUser = async () => {
			// if (!activationToken) {
			//   setStatus("Activation failed. Invalid activation code.");
			//   return;
			// }

			// const activationTokenRegex = /^[a-zA-Z0-9]{10}$/;
			// if (!activationTokenRegex.test(activationToken)) {
			// 	setStatus('Activation failed. Invalid activation code.');
			// 	return;
			// }

			try {
				const response = await axios.post(
					'/api/users/activate',
					{
						activationToken: activationToken,
					},
					{ headers: { 'Content-Type': 'application/json' } }
				);
				console.log(response?.data);
				if (response?.data?.success === true) {
					setStatus(response.data.message);
					setShowAlert(true);
				}
				setActivationStatus('success');
			} catch (error) {
				setStatus(error?.response?.data?.message);
				// setStatus(
				// 	'Activation failed. Please check your activation link and try again.'
				// );
				setActivationStatus('error');
			}
		};
		activateUser();
	}, [activationToken]);

	const handleRedirect = () => {
		router.push('/hackathon');
	};
	return (
		<>
			<Head>
				<title>KCCA | Veirified </title>
				<meta name='description' content='Verify Email' />
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<div className='bg-primaryBlue h-[100vh] bg-cover z-10 relative '>
				<div className='h-full flex items-center'>
					<div className='relative z-10 w-4/5 md:w-[408px] h-[374px] bg-white shadow-sm mx-auto flex flex-col items-center justify-center py-4 px-[12px] md:px-[52px] rounded-[15px]'>
						<div
							className='w-[60px] h-[60px] p-5 bg-primaryGreen '
							style={{ borderRadius: '50%' }}
						>
							<ImCheckmark size={20} className='text-white' />
						</div>
						{/* <div className='absolute top-[35px] md:top-[15%] left-[10px] md:left-[25%] right-[10px] md:right-[25%] bottom-[35px] md:bottom-[15%] bg-white flex flex-col justify-center px-[20px] md:px-[60px] rounded-[4px] border py-[30px]'> */}
						<p className='font-[500] font-montserrat text-[24px] leading-[32px] text-center'>
							THANK YOU!
						</p>
						<p className='font-[500] font-montserrat text-[16px] leading-[24px] text-center text-[#535252] mb-[20px] md:mb-[40px] mt-[20px] md:mt-[30px]'>
							We appreciate your effort in filling out the
							registration form. Our screening will come in two
							categories:
						</p>
						<ul className='ml-[10px]'>
							<li className='font-[500] font-montserrat text-[16px] leading-[24px] list-disc text-[#535252]'>
								Questionaire{' '}
							</li>
							<li className='font-[500] font-montserrat text-[16px] leading-[24px] list-disc text-[#535252] mt-[16px]'>
								Interview
							</li>
						</ul>
						<p className='font-[500] font-montserrat text-[16px] leading-[24px] mt-[16px] mb-[40px]'>
							An email will be sent containing your screening
							details.
						</p>
						<div className=''>
							<button
								type='submit'
								className='font-[600] text-[16px] font-montserrat text-white bg-primary p-2 w-full rounded-[4px]'
								onClick={handleRedirect}
							>
								OK
							</button>
						</div>
						{/* </div> */}
						<hr />
					</div>
				</div>
			</div>
		</>
	);
};

export default Verified;
