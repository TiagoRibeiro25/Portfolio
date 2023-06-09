import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ViewHeader from "../../components/ViewHeader/ViewHeader";

export default function Settings() {
	const navigate = useNavigate();

	useEffect(() => {
		navigate("/");
	}, []);

	return (
		<div className="flex flex-col h-screen">
			<ViewHeader title="Settings" />
		</div>
	);
}
