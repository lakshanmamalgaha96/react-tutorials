import React, { useState, useEffect } from 'react';

const UseEfectHook = () => {

	const [count, setCount] = useState(0);
	const [color, setColor] = useState("blue")

	// useEffect(function,[dependency])


	//1. useEffect(()=>{})    //runs on every re render
	//2. useEffect(()=>{},[]) // runs on mount
	//3. useEffect(()=>{},[value]) // runs on mount + value chnages
	const name = "John"
	const age = 20
	const s = `My name is ${name} and age is ${age}`

	useEffect(() => {
		//logic
		document.title = `My count is ${count} and color is ${color}`

		return ()=>{

		}
	},[count,color])

	const handleAdd = () => {
		setCount(prev => prev + 1)
	}

	const changeColor=()=>{
		setColor(prev=>prev==='blue'?"red":"blue")
	}

	return <>
		Use Effect Hook
		<div style={{color:color}}>Count : {count}</div>
		<div><button onClick={handleAdd}>Add</button></div>

		<div><button onClick={changeColor}>update color</button></div>
	</>
}

export default UseEfectHook;