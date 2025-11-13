
import HomeDashboard from "./pages/HomeDashboard";
import { Route, Routes } from "react-router-dom";
import { BillTracker, Wallet } from "./pages";
import { Chatbot }	from "./pages";
import { Marketplace } from "./pages";
import { Community } from "./pages";
import { Header } from "./components";
import { Settings } from "./pages";


export function App() {
	return (
		<>
		<Header/>
		<Routes>
			<Route path="/dashboard" element={<HomeDashboard/>}/>
			<Route path="/billtracker" element={<BillTracker/>}/>
			<Route path="/chatbot" element={<Chatbot/>}/>
			<Route path="/wallet" element={<Wallet/>}/>
			<Route path="/marketplace" element={<Marketplace/>}/>
			<Route path="/community" element={<Community/>}/>
			<Route path="/settings" element={<Settings/>}/>

		</Routes>
		</>
	);
}


