import React, { useState } from 'react';

const UseStateHook = () => {
	const [value, setValue] = useState(1);


	// let value = 1

	function increment() {
		// value = value + 1

		setValue(value + 1)

		setValue((prev) => {
			return prev + 1
		})
		console.log("increment", value)
	}

	function decrement() {
		// value = value - 1
		setValue(value - 1)
		console.log("descrement", value)
	}

	return <div>
		{value}
		<div>
			<button onClick={increment} style={{ width: '40px', fontSize: '24px' }}>+</button>
		</div>

		<div>
			<button onClick={decrement} style={{ width: '40px', fontSize: '24px' }}>-</button>
		</div>
		<Component value={value} />

	</div>

}

const Component = ({ value }) => {

	const [person, setPerson] = useState({
		name: "David",
		age: 24,
		address: "Colombo"
	})

	function changeName() {
		setPerson((prev)=>{
			return {
				...prev,
				name:'john'
			}
		})
	}


	return <div>
		<div>Component 2</div><br />
		<div>person Name: {person.name}</div>
		<div>person Age: {person.age}</div>
		<div>person Address: {person.address}</div>
		<button onClick={changeName}>Change Name</button>
	</div>
}

export default UseStateHook;