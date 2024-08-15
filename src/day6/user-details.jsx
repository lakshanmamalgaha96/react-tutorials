import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserDetails = ({ userId }) => {
	const [user, setUser] = useState(null);

	useEffect(() => {
		axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`).then((data) => {
			// console.log(data)
			setUser(data?.data)
		})
	}, [userId])


	return <div sx={{ width: '100%' }}>
		User Details

		<div>
			Name: {user?.name}
		</div>
		<div>
			Email: {user?.email}
		</div>
	</div>

}

export default UserDetails;