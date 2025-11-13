import React from 'react';
import Leaderboard from '../../components/Leaderboard/Leaderboard';

const Community: React.FC = () => {
  const totalCO2 = 2350; // kg
  const totalTokens = 12340;
  const userCityRank = 12; // sample

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <section className="mb-6">
        <h1 className="text-3xl font-semibold mb-2">Community Impact</h1>
        <p className="text-sm text-neutral-400">Encourage friendly competition and collective environmental impact across regions.</p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2">
          <Leaderboard currentUser="Kien" />
          <div className="mt-4 p-4 bg-neutral-900 rounded border border-neutral-800">
            <h4 className="font-semibold">You're #{userCityRank} in your city!</h4>
            <p className="text-sm text-neutral-400">Keep participating in challenges to climb the leaderboard and earn more SINAG tokens.</p>
          </div>
        </div>

        <aside className="space-y-4">
          <div className="p-4 bg-neutral-900 rounded border border-neutral-800">
            <h4 className="font-semibold">Community Stats</h4>
            <div className="mt-3 grid grid-cols-2 gap-3">
              <div className="p-3 bg-neutral-950/20 rounded">
                <div className="text-xs text-neutral-400">Total CO₂ avoided</div>
                <div className="text-xl font-bold">{totalCO2} kg</div>
              </div>
              <div className="p-3 bg-neutral-950/20 rounded">
                <div className="text-xs text-neutral-400">Total tokens minted</div>
                <div className="text-xl font-bold">{totalTokens} SIN</div>
              </div>
            </div>
          </div>

          <div className="p-4 bg-neutral-900 rounded border border-neutral-800">
            <h4 className="font-semibold">Regional Impact</h4>
            <div className="mt-3 h-40 bg-neutral-950/10 rounded flex items-center justify-center text-neutral-500">
              {/* Placeholder for animated map of the Philippines */}
              Animated map placeholder
            </div>
          </div>
        </aside>
      </div>

      <section>
        <h2 className="text-xl font-semibold mb-3">Achievement Banners</h2>
        <div className="space-y-3">
          <div className="p-4 bg-emerald-900/10 border border-emerald-800 rounded">
            <strong>Barangay Taguig reached 1,000 kWh savings goal!</strong>
            <p className="text-sm text-neutral-400 mt-1">This milestone unlocked a community reward: 1000 SIN to be distributed among top contributors.</p>
          </div>

          <div className="p-4 bg-blue-900/10 border border-blue-800 rounded">
            <strong>Citywide Challenge: 10% reduction this month</strong>
            <p className="text-sm text-neutral-400 mt-1">Join the challenge and earn bonus tokens for sustained reductions.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Community;
