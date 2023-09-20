import { useEffect } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { clearSessionStorage } from "./utils/sessionStorage";
import About from "./views/About/About";
import Contact from "./views/Contact/Contact";
import Home from "./views/Home/Home";
import NotFound from "./views/NotFound/NotFound";
import Projects from "./views/Projects/Projects";
import Settings from "./views/Settings/Settings";

import "./assets/styles/background.css";
import "./assets/styles/blink.css";
import "./assets/styles/buttons.css";
import "./assets/styles/custom-scroll.css";
import "./assets/styles/index.css";

function App() {
	useEffect(() => {
		window.addEventListener("beforeunload", () => {
			clearSessionStorage();
		});
	}, []);

	return (
		<div className="h-full min-h-screen bg-gradient-to-r from-gray-800 via-gray-900 to-gray-950 background-animate">
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
}

export default App;
