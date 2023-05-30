import React from 'react';

const Modal = ({ show }) => {
	return (
		<div
			className='h-screen w-screen relative'
			style={{ backgroundColor: 'rgba(21, 21, 21, 0.5)' }}
		>
			<div className='absolute top-[35px] md:top-[15%] left-[10px] md:left-[25%] right-[10px] md:right-[25%] bottom-[35px] md:bottom-[15%] bg-white flex flex-col justify-center px-[20px] md:px-[60px] rounded-[4px] border py-[30px]'>
				<p className='font-[500] font-montserrat text-[24px] leading-[32px] text-center'>
					THANK YOU!
				</p>
				<p className='font-[500] font-montserrat text-[16px] leading-[24px] text-center text-[#535252] mb-[20px] md:mb-[40px] mt-[20px] md:mt-[30px]'>
					We appreciate your effort in filling out the registration
					form. Our screening will come in two categories:
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
					An email will be sent containing your screening details.
				</p>
				<div className=''>
					<button
						type='submit'
						className='font-[600] text-[16px] font-montserrat text-white bg-primary p-2 w-full rounded-[4px]'
						onClick={() => show(false)}
					>
						OK
					</button>
				</div>
			</div>
		</div>
	);
};

export default Modal;
