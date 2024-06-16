import React, { useState, useEffect, useRef } from 'react';
import 'animate.css';
import { useRouter } from 'next/router';
import Select from 'react-select';
import Swal from 'sweetalert2';
import Nav from '../../../components/Nav';
import WhatsappButton from '../../../components/WhatsappButton';
import Footer from '../../../components/Footer';
const API_URL = 'https://restfulcountries.com/api/v1/countries';
const BEARER_TOKEN = process.env.NEXT_PUBLIC_COUNTRY_FETCH_TOKEN;

// import kcca_agreement from '../kcca_agreement.pdf';
const Registration = () => {
	const router = useRouter();
	const [clicked, setClicked] = useState(false);
	const [state, setState] = useState({
		firstName: '',
		lastName: '',
		city: '',
		state: '',
		address: '',
		country: '',
		cohort: '',
		age: '',
		gender: '',
		isStudent: '',
		isBoarding: '',
		schoolAddress: '',
		schoolName: '',
		parentName: '',
		email: '',
		phoneNumber: '',
		screeningMode: 'online',
		agreement: false,
	});
	const [countries, setCountries] = useState([]);
	const [stateOfResidence, setStateOfResidence] = useState([]);
	useEffect(() => {
		// Function to fetch list of countries
		const fetchData = async () => {
			try {
				const response = await fetch(API_URL, {
					headers: {
						Authorization: `Bearer ${BEARER_TOKEN}`,
					},
				});

				if (!response.ok) {
					throw new Error('Network response was not ok');
				}

				const data = await response.json();
				setCountries(data.data);
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		};

		fetchData();
	}, []);
	useEffect(() => {
		// Function to fetch list of State based on the country Selected
		const fetchData = async () => {
			try {
				const response = await fetch(
					`${API_URL}/${state.country}/states`,
					{
						headers: {
							Authorization: `Bearer ${BEARER_TOKEN}`,
						},
					}
				);

				if (!response.ok) {
					throw new Error('Network response was not ok');
				}

				const data = await response.json();
				setStateOfResidence(data.data);
			} catch (error) {
				// console.error('Error fetching data:', error);
			}
		};
		if (state.country) fetchData();
	}, [state.country]);
	const [showMode, setShowMode] = useState(false);
	useEffect(() => {
		if (
			(state.city != '' && state.city == 'Jos') ||
			state.city == 'jos' ||
			state.city == 'JOS'
		) {
			setShowMode(true);
		}
	}, [state.city]);

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

	let isFormFilled = false;
	if (
		state.firstName &&
		state.lastName &&
		state.city &&
		state.state &&
		state.address &&
		state.country &&
		state.cohort &&
		state.age &&
		state.gender &&
		state.isStudent &&
		state.isBoarding &&
		state.schoolAddress &&
		state.schoolName &&
		state.parentName &&
		state.email &&
		state.phoneNumber
	) {
		isFormFilled = true;
	}

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
						firstName: state.firstName,
						lastName: state.lastName,
						city: state.city,
						address: state.address,
						cohort: state.cohort,
						age: Number(state.age),
						isInSchool: state.isStudent == 'yes' ? true : false,
						isBoarding: state.isBoarding == 'yes' ? true : false,
						school: state.schoolName,
						schoolAddress: state.schoolAddress,
						parentName: state.parentName,
						emailAddress: state.email,
						phoneNumber: state.phoneNumber,
						state: state.state,
						country: state.country,
						gender: state.gender,
						screeningMode: state.screeningMode,
					}),
				}
			);
			let data = await response.json();

			if (response.ok) {
				// console.log('POST request successful');
				setState({});
				Array.from(document.querySelectorAll('input')).forEach(
					(input) => (input.value = '')
				);
				setClicked(false);
				// router.push('/verified/verified');
			} else {
				// console.error('Error making POST request:', response.status);
				handleFormErrorAlert(data.error);
				setClicked(false);
			}
		} catch (err) {
			// console.log(err);
			// router.push('/registration');
		}
	};
	const handleFormErrorAlert = (text) => {
		Swal.fire({
			title: 'Error',
			text: 'Form Not Submited, \n' + text,
			showClass: {
				popup: 'animate__animated animate__fadeInDown',
			},
			hideClass: {
				popup: 'animate__animated animate__fadeOutUp',
			},
		});
		setClicked(false);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setClicked(true);
		createInfo();
	};

	useEffect(() => {
		const timer = setTimeout(() => {
			alert(
				'Kindly use correct email address because you will have to confirm it before your registration can be validated'
			);
		}, 3000);
		return () => {
			clearTimeout(timer);
		};
	}, []);

	return (
		<>
			<Nav />
			<div className=' bg-white pb-[40px] md:pb-[160px] text-black'>
				<section className='w-[90%] md:w-[1104px] mt-[30px] md:mt-[72px] p-[10px] md:p-[40px] mx-auto flex flex-col gap-[15px] md:gap-[40px] justify-center border border-primary pb-4'>
					<h3 className='font-[500] font-montserrat text-[24px] leading-[32px] text-black text-center'>
						Registration Form
					</h3>
					<p className='font-[400] font-montserrat text-[16px] leading-[24px] text-[#a2a3a3] text-center'>
						paymout the form to register for the training.
					</p>
					<h3 className='font-[500] font-montserrat text-[24px] leading-[32px] text-black text-left'>
						Personal Information:
					</h3>
					<div className='md:flex gap-x-[40px]'>
						<div className='flex-1 mb-[20px] md:mb-0'>
							<label
								htmlFor='fname'
								className='font-[400] font-montserrat text-[16px] leading-[24px] block'
							>
								First name
							</label>
							<input
								required
								onChange={handleChange}
								value={state.firstName}
								name='firstName'
								type='text'
								className='font-[400] text-[14px] font-montserrat text-[#a2a3a3] w-full h-[56px] border-none mt-[8px] p-[16px]'
								style={{
									background: '#FFFFFF',
									boxShadow:
										' 4px 4px 8px rgba(0, 0, 0, 0.16)',
									borderRadius: '8px',
								}}
								id='fname'
							/>
						</div>
						<div className='flex-1 mb-[20px] md:mb-0'>
							<label
								htmlFor='lname'
								className='font-[400] font-montserrat text-[16px] leading-[24px] block'
							>
								Last name
							</label>
							<input
								required
								onChange={handleChange}
								value={state.lastName}
								name='lastName'
								type='text'
								className='font-[400] text-[14px] font-montserrat text-[#a2a3a3] w-full h-[56px] border-none mt-[8px] p-[16px]'
								style={{
									background: '#FFFFFF',
									boxShadow:
										' 4px 4px 8px rgba(0, 0, 0, 0.16)',
									borderRadius: '8px',
								}}
								id='lname'
							/>
						</div>
					</div>
					<div className='md:flex md:gap-x-[40px]'>
						<div className='flex-1 mb-[20px] md:mb-0'>
							<label
								htmlFor='city'
								className='font-[400] font-montserrat text-[16px] leading-[24px] block'
							>
								City
							</label>
							<input
								required
								onChange={handleChange}
								value={state.city}
								name='city'
								type='text'
								className='font-[400] text-[14px] font-montserrat text-[#a2a3a3] w-full h-[56px] border-none mt-[8px] p-[16px]'
								style={{
									background: '#FFFFFF',
									boxShadow:
										' 4px 4px 8px rgba(0, 0, 0, 0.16)',
									borderRadius: '8px',
								}}
								id='city'
							/>
						</div>
						<div className='flex-1 mb-[20px] md:mb-0'>
							<label
								htmlFor='address'
								className='font-[400] font-montserrat text-[16px] leading-[24px] block'
							>
								Address
							</label>
							<input
								required
								onChange={handleChange}
								value={state.address}
								type='text'
								name='address'
								className='font-[400] text-[14px] font-montserrat text-[#a2a3a3] w-full h-[56px] border-none mt-[8px] p-[16px]'
								style={{
									background: '#FFFFFF',
									boxShadow:
										' 4px 4px 8px rgba(0, 0, 0, 0.16)',
									borderRadius: '8px',
								}}
								id='address'
							/>
						</div>
					</div>
					<div className='md:flex md:gap-x-[40px]'>
						<div className='flex-1 mb-[20px] md:mb-0'>
							<label
								htmlFor='country'
								className='font-[400] font-montserrat text-[16px] leading-[24px] block'
							>
								Country
							</label>
							{/* <select
								value={state.country}
								name='country'
								onChange={handleChange}
								className='font-[400] text-[14px] font-montserrat text-[#a2a3a3] w-full h-[56px] border-none mt-[8px] p-[16px]'
								style={{
									background: '#FFFFFF',
									boxShadow:
										' 4px 4px 8px rgba(0, 0, 0, 0.16)',
									borderRadius: '8px',
								}}
								id='country'
							>
								{countries?.map((country) => (
									<option
										key={country.name}
										value={country.name}
									>
										{country.name}
									</option>
								))}
							</select> */}
							<input
								required
								onChange={handleChange}
								value={state.country}
								type='text'
								name='country'
								className='font-[400] text-[14px] font-montserrat text-[#a2a3a3] w-full h-[56px] border-none mt-[8px] p-[16px]'
								style={{
									background: '#FFFFFF',
									boxShadow:
										' 4px 4px 8px rgba(0, 0, 0, 0.16)',
									borderRadius: '8px',
								}}
								id='country'
								list='countryList'
							/>
							{/* datalist for Country */}
							<datalist id='countryList'>
								{countries?.map((country) => (
									<option
										key={country.name}
										value={country.name}
									>
										{country.name}
									</option>
								))}
							</datalist>
						</div>
						<div className='flex-1 mb-[20px] md:mb-0'>
							<label
								htmlFor='state'
								className='font-[400] font-montserrat text-[16px] leading-[24px] block'
							>
								State
							</label>
							{state.country && (
								<select
									value={state.state}
									name='state'
									onChange={handleChange}
									className='font-[400] text-[14px] font-montserrat text-[#a2a3a3] w-full h-[56px] border-none mt-[8px] p-[16px]'
									style={{
										background: '#FFFFFF',
										boxShadow:
											' 4px 4px 8px rgba(0, 0, 0, 0.16)',
										borderRadius: '8px',
									}}
									id='country'
								>
									{stateOfResidence?.map((states) => (
										<option
											key={states.name}
											value={states.name}
										>
											{states.name}
										</option>
									))}
								</select>
							)}
						</div>
					</div>

					<div className='md:flex gap-x-[40px]'>
						<div className='flex-1 mb-[20px] md:mb-0'>
							<label
								htmlFor='cohort'
								className='font-[400] font-montserrat text-[16px] leading-[24px] block'
							>
								Cohort
							</label>
							<select
								required
								name='cohort'
								id='cohort'
								onChange={handleChange}
								value={state.cohort}
								className='font-[400] text-[14px] font-montserrat text-[#a2a3a3] w-full h-[56px] border-none mt-[8px] p-[16px] bg-white'
								style={{
									background: '#FFFFFF',
									boxShadow:
										' 4px 4px 8px rgba(0, 0, 0, 0.16)',
									borderRadius: '8px',
								}}
							>
								<option value=''>-- Select Cohort --</option>
								<option value='2020'>2020</option>
								<option value='2021'>2021</option>
								<option value='2022'>2022</option>
								<option value='2023'>2023</option>
							</select>
						</div>
						<div className='flex-1 mb-[20px] md:mb-0'>
							<label
								htmlFor='gender'
								className='font-[400] font-montserrat text-[16px] leading-[24px] block'
							>
								Gender
							</label>
							<select
								required
								name='gender'
								id='gender'
								onChange={handleChange}
								value={state.gender}
								className='font-[400] text-[14px] font-montserrat text-[#a2a3a3] w-full h-[56px] border-none mt-[8px] p-[16px] bg-white'
								style={{
									background: '#FFFFFF',
									boxShadow:
										' 4px 4px 8px rgba(0, 0, 0, 0.16)',
									borderRadius: '8px',
								}}
							>
								<option value=''>-- Select Gender --</option>
								<option value='male'>Male</option>
								<option value='female'>Female</option>
							</select>
						</div>
					</div>
					<div className='md:flex gap-x-[40px]'>
						<div className='flex-1 mb-[20px] md:mb-0'>
							<label
								htmlFor='age'
								className='font-[400] font-montserrat text-[16px] leading-[24px] block'
							>
								Age
							</label>
							<input
								required
								onChange={handleChange}
								value={state.age}
								type='number'
								name='age'
								className='font-[400] text-[14px] font-montserrat text-[#a2a3a3] w-full h-[56px] border-none mt-[8px] p-[16px]'
								style={{
									background: '#FFFFFF',
									boxShadow:
										' 4px 4px 8px rgba(0, 0, 0, 0.16)',
									borderRadius: '8px',
								}}
								id='age'
							/>
						</div>
						<div className='flex-1 mb-[20px] md:mb-0'></div>
					</div>
					<h3 className='font-[500] font-montserrat text-[24px] leading-[32px] text-black text-left'>
						School Information:
					</h3>
					<div className='md:flex md:gap-x-[40px]'>
						<div className='flex-1 mb-[20px] md:mb-0'>
							<label
								htmlFor='isStudent'
								className='font-[400] font-montserrat text-[16px] leading-[24px] block'
							>
								Are you A Student
							</label>
							<select
								required
								name='isStudent'
								id='isStudent'
								onChange={handleChange}
								value={state.isStudent}
								className='font-[400] text-[14px] font-montserrat text-[#a2a3a3] w-full h-[56px] border-none mt-[8px] p-[16px] bg-white'
								style={{
									background: '#FFFFFF',
									boxShadow:
										' 4px 4px 8px rgba(0, 0, 0, 0.16)',
									borderRadius: '8px',
								}}
							>
								<option value=''>-- Select Option --</option>
								<option value='yes'>Yes</option>
								<option value='no'>No</option>
							</select>
						</div>
						<div className='flex-1 mb-[20px] md:mb-0'>
							<label
								htmlFor='boarding'
								className='font-[400] font-montserrat text-[16px] leading-[24px] block'
							>
								Day or Boarding
							</label>
							<select
								required
								name='isboarding'
								id='boarding'
								onChange={handleChange}
								value={state.isBoarding}
								className='font-[400] text-[14px] font-montserrat text-[#a2a3a3] w-full h-[56px] border-none mt-[8px] p-[16px] bg-white'
								style={{
									background: '#FFFFFF',
									boxShadow:
										' 4px 4px 8px rgba(0, 0, 0, 0.16)',
									borderRadius: '8px',
								}}
							>
								<option value=''>-- Select Option --</option>
								<option value='yes'>Day</option>
								<option value='no'>Boarding</option>
							</select>
						</div>
					</div>
					<div className='md:flex gap-x-[40px]'>
						<div className='flex-1 mb-[20px] md:mb-0'>
							<label
								htmlFor='school_add'
								className='font-[400] font-montserrat text-[16px] leading-[24px] block'
							>
								School address
							</label>
							<input
								required
								onChange={handleChange}
								value={state.schoolAddress}
								type='text'
								name='schoolAddress'
								className='font-[400] text-[14px] font-montserrat text-[#a2a3a3] w-full h-[56px] border-none mt-[8px] p-[16px]'
								style={{
									background: '#FFFFFF',
									boxShadow:
										' 4px 4px 8px rgba(0, 0, 0, 0.16)',
									borderRadius: '8px',
								}}
								id='school_add'
							/>
						</div>
						<div className='flex-1 mb-[20px] md:mb-0'>
							<label
								htmlFor='school_name'
								className='font-[400] font-montserrat text-[16px] leading-[24px] block'
							>
								Name of school
							</label>
							<input
								required
								onChange={handleChange}
								value={state.schoolName}
								name='schoolName'
								type='text'
								className='font-[400] text-[14px] font-montserrat text-[#a2a3a3] w-full h-[56px] border-none mt-[8px] p-[16px]'
								style={{
									background: '#FFFFFF',
									boxShadow:
										' 4px 4px 8px rgba(0, 0, 0, 0.16)',
									borderRadius: '8px',
								}}
								id='school_name'
							/>
						</div>
					</div>
					<h3 className='font-[500] font-montserrat text-[24px] leading-[32px] text-black text-left'>
						Parents Information:
					</h3>
					<div className='flex-1 mb-[20px] md:mb-0'>
						<label
							htmlFor='parentName'
							className='font-[400] font-montserrat text-[16px] leading-[24px] block'
						>
							Parents name
						</label>
						<input
							required
							onChange={handleChange}
							name='parentName'
							value={state.parentName}
							type='text'
							className='font-[400] text-[14px] font-montserrat text-[#a2a3a3] w-full h-[56px] border-none mt-[8px] p-[16px]'
							style={{
								background: '#FFFFFF',
								boxShadow: ' 4px 4px 8px rgba(0, 0, 0, 0.16)',
								borderRadius: '8px',
							}}
							id='parentName'
						/>
					</div>
					<div className='md:flex gap-x-[40px]'>
						<div className='flex-1 mb-[20px] md:mb-0'>
							<label
								htmlFor='email'
								className='font-[400] font-montserrat text-[16px] leading-[24px] block'
							>
								Email
							</label>
							<input
								required
								onChange={handleChange}
								value={state.email}
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
							/>
						</div>
						<div className='flex-1 mb-[20px] md:mb-0'>
							<label
								htmlFor='phone'
								className='font-[400] font-montserrat text-[16px] leading-[24px] block'
							>
								Phone number
							</label>
							<input
								required
								onChange={handleChange}
								value={state.phoneNumber}
								name='phoneNumber'
								type='tel'
								className='font-[400] text-[14px] font-montserrat text-[#a2a3a3] w-full h-[56px] border-none mt-[8px] p-[16px]'
								style={{
									background: '#FFFFFF',
									boxShadow:
										' 4px 4px 8px rgba(0, 0, 0, 0.16)',
									borderRadius: '8px',
								}}
								id='phone'
							/>
						</div>
					</div>
					{showMode && (
						<div className='flex-1 mb-[20px] md:mb-0'>
							<label
								htmlFor='screening'
								className='font-[400] font-montserrat text-[16px] leading-[24px] block'
							>
								Screening Mode
							</label>

							<select
								name='screeningMode'
								id='screening'
								onChange={handleChange}
								value={state.screeningMode}
								className='font-[400] text-[14px] font-montserrat text-[#a2a3a3] w-full h-[56px] border-none mt-[8px] p-[16px] bg-white'
								style={{
									background: '#FFFFFF',
									boxShadow:
										' 4px 4px 8px rgba(0, 0, 0, 0.16)',
									borderRadius: '8px',
								}}
							>
								<option value=''>-- Select Option --</option>
								<option value='online'>Online</option>
								<option value='offline'>offline</option>
							</select>
						</div>
					)}
					<div className='flex-1 mb-[20px] md:mb-0'>
						<input
							className='mr-[20px]'
							type='checkbox'
							name='agreement'
							id='agreement'
							onChange={handleChange}
							value={state.agreement}
							required
						/>
						<label htmlFor='agreement'>
							Read and Accept the{' '}
							<a
								href='/kcca_agreement.pdf'
								download
								className='text-primary'
							>
								Terms and conditions
							</a>
						</label>
					</div>
					<div className='flex-1 mb-[20px] md:mb-0'>
						<button
							type='submit'
							className={`${
								!state.agreement && !isFormFilled
									? 'cursor-not-allowed'
									: 'cursor-pointer bg-primary'
							} font-[600] text-[16px] bg-primary hover:bg-primaryPurple font-montserrat text-white rounded-[8px] w-full md:max-w-[488px] p-[16px]`}
							onClick={handleSubmit}
							disabled={!isFormFilled && !state.agreement}
						>
							{clicked ? 'Loading...' : 'SUBMIT FORM'}
						</button>
					</div>
				</section>
			</div>
			<div className='relative'>
				<WhatsappButton />
			</div>
			<Footer />
		</>
	);
};

export default Registration;
