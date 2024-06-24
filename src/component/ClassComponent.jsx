import React from "react";

class Car extends React.Component{

	constructor(){
		super();
		this.state = {
			name:"Toyota"
		}
	}


	render(){
		return <div>This is a class component {this.state.name}</div>
	}
}

export default Car;