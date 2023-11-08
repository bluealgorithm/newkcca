import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
const NotFound = () => {
	const router = useRouter();
	// const redirect = () => {
	// 	if (router.asPath === '/returning-student') {
	// 		console.log(router.asPath);
	// 		router.push('/returning-student-payment');
	// 	} else if (router.asPath === '/payment') {
	// 		console.log(router.asPath);
	// 		router.push('/payment');
	// 	} else if (router.asPath === '/registration') {
	// 		console.log(router.asPath);
	// 		router.push('/registration');
	// 	} else {
	// 		router.push('/');
	// 	}
	// };

	// useEffect(() => {
	// 	if (router.asPath === '/returning-student-payment') {
	// 		console.log(router.asPath);
	// 		router.push('/returning-student-payment');
	// 	} else if (router.asPath === '/payment') {
	// 		console.log(router.asPath);
	// 		router.push('/payment');
	// 	} else if (router.asPath === '/registration') {
	// 		console.log(router.asPath);
	// 		router.push('/registration');
	// 	} else {
	// 		console.log(router.asPath);
	// 		router.push('/');
	// 	}

	// 	//   return () => {
	// 	//     second
	// 	//   }
	// }, []);

	return (
		<div className='flex justify-between items-center w-4/5 text-center'>
			<h3>Oops! Page Not Found</h3>
			<p>The page you were looking for could not be found.</p>

			<Link href='/'>Return To Home Page</Link>
		</div>
	);
};

export default NotFound;
