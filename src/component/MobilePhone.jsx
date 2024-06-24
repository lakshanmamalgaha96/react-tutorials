import React from 'react';

export const MobilePhone = ({name,price,children}) => {

	// let name="Samsung"
	// let price=50000;

	let models = ["S20", 'S20 Plus']

	let model= {
		name:"S20",
		price:60000
	}

	const buy =()=>{

	}

	function repair(){

	}

	return (
		<div style={{paddingBottom:'20px',border:'1px solid #ffffff',marginBottom:'12px'}}>
			<span>This is a {name} mobile phone and price is {price}</span>
		{children}
		</div>
	)
}

// export default MobilePhone