import ComponentC from './componentC'

function ComponentB() {

	return <div style={{ border: 'solid 2px', padding: '40px', margin: '5px' }}>
		<h1>Component B</h1>
		<ComponentC />
	</div>

}

export default ComponentB;