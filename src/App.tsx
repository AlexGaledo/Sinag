
import HomeDashboard from "./pages/HomeDashboard";
import { Route, Routes } from "react-router-dom";
import { BillTracker, Wallet } from "./pages";
import { Chatbot }	from "./pages";
<<<<<<< HEAD
import { Marketplace } from "./pages";
import { Community } from "./pages";
=======
import { Header } from "./components";

>>>>>>> e2afde9ba4aad00da473700cb8bb7ba65c69a60e

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

		</Routes>
		</>
	);
}


