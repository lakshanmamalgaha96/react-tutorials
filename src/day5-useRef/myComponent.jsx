import React, { useState, useEffect, useRef } from 'react';

function MyComponent() {

	// const [value, setValue] = useState(0);
	const value = useRef(0);

	useEffect(() => {
		console.log("component Rendered")
		console.log(value.current)
	})

	function clickMe() {
		// value.current = value.current + 1
		// console.log(value.current)
		value.current.focus();
		value.current.style.fontSize = "40px"
		value.current.style.backgroundColor = "Red"

	}

	return <div style={{ border: 'solid 2px', padding: '40px', margin: '5px' }}>
		<h1>Component A</h1>
		<button onClick={clickMe}>Click</button>

		<input ref={value} />

	</div>

}

export default MyComponent;