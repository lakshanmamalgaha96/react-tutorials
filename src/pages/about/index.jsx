
import { Link, useNavigate } from "react-router-dom";
function About() {

	const navigate = useNavigate();

	function handleClick() {
		navigate('/contact',
			{
				state: { title: "Contact me" }
			}
		)
	}

	return <div >
		<h1>About page</h1>

		<button onClick={handleClick}>Go to contact</button>


	</div>

}

export default About;