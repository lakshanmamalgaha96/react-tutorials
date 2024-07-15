import ComponentB from './componentB'
import React, { useState, createContext } from 'react';

export const NameContext = createContext();
//provider component - defining context
function ComponentA() {
	//prop drilling

	//useContext() - allows share values between multiple levels of compoments

	const [name, setName] = useState("John")

	return <div style={{ border: 'solid 2px', padding: '40px', margin: '5px' }}>
		<h1>Component A</h1>
		<p>{`I am ${name}`}</p>

		<NameContext.Provider value={name}>
			<ComponentB name={name} />
		</NameContext.Provider>


	</div>

}

export default ComponentA;