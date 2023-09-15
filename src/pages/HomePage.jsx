import { Link } from "react-router-dom";

function HomePage() {
	return (
		<>
			<h1>Home</h1>
			<Link to="/about">About</Link>
			<br />
			<Link to="/privacy">Privacy</Link>
		</>
	);
}

export default HomePage;
