import React from 'react';
import { AiOutlineCopyright } from 'react-icons/ai';
const Footer = () => {
	return (
		<div className='py-[40px] bg-white flex flex-col items-center gap-y-[20px] justify-center text-center px-[20px]'>
			<p className='font-[500] font-montserrat text-[18px] text-[#3c3838] leading-[28px]'>
				Copyright &copy; {new Date().getFullYear()} Kids Code Club
				Africa
			</p>
			<p className='font-[500] font-montserrat text-[16px] leading-[24px]'>
				Powered by{' '}
				<span className='text-primary'>Alpha Blue Foundation</span>
			</p>
		</div>
	);
};

export default Footer;
