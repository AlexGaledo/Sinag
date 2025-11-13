import React from 'react';
import { NavLink } from 'react-router-dom';
import { Header, QuickSummary } from '../../components';
import ConsumptionChart from '../../components/Charts/ConsumptionChart';
import GeminiChat from '../../components/GeminiChat/GeminiChat';
import Achievements from '../../components/Achievements/Achievements';

const HomeDashboard: React.FC = () => {
  // navigation handled by NavLink active state
  return (
    
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header / Hero */}
       {/* Centered Navbar */}
        <section className="mb-6">
          <div className="flex justify-center">
            <nav aria-label="Main navigation">
              <ul className="flex gap-4 items-center">
                {[
                  { label: 'Dashboard', to: '/dashboard' },
                  { label: 'Community', to: '/community' },
                  { label: 'Bill Tracker', to: '/billtracker' },
                  { label: 'Marketplace', to: '/marketplace' },
                  { label: 'Wallet', to: '/wallet' },
                  { label: 'Settings', to: '/settings' },
                ].map((nav) => (
                  <li key={nav.label}>
                    <NavLink
                      to={nav.to}
                      end={nav.to === '/dashboard'}
                      className={({ isActive }) =>
                        `inline-flex items-center justify-center py-2 rounded-full text-[14px] leading-[25.2px] tracking-[-0.28px] font-normal ${
                          isActive
                            ? 'bg-white/5 border border-white/10 text-white px-4'
                            : 'text-white px-3'
                        }`
                      }
                    >
                      {nav.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </section>

      <section className="mb-8">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-2xl md:text-3xl font-semibold">Good evening, Kien! 🌙</h1>
            <p className="mt-2 text-sm text-neutral-400">Here’s your energy performance this month.</p>
          </div>
        </div>
      </section>
       
      {/* Quick summary cards */}
      <section className="mb-8">
        <QuickSummary />
      </section>

      {/* Middle: Charts & Insights */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2">
          <div className="bg-white/3 border border-white/[0.02]  backdrop-blur-md shadow-[inset_0px_1px_1px_1px_rgba(255,255,255,0.12)] rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-3">Consumption Trend</h2>
            <ConsumptionChart />
          </div>
        </div>

        <aside className="space-y-4">
          <div className="bg-white/3 border border-white/[0.02]  backdrop-blur-md shadow-[inset_0px_1px_1px_1px_rgba(255,255,255,0.12)] rounded-lg p-6">
            <h3 className="font-semibold">Carbon Impact</h3>
            <p className="mt-2 text-sm text-neutral-400">Your savings = <strong>14.5 kg CO₂</strong> avoided — planting <strong>2 trees</strong> 🌱</p>
          </div>

          <div className="bg-white/3 border border-white/[0.02]  backdrop-blur-md shadow-[inset_0px_1px_1px_1px_rgba(255,255,255,0.12)] rounded-lg p-6">
            <h3 className="font-semibold">Quick Insight</h3>
            <p className="mt-2 text-sm text-neutral-400">You reduced usage by <strong>8%</strong> vs last month. Keep it up!</p>
          </div>
        </aside>
      </section>

      {/* Bottom: AI Insights + Achievements */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white/3 border border-white/[0.02]  backdrop-blur-md shadow-[inset_0px_1px_1px_1px_rgba(255,255,255,0.12)] rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-3">AI Insights</h2>
            <GeminiChat />
          </div>
        </div>

        <div>
          <Achievements />
        </div>
      </section>
    </div>
  );
};

export default HomeDashboard;
