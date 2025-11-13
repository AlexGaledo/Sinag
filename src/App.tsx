import { ConnectButton } from "thirdweb/react";
import thirdwebIcon from "./thirdweb.svg";
import { client } from "./client";
import HomeDashboard from "./pages/HomeDashboard";
import { Route, Routes } from "react-router-dom";
import { BillTracker, Wallet } from "./pages";
import { Chatbot }	from "./pages";
import { Marketplace } from "./pages";
import { Community } from "./pages";

export function App() {
	return (
		<>
		<Routes>
			<Route path="/dashboard" element={<HomeDashboard/>}/>
			<Route path="/billtracker" element={<BillTracker/>}/>
			<Route path="/chatbot" element={<Chatbot/>}/>
			<Route path="/wallet" element={<Wallet/>}/>
			<Route path="/marketplace" element={<Marketplace/>}/>
			<Route path="/community" element={<Community/>}/>

		</Routes>
		</>
	);
}


