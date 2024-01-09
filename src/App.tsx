import { useEffect } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { clearSessionStorage } from "./utils/sessionStorage";
import About from "./views/About";
import Contact from "./views/Contact";
import Home from "./views/Home";
import NotFound from "./views/NotFound";
import Projects from "./views/Projects";
import Settings from "./views/Settings";

import "./assets/styles/background.css";
import "./assets/styles/blink.css";
import "./assets/styles/buttons.css";
import "./assets/styles/custom-scroll.css";
import "./assets/styles/index.css";

const App: React.FC = (): React.JSX.Element => {
	useEffect(() => {
		window.addEventListener("beforeunload", () => {
			clearSessionStorage();
		});
	}, []);

	return (
		<div className="h-full min-h-screen overflow-y-auto bg-gradient-to-r from-gray-800 via-gray-900 to-gray-950 background-animate">
			<Router>
				<Routes>
					<Route element={<Home />} path="/" />
					<Route element={<About />} path="/about" />
					<Route element={<Projects />} path="/projects" />
					<Route element={<Contact />} path="/contact" />
					<Route element={<Settings />} path="/settings" />
					<Route element={<NotFound />} path="*" />
				</Routes>
			</Router>
		</div>
	);
};

export default App;
