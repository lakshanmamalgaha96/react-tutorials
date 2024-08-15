import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserDetails from './user-details';

const UserList = () => {
	const [users, setUsers] = useState([]);
	const [selectedUser, setSelectedUser] = useState(null);

	useEffect(() => {
		axios.get('https://jsonplaceholder.typicode.com/users').then((data) => {
			// console.log(data)
			setUsers(data?.data)
		})
	}, [])

	// fetch('https://jsonplaceholder.typicode.com/users').then(response => {
	// 	console.log(response)
	// })

	function handleClick(userId) {
		setSelectedUser(userId)
	}


	return <div sx={{ width: '100%' }}>
		User List

		<table>
			<thead>
				<tr>
					<th>Name</th>
					<th>Email</th>
				</tr>
			</thead>
			<tbody>
				{users.map(user => <tr>
					<td onClick={() => handleClick(user.id)}>{user.name}</td>
					<td>{user.email}</td>
				</tr>)}

			</tbody>
		</table>

		<div style={{ paddingTop: '20px' }}>
			{selectedUser && <UserDetails userId={selectedUser} />}
		</div>
	</div>

}

export default UserList;