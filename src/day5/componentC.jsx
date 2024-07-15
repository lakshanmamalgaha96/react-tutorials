import ComponentD from './componentD'
import React, { useContext } from 'react';
import { NameContext } from './componentA';

function ComponentC() {

	const name = useContext(NameContext)

	return <div style={{ border: 'solid 2px', padding: '40px', margin: '5px' }}>
		<h1>Component C</h1>
		{name}
		<ComponentD />

	</div>

}

export default ComponentC;