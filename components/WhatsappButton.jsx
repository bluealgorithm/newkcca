import React from 'react';

const WhatsappButton = () => {
	return (
		<a
			href='http://wa.me/2347018245477?text=I%20will%20like%20to%20know%20more%20about%20KCCA'
			aria-label='Chat on WhatsApp'
			className='w-[70px] h-[70px] hover:bg-primary md:w-[150px] md:h-[150px] rounded-full fixed bottom-1 md:bottom-2 right-1 md:right-2 z-[1000] flex items-center justify-center'
			target='_blank'
		>
			<img
				src='/images/whatsapp.png'
				className='w-[50px] md:w-[100px]'
				alt='whatsapp image'
				srcSet=''
			/>
		</a>
	);
};

export default WhatsappButton;
