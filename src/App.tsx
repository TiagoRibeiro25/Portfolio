import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import About from "./views/About/About";
import Contact from "./views/Contact/Contact";
import Home from "./views/Home/Home";
import NotFound from "./views/NotFound/NotFound";
import Projects from "./views/Projects/Projects";
import Settings from "./views/Settings/Settings";

import "./assets/styles/background.css";
import "./assets/styles/blink.css";
import "./assets/styles/buttons.css";
import "./assets/styles/container-scroll.css";
import "./assets/styles/index.css";

function App() {
	React.useEffect(() => {
		window.addEventListener("beforeunload", () => {
			sessionStorage.clear();
		});
	}, []);

	return (
		<div className="h-full min-h-screen bg-gradient-to-r from-gray-800 via-gray-900 to-gray-950 background-animate">
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/settings" element={<Settings />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
