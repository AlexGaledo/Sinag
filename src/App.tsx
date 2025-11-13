
import HomeDashboard from "./pages/HomeDashboard";
import { Route, Routes, Navigate } from "react-router-dom";
import { BillTracker, Wallet, Chatbot, Marketplace, Community, Settings } from "./pages";
import { Header } from "./components";


export function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/dashboard" element={<HomeDashboard />} />
				<Route path="/billtracker" element={<BillTracker />} />
				<Route path="/chatbot" element={<Chatbot />} />
				<Route path="/wallet" element={<Wallet />} />
				<Route path="/marketplace" element={<Marketplace />} />
				<Route path="/community" element={<Community />} />
				<Route path="/settings" element={<Settings />} />
				{/* default redirect from root to dashboard */}
				<Route path="/" element={<Navigate to="/dashboard" replace />} />
			</Routes>
		</>
	);
}


