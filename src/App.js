import logo from "./logo.svg";
import "./App.css";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import PrivacyPage from "./pages/PrivacyPage";

import UserPage from "./pages/UserPage";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<nav>
				<h3>
					<strong>React Router</strong>
				</h3>
			</nav>

			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/privacy" element={<PrivacyPage />} />
				<Route path="/about" element={<AboutPage />} />
				<Route path="/users/:name" element={<UserPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
