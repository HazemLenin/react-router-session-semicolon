import { useParams } from "react-router-dom";

function UserPage() {
	const { name } = useParams();

	return <h1>User page: {name}</h1>;
}

export default UserPage;
