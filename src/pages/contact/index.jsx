import { Link, useNavigate } from "react-router-dom";

function Contact(props) {

	const navigate = useNavigate();

	function handleBack() {
		navigate(-1)
	}

	return <div >
		<h1>Contact page</h1>
		<div>{props.title}</div>
		<button onClick={handleBack}>back</button>

	</div>

}

export default Contact;