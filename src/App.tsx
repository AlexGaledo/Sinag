
import HomeDashboard from "./pages/HomeDashboard";
import { Route, Routes, Navigate } from "react-router-dom";
import { BillTracker, Wallet, Chatbot, Marketplace, Community, Settings } from "./pages";
import { Header } from "./components";


export function App() {
	return (
		<>
			<Header />
		<main className="relative min-h-screen bg-black text-white pt-28">
			<div className="relative z-10 p-6 max-w-7xl mx-auto">
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
			</div>
		</main>
		</>
	);
}


