import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect, useRef } from 'react';
import { AiOutlineMail } from 'react-icons/ai';

// const CodeInput = ({ handleClear, handleSubmit, userInput, setUserInput }) => {
const Verify = () => {
	const [userInput, setUserInput] = useState('');
	const [fill, setFill] = useState(true);
	const itemsRef = useRef([]);
	let router = useRouter();
	useEffect(() => {
		// itemsRef.current();
		itemsRef.current[0].focus();
	}, []);

	const codeChangeHandler = (event) => {
		const [, codeFieldIndex] = event.target.name.split('-');
		let fieldIntIndex = parseInt(codeFieldIndex, 10);
		setUserInput((prevState) => prevState + event.target.value);
		if (fieldIntIndex <= 2) {
			itemsRef.current[fieldIntIndex + 1].focus();
		} else {
			const field = document.querySelector(
				`Input[name=code-${fieldIntIndex}]`
			);
			field.blur();
			setFill(false);
			router.push('/verified/verified');
		}
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		router.push('/verified/verified');
	};
	const handleClear = (e) => {
		e.preventDefault();

		itemsRef.current[0].value = '';
		itemsRef.current[1].value = '';
		itemsRef.current[2].value = '';
		itemsRef.current[3].value = '';
		setUserInput('');
		itemsRef.current[0].focus();
	};
	// const codeInputFields = new Array(4).fill(0).map((item, index) => (
	//   <input
	//     autoFocus
	//     ref={(ref) => itemsRef.current.push(ref)}
	//     name={`code-${index}`}
	//     key={index}
	//     style={{
	//       boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
	//     }}
	//     onChange={(event) => codeChangeHandler(event)}
	//     maxLength={1}
	//     className="w-[15vw] md:w-[80px] h-[15vw] md:h-[80px] bg-white border border-[#D6BBFB] rounded-lg p-2 placeholder:font-[500] placeholder:text-[#060720] text-[#060720] font-[500] text-3xl md:text-[48px] text-center"
	//   />
	// ));
	// console.log(codeInputFields);
	// return <>{codeInputFields}</>;
	// };

	// const Verify = () => {
	// const [userInput, setUserInput] = useState("");

	return (
		<>
			<div
				className='absolute top-0 left-0 right-0 bottom-0 h-[100vh] z-[1]'
				style={{
					background: 'rgba(6, 7, 32, 0.73)',
				}}
			/>
			<div className="bg-[url('/images/kcca2.JPG')] h-[100vh] bg-cover bg-center ">
				<div className='h-full flex items-center'>
					<div className='relative z-10 w-[95vw] md:w-[408px] h-[374px] bg-white shadow-sm mx-auto flex flex-col items-center justify-center py-4 rounded-[15px]'>
						<AiOutlineMail size={20} />
						<h3 className='font-[500] text-[18px] mt-4 text-[#667085]'>
							Please check your email.
						</h3>
						<p className='font-[400] text-[14px] leading-4 my-[14px] text-center text-[#667085]'>
							We have sent a code to your email
						</p>
						<form>
							<div className='flex justify-center gap-x-[12px] mt-[29px]'>
								{/* <CodeInput handleClear handleSubmit userInput setUserInput /> */}
								{new Array(4).fill(0).map((item, index) => (
									<input
										autoFocus
										ref={(ref) =>
											itemsRef.current.push(ref)
										}
										name={`code-${index}`}
										key={index}
										style={{
											boxShadow:
												'0px 1px 2px rgba(16, 24, 40, 0.05)',
										}}
										onChange={(event) =>
											codeChangeHandler(event)
										}
										maxLength={1}
										className='w-[15vw] md:w-[80px] h-[15vw] md:h-[80px] bg-white border border-[#D6BBFB] rounded-lg p-2 placeholder:font-[500] placeholder:text-[#060720] text-[#060720] font-[500] text-3xl md:text-[48px] text-center'
									/>
								))}
								{/* <input
                  ref={ref => itemsRef.current.push(ref)}
                  type="text"
                  placeholder="0"
                  className="w-[15vw] md:w-[80px] h-[15vw] md:h-[80px] bg-white border border-[#D6BBFB] rounded-lg p-2 placeholder:font-[500] placeholder:text-[#060720] text-[#060720] font-[500] text-3xl md:text-[48px] text-center"
                  style={{ boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)" }}
                  maxLength="1"
                />
                <input
                  type="text"
                  placeholder="0"
                  className="w-[15vw] md:w-[80px] h-[15vw] md:h-[80px] bg-white border border-[#D6BBFB] rounded-lg p-2 placeholder:font-[500] placeholder:text-[#060720] text-[#060720] font-[500] text-3xl md:text-[48px] text-center"
                  style={{ boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)" }}
                />
                <input
                  type="text"
                  placeholder="0"
                  className="w-[15vw] md:w-[80px] h-[15vw] md:h-[80px] bg-white border border-[#D6BBFB] rounded-lg p-2 placeholder:font-[500] placeholder:text-[#060720] text-[#060720] font-[500] text-3xl md:text-[48px] text-center"
                  style={{ boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)" }}
                  maxLength="1"
                />
                <input
                  type="text"
                  placeholder="0"
                  className="w-[15vw] md:w-[80px] h-[15vw] md:h-[80px] bg-white border border-[#D6BBFB] rounded-lg p-2 placeholder:font-[500] placeholder:text-[#060720] text-[#060720] font-[500] text-3xl md:text-[48px] text-center"
                  style={{ boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)" }}
                /> */}
							</div>
							<div className='text-center mt-[6px] mb-[20px] md:mb-[32px]'>
								<Link href='#' className='text-center '>
									Didn’t get a code?{' '}
									<span className='text-primary'>
										Click to resend.
									</span>
								</Link>
							</div>
							<div className='flex gap-[24px] justify-center mt-[20px] mb-3 md:mt-[60]'>
								<button
									onClick={handleClear}
									className='hover:bg-primaryPurple hover:text-white  bg-transparent text-black py-3 px-[18px] w-[35vw] md:w-[174px] h-[44px] rounded-lg border border-[#D0D5DD] hover:border-none text-[16px] font-[900] leading-5 text-center'
								>
									Cancel
								</button>
								<button
									className={`hover:bg-primaryPurple  bg-primary text-white py-3 px-[18px] w-[35vw] md:w-[174px] h-[44px] rounded-lg border hover:border-none text-[16px] font-[900] leading-5 text-center ${
										fill
											? 'cursor-not-allowed'
											: 'pointer-events-auto cursor-pointer'
									}`}
									onClick={handleSubmit}
									disabled={fill ? true : false}
								>
									Verify
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default Verify;
