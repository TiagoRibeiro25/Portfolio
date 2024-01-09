import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ViewHeader from "../../components/ViewHeader";

const Settings: React.FC = (): React.JSX.Element => {
	const navigate = useNavigate();

	useEffect(() => {
		navigate("/");
	}, []);

	return (
		<div className="flex flex-col h-screen">
			<ViewHeader title="Settings" />
		</div>
	);
};

export default Settings;
