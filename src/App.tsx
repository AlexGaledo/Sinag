import { ConnectButton } from "thirdweb/react";
import thirdwebIcon from "./thirdweb.svg";
import { client } from "./client";
import HomeDashboard from "./pages/HomeDashboard";
import { Route, Routes } from "react-router-dom";

export function App() {
	return (
		<>
		<Routes>
			<Route path="/dashboard" element={<HomeDashboard/>}/>
		</Routes>
		</>
	);
}


