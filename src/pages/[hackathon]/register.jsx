import { useState, useEffect } from 'react';
import axios from 'axios';
import Nav from '../../../components/Nav';
import Footer from '../../../components/Footer';
// async function handleSubmit(e) {
// 	e.preventDefault();
// 	if (
// 		groupName.trim() === '' ||
// 		projectName.trim() === '' ||
// 		description.trim() === ''
// 	) {
// 		// display an error message or prevent form submission
// 		return;
// 	}
// 	if (groupMembers.length === 0) {
// 		// display an error message or prevent form submission
// 		return;
// 	}
// 	if (groupMembers.length > 5) {
// 		// display an error message or prevent form submission
// 		return;
// 	}
// 	const descriptionWords = description.split(' ');
// 	if (descriptionWords.length > 200) {
// 		// display an error message or prevent form submission
// 		return;
// 	}
// 	const promises = groupMembers.map((member) =>
// 		checkGitHubUsername(member.githubUsername)
// 	);
// 	const results = await Promise.all(promises);
// 	const invalidMembers = results.filter((result) => !result.valid);
// 	if (invalidMembers.length > 0) {
// 		// display an error message or prevent form submission
// 		return;
// 	}
// 	const registrationData = {
// 		groupName,
// 		projectName,
// 		groupMembers,
// 	};
// 	// send the registrationData object to the API endpoint
// }

