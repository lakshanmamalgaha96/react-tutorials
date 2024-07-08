import React, { useState, useEffect } from 'react';

const ComponentA = () => {
 
	const [width,setWidth] = useState(window.innerWidth);
	const [heigth,setHeight] = useState(window.innerHeight);

	const resize = ()=>{
		setWidth(window.innerWidth)
		setHeight(window.innerHeight)
	}

	

	useEffect(()=>{
		window.addEventListener("resize",resize)
		console.log("Listner Added")

		return ()=>{
			window.removeEventListener("resize",resize)
			console.log("Removed the listner")
		}
	},[])
	

	return <>
		<div>Width : {width}px</div>
		<div>Height : {heigth}px</div>
	</>
}

export default ComponentA;