import React from 'react';

const Conditions = ({ value }) => {


	console.log(value)

	// if (value === 0) {
	// 	return <div>I am zero</div>
	// } else if (value < 10) {
	// 	return <div>I am less than 10</div>
	// } else {
	// 	return <div>I am greter than 10</div>
	// }

	// return <div>{value>10?"i am greater than 10":" i am less than 10"}</div>

	return <div>{value>10 && "i am greater than 10"}</div>

}

export default Conditions;