import React, { useState, useEffect } from 'react';
import Select from 'react-select';
const API_URL = 'https://restfulcountries.com/api/v1/countries';
const BEARER_TOKEN = process.env.NEXT_PUBLIC_COUNTRY_FETCH_TOKEN;

const CountrySelector = () => {
	const [countries, setCountries] = useState([]);

	useEffect(() => {
		// Function to fetch data from the API with the bearer token
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
				setCountries(data);
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		};

		fetchData();
	}, []);

	return (
		<Select
			options={countries}
			getOptionLabel={(country) => country.name}
			getOptionValue={(country) => country.code}
			placeholder='Select a country'
		/>
	);
};

export default CountrySelector;
