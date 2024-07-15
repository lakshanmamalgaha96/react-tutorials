import React, { useContext } from 'react';
import { NameContext } from './componentA';

//consumer component - use the defined context

function ComponentD() {

	const name = useContext(NameContext)

	return <div style={{ border: 'solid 2px', padding: '40px', margin: '5px' }}>
		<h1>Component D</h1>
		<p>{` Hello ${name}`}</p>
	</div>

}

export default ComponentD;