
import HomeDashboard from "./pages/HomeDashboard";
import { Route, Routes } from "react-router-dom";
import { BillTracker, Wallet } from "./pages";
import { Chatbot }	from "./pages";
import { Header } from "./components";


export function App() {
	return (
		<>
		<Header/>
		<Routes>
			<Route path="/dashboard" element={<HomeDashboard/>}/>
			<Route path="/billtracker" element={<BillTracker/>}/>
			<Route path="/chatbot" element={<Chatbot/>}/>
			<Route path="/wallet" element={<Wallet/>}/>
		</Routes>
		</>
	);
}


