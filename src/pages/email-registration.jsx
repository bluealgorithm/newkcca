import { useRouter } from 'next/router';
import React, { useState } from 'react';

const Register = () => {
	const [email, setEmail] = useState('');
	const [clicked, setClicked] = useState(false);
	const router = useRouter();
	const createInfo = async () => {
		try {
			let myHeaders = new Headers();
			myHeaders.append('Content-Type', 'application/json');
			let response = await fetch(
				`https://kcca-api.onrender.com/v1/students`,
				{
					method: 'POST',
					headers: myHeaders,
					body: JSON.stringify({
						email: email,
					}),
				}
			);
			let data = await response.json();

			if (response.ok) {
				console.log('POST request successful');
				setEmail('');
				setClicked(false);
				router.push('/verified/verified');
			} else {
				console.error('Error making POST request:', response.status);
				handleFormErrorAlert(data.error);
				setClicked(false);
			}
		} catch (err) {
			console.log(err);
			router.push('/registration');
		}
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		setClicked(true);
		alert(
			"Welcome! We're thrilled to have you on board. 🎉 To complete your registration and unlock all the amazing features, please check your email inbox. We've just sent you a verification link. Simply click on the link to validate your email address and continue with the registration process. We can't wait to see you onboard!"
		);
		// createInfo();
	};
	return (
		<div
			className='h-screen w-screen relative bg- bg-primaryPurple'
			// style={{ backgroundColor: 'rgba(21, 21, 21, 0.5)' }}
		>
			<div className='absolute top-[35px] md:top-[15%] left-[10px] md:left-[25%] right-[10px] md:right-[25%] bottom-[35px] md:bottom-[15%] bg-white flex flex-col justify-center px-[20px] md:px-[60px] rounded-[4px] border py-[30px]'>
				<div className=''>
					<form onSubmit={handleSubmit}>
						<div className=' mb-[20px] w-full'>
							<label
								htmlFor='email'
								className='font-[400] font-montserrat text-[16px] leading-[24px] block'
							>
								Email Address
							</label>
							<input
								required
								onChange={(e) => setEmail(e.target.value)}
								value={email}
								name='email'
								type='email'
								// onBlur={() => handleAlert()}
								className='font-[400] text-[14px] font-montserrat text-[#a2a3a3] w-full h-[56px] border-none mt-[8px] p-[16px]'
								style={{
									background: '#FFFFFF',
									boxShadow:
										' 4px 4px 8px rgba(0, 0, 0, 0.16)',
									borderRadius: '8px',
								}}
								id='email'
								placeholder='Enter Your email Address'
							/>
						</div>
						<div className=''>
							<button
								type='submit'
								className='font-[600] text-[16px] font-montserrat text-white bg-primaryPurple hover:bg-primary p-2 w-full rounded-[4px]'
								// onClick={() => show(false)}
							>
								Submit
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Register;
