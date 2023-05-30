/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	async redirects() {
		return [
			// Redirect /about to /about-us
			{
				source: '/registration',
				destination: '/registration',
				permanent: true, // Set to true for a permanent redirect, false for a temporary redirect
			},
			{
				source: '/returning-student-payment',
				destination: '/returning-student-payment',
				permanent: true,
			},
			{
				source: '/payment',
				destination: '/payment',
				permanent: true,
			},
			// Add more redirects as needed
		];
	},
};

module.exports = nextConfig;
