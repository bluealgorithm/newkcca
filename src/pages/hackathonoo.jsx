import { useState, useEffect } from 'react';
import axios from 'axios';
import Animation from '../../components/Animation'

const maxMembers = 5;

export default function Register() {
	const [groupName, setGroupName] = useState('');
	const [projectName, setProjectName] = useState('');
	const [description, setDescription] = useState('');
	const [githubUsername, setGithubUsername] = useState('');
	const [members, setMembers] = useState([]);
	const [students, setStudents] = useState([]);
	const [githubUsers, setGithubUsers] = useState([]);
	const [errors, setErrors] = useState([]);

	useEffect(() => {
		async function fetchStudents() {
			const { data } = await axios.get('/api/students');
			setStudents(data);
		}
		fetchStudents();
	}, []);

	useEffect(() => {
		async function fetchGithubUsers() {
			const { data } = await axios.get('https://api.github.com/users');
			setGithubUsers(data.map((user) => user.login));
		}
		fetchGithubUsers();
	}, []);

	function handleSubmit(e) {
		e.preventDefault();
		const newGroup = { groupName, projectName, groupMembers: [] };
		if (description.length > 200) {
			setErrors((prevErrors) => [
				...prevErrors,
				'Description should be less than 200 words',
			]);
		}
		if (members.length > maxMembers) {
			setErrors((prevErrors) => [
				...prevErrors,
				'Maximum of 5 members allowed',
			]);
		}
		if (errors.length === 0) {
			members.forEach(({ regId, githubUsername }) => {
				newGroup.groupMembers.push({ regId, githubUsername });
			});
			axios.post('/api/groups', newGroup);
			setGroupName('');
			setProjectName('');
			setDescription('');
			setGithubUsername('');
			setMembers([]);
		}
	}

	function handleMemberChange(index, regId, githubUsername) {
		setErrors([]);
		if (members[index]) {
			setMembers((prevMembers) =>
				prevMembers.map((member, i) =>
					i === index ? { regId, githubUsername } : member
				)
			);
		} else {
			setMembers((prevMembers) => [
				...prevMembers,
				{ regId, githubUsername },
			]);
		}
	}

	return (
		<>
		<Animation>
			<div className='p-8'>
				<h1 className='text-2xl font-medium mb-8'>
					Register New Group
				</h1>
				{errors.length > 0 && (
					<div className='bg-red-200 text-red-800 p-4 mb-8 rounded-md'>
						<ul>
							{errors.map((error, index) => (
								<li key={index}>{error}</li>
							))}
						</ul>
					</div>
				)}
				<form onSubmit={handleSubmit}>
					<label
						htmlFor='groupName'
						className='block mb-1 font-medium text-gray-700'
					>
						Group Name
					</label>
					<input
						type='text'
						id='groupName'
						name='groupName'
						value={groupName}
						onChange={(e) => setGroupName(e.target.value)}
						className='rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 w-full mb-4'
						required
					/>
					<label
						htmlFor='projectName'
						className='block mb-1 font-medium text-gray-700'
					>
						Project Name
					</label>
					<input
						type='text'
						id='projectName'
						name='projectName'
						value={projectName}
						onChange={(e) => setProjectName(e.target.value)}
						className='rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 w-full mb-4'
						required
					/>
					<label
						htmlFor='description'
						className='block mb-1 font-medium text-gray-700'
					>
						Description
					</label>
					<textarea
						id='description'
						name='description'
						value={description}
						onChange={(e) => setDescription(e.target.value)}
						className='rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 w-full mb-4'
						required
					></textarea>
					<label
						htmlFor='githubUsername'
						className='block mb-1 font-medium text-gray-700'
					>
						Your Github Username
					</label>
					<input
						type='text'
						id='githubUsername'
						name='githubUsername'
						value={githubUsername}
						onChange={(e) => setGithubUsername(e.target.value)}
						className='rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 w-full mb-4'
						required
					/>
					<label
						htmlFor='members'
						className='block mb-1 font-medium text-gray-700'
					>
						Group Members (Maximum of {maxMembers})
					</label>
					<ul className='mb-4'>
						{members.map((member, index) => (
							<li
								key={index}
								className='flex items-center space-x-2 mb-2'
							>
								<input
									type='text'
									value={member.regId}
									onChange={(e) =>
										handleMemberChange(
											index,
											e.target.value,
											member.githubUsername
										)
									}
									className='rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 w-full'
									list='students'
									required
								/>
								<input
									type='text'
									value={member.githubUsername}
									onChange={(e) =>
										handleMemberChange(
											index,
											member.regId,
											e.target.value
										)
									}
									className='rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 w-full'
									list='githubUsers'
									required
								/>
							</li>
						))}
					</ul>
					<datalist id='students'>
						{students.map((student) => (
							<option key={student.regId} value={student.regId}>
								{student.name}
							</option>
						))}
					</datalist>
					<datalist id='githubUsers'>
						{githubUsers.map((username) => (
							<option key={username} value={username} />
						))}
					</datalist>
					<button
						type='submit'
						className='bg-indigo-500 text-white px-4 py-2 rounded-md'
					>
						Register
					</button>
				</form>
			</div>
		</Animation>
		</>
	);
}