export default function RegisterForm() {
	const [groupName, setGroupName] = useState('');
	const [projectName, setProjectName] = useState('');
	const [description, setDescription] = useState('');
	const [githubUsername, setGithubUsername] = useState('');
	const [regId, setRegId] = useState('');
	const [students, setStudents] = useState([]);
	const [groupMembers, setGroupMembers] = useState([]);
	const [githubUsers, setGithubUsers] = useState([]);
	// async function handleAddMember(e) {
	// 	e.preventDefault();
	// 	const input = e.target.querySelector('input');
	// 	const inputValue = input.value.trim();
	// 	if (inputValue === '') {
	// 		return;
	// 	}
	// 	const suggestions = await getGitHubUserSuggestions(inputValue);
	// 	if (
	// 		suggestions.length === 0 ||
	// 		groupMembers.find((member) => member.githubUsername === inputValue)
	// 	) {
	// 		return;
	// 	}
	// 	setGroupMembers([
	// 		...groupMembers,
	// 		{ regId: '', githubUsername: inputValue },
	// 	]);
	// 	input.value = '';
	// }
	const [state, setState] = useState({ category: '' });

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

	useEffect(() => {
		// Fetch the list of students' data from the server
		fetch(`https://kcca-api.onrender.com/v1/students`)
			.then((res) => res.json())
			.then((data) => setStudents(data))
			.catch((err) => console.error(err));
	}, []);
	useEffect(() => {
		// fetch list of GitHub users matching input
		axios
			.get(`https://api.github.com/search/users?q=${githubUsername}`)
			.then((res) => {
				// setGithubUsers(res.data.items.map((user) => user.login));
				setGithubUsers(res.data.items);
				// console.log(res.data.items);
			})
			.catch((err) => console.log(err));
	}, [githubUsername]);

	const handleAddMember = () => {
		// Find the student object with the selected regId
		const selectedStudent = students.find(
			(student) => student.regId === Number(regId)
		);

		// Check if the student is already in the groupMembers array
		if (
			selectedStudent &&
			!groupMembers.some(
				(member) => member.regId === selectedStudent.regId
			)
		) {
			// check if the length is not more than five
			if (groupMembers.length < 5) {
				// Add the student's regId and githubUsername to the groupMembers array
				setGroupMembers([
					...groupMembers,
					{ regId: selectedStudent.regId, githubUsername },
				]);
			}

			// Reset the input fields
			setRegId('');
			setGithubUsername('');
		}
	};
	// console.log(groupMembers);
	const handleSubmit = (e) => {
		e.preventDefault();
		if (
			groupName.trim() === '' ||
			projectName.trim() === '' ||
			description.trim() === ''
		) {
			// display an error message or prevent form submission
			return;
		}
		if (groupMembers.length === 0) {
			// display an error message or prevent form submission
			return;
		}
		if (groupMembers.length > 5) {
			// display an error message or prevent form submission
			return;
		}
		const descriptionWords = description.split(' ');
		if (descriptionWords.length > 200) {
			// display an error message or prevent form submission
			return;
		}
		let category = state.category;
		const registrationData = {
			groupName,
			projectName,
			category,
			description,
			groupMembers,
		};
		console.log(registrationData);
		// Send a POST request to the server with the registration data
		fetch('https://kcca-api.onrender.com/v1/hackathon', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(registrationData),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.message === 'Project created successfully') {
					alert(data.message);
					setGroupName('');
					setProjectName('');
					setDescription('');
					groupMembers([]);
				} else {
					alert(data.error);
				}
				// console.log(data);
			})
			.catch((err) => console.error(err));
	};

	return (
		<>
			<Nav />
			<section className='w-[90%] md:w-[1104px] mt-[30px] md:mt-[72px] p-[10px] md:p-[40px] mx-auto flex flex-col gap-[15px] md:gap-[40px] justify-center pb-4'>
				<form
					onSubmit={handleSubmit}
					className='bg-gray-100 p-6 rounded-lg'
				>
					<h2 className='text-2xl font-bold mb-4'>
						Register for Hackathon
					</h2>
					<div className='md:flex gap-x-[40px]'>
						<div className='flex-1 mb-[20px]'>
							<label
								className='block font-medium mb-2'
								htmlFor='groupName'
							>
								Group Name
							</label>
							<input
								id='groupName'
								name='groupName'
								type='text'
								className='font-[400] text-[14px] font-montserrat text-[#a2a3a3] w-full h-[56px] border-none mt-[8px] p-[16px]'
								style={{
									background: '#FFFFFF',
									boxShadow:
										' 4px 4px 8px rgba(0, 0, 0, 0.16)',
									borderRadius: '8px',
								}}
								value={groupName}
								onChange={(e) => setGroupName(e.target.value)}
								required
							/>
						</div>
						<div className='flex-1 mb-[20px]'>
							<label
								className='block font-medium mb-2'
								htmlFor='projectName'
							>
								Project Name
							</label>
							<input
								id='projectName'
								name='projectName'
								type='text'
								className='font-[400] text-[14px] font-montserrat text-[#a2a3a3] w-full h-[56px] border-none mt-[8px] p-[16px]'
								style={{
									background: '#FFFFFF',
									boxShadow:
										' 4px 4px 8px rgba(0, 0, 0, 0.16)',
									borderRadius: '8px',
								}}
								value={projectName}
								onChange={(e) => setProjectName(e.target.value)}
								required
							/>
						</div>
					</div>
					<div className='flex-1 mb-[20px]'>
						<label
							htmlFor='category'
							className='font-[400] font-montserrat text-[16px] leading-[24px] block'
						>
							Category
						</label>
						<select
							required
							name='category'
							id='category'
							onChange={handleChange}
							value={state.category}
							className='font-[400] text-[14px] font-montserrat text-[#a2a3a3] w-full h-[56px] border-none mt-[8px] p-[16px] bg-white'
							style={{
								background: '#FFFFFF',
								boxShadow: ' 4px 4px 8px rgba(0, 0, 0, 0.16)',
								borderRadius: '8px',
							}}
						>
							<option value=''>-- Select Category --</option>
							<option value='junior'>Junior Category</option>
							<option value='senior'>Senior Category</option>
						</select>
					</div>
					{/* <div className='md:flex gap-x-[40px]'> */}
					<div className='flex-1 mb-[20px] md:mb-4'>
						<label
							className='block font-medium mb-2'
							htmlFor='description'
						>
							Project Description
						</label>
						<textarea
							id='description'
							name='description'
							className='font-[400] text-[14px] font-montserrat text-[#a2a3a3] w-full h-[150px] border-none mt-[8px] p-[16px]'
							style={{
								background: '#FFFFFF',
								boxShadow: ' 4px 4px 8px rgba(0, 0, 0, 0.16)',
								borderRadius: '8px',
							}}
							value={description}
							onChange={(e) => setDescription(e.target.value)}
							required
							minLength={200}
							placeholder='briefly describe what your project is all about'
						/>
						<span>
							{description.split(' ').length} of 200 words
						</span>
						{description && description.split(' ').length > 200 && (
							<p className='text-red-500'>
								Description should not exceed 200 words
							</p>
						)}
					</div>
					<label className='block font-medium mb-2' htmlFor='regId'>
						Group Members
					</label>
					<div className='flex flex-col gap-y-3 md:gap-y-0 md:flex-row items-center gap-x-3 mb-4'>
						<input
							id='regId'
							name='regId'
							type='text'
							className='font-[400] text-[14px] font-montserrat text-[#a2a3a3] w-full h-[56px] border-none mt-[8px] p-[16px]'
							style={{
								background: '#FFFFFF',
								boxShadow: ' 4px 4px 8px rgba(0, 0, 0, 0.16)',
								borderRadius: '8px',
							}}
							placeholder="Enter student's registration ID"
							list='students'
							value={regId}
							onChange={(e) => setRegId(e.target.value)}
						/>
						<input
							id='githubUsername'
							name='githubUsername'
							type='text'
							className='font-[400] text-[14px] font-montserrat text-[#a2a3a3] w-full h-[56px] border-none mt-[8px] p-[16px]'
							style={{
								background: '#FFFFFF',
								boxShadow: ' 4px 4px 8px rgba(0, 0, 0, 0.16)',
								borderRadius: '8px',
							}}
							list='githubUser'
							placeholder="Enter student's GitHub username"
							value={githubUsername}
							onChange={(e) => setGithubUsername(e.target.value)}
						/>
						{/* <input
						id='githubUsername'
						name='githubUsername'
						type='text'
						className='font-[400] text-[14px] font-montserrat text-[#a2a3a3] w-full h-[56px] border-none mt-[8px] p-[16px]'
						style={{
							background: '#FFFFFF',
							boxShadow: ' 4px 4px 8px rgba(0, 0, 0, 0.16)',
							borderRadius: '8px',
						}}
						placeholder="Enter student's GitHub username"
						value={githubUsername}
						onChange={(e) => setGithubUsername(e.target.value)}
					/> */}
						{/* <button
						type='button'
						className='bg-blue-500 text-white px-4 py-2 rounded-lg ml-2'
						onClick={handleAddMember}
					>
						Add
					</button> */}
						{groupMembers.length < 5 && (
							<button
								type='button'
								className='bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg'
								onClick={handleAddMember}
							>
								Add Member
							</button>
						)}
						{groupMembers.length === 5 && (
							<p className='text-gray-500'>
								Maximum of 5 group members reached
							</p>
						)}
					</div>
					{/* datalist for users */}
					<datalist id='students'>
						{students.map((student) => (
							<option key={student.regId} value={student.regId}>
								{student.firstName} {student.lastName}
							</option>
						))}
					</datalist>

					{/* datalist for github users */}
					<datalist id='githubUser'>
						{githubUsers.map((user) => (
							<>
								<option
									key={user.id}
									value={user.login}
								></option>
							</>
						))}
					</datalist>
					{groupMembers.length > 0 && (
						<ul className='list-disc list-inside mb-4'>
							{groupMembers.map((member) => (
								<li key={member.regId} className=''>
									{member.regId} - {member.githubUsername}
								</li>
							))}
						</ul>
					)}
					<button
						type='submit'
						className='bg-blue-500 text-white px-4 py-2 rounded-lg'
					>
						Submit
					</button>
				</form>
			</section>
			<Footer />
		</>
	);
}
