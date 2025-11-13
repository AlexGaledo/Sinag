import React, { useMemo, useState } from 'react';
import RewardsGrid from '../../components/RewardsGrid/RewardsGrid';
import RedeemModal from '../../components/RedeemModal/RedeemModal';
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Sparkles } from 'lucide-react';
import Footer from '../../components/Footer';

type Category = 'All' | 'Appliance' | 'Voucher' | 'Donation' | 'Partner';

const Marketplace: React.FC = () => {
  const [filter, setFilter] = useState<Category>('All');
  const [isRedeemOpen, setIsRedeemOpen] = useState(false);
  const [activeNav, setActiveNav] = useState<string>('Dashboard');
    const navigate = useNavigate();
    const location = useLocation();

  useEffect(() => {
    document.title = "Rewards | Sinag";
  }, []);
  
  const rewards = useMemo(
    () => [
      { id: 'r1', title: 'LED Bulb Pack (10)', cost: 30, category: 'Appliance', image: '' },
      { id: 'r2', title: 'Smart Power Strip', cost: 50, category: 'Appliance', image: '' },
      { id: 'r3', title: 'Solar Charger', cost: 75, category: 'Appliance', image: '' },
      { id: 'r4', title: '₱500 Lazada Voucher', cost: 40, category: 'Voucher', image: '' },
      { id: 'r5', title: 'Donate 10 kWh Equivalent', cost: 20, category: 'Donation', image: '' },
      { id: 'r6', title: 'SM Appliance 10% Off', cost: 25, category: 'Partner', image: '' },
    ],
    []
  );

  const filtered = useMemo(() => {
    if (filter === 'All') return rewards;
    return rewards.filter((r) => r.category === filter);
  }, [filter, rewards]);

  const partners = ['Meralco', 'PE2', 'IBPAP', 'PGBC', 'PISI', 'SEIPI'];
  useEffect(() => {
      const path = location.pathname.toLowerCase();
      if (path.includes('/community')) setActiveNav('Community');
      else if (path.includes('/billtracker')) setActiveNav('Bill Tracker');
      else if (path.includes('/marketplace')) setActiveNav('Marketplace');
      else if (path.includes('/wallet')) setActiveNav('Wallet');
      else if (path.includes('/settings')) setActiveNav('Settings');
      else setActiveNav('Dashboard');
    }, [location.pathname]);
    
  return (
    <>

        {/* Glassmorphic Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 rounded-full backdrop-blur-md bg-glass-bg/5 border border-glass-border/5 mb-4 sm:mb-8 tracking-tight"
          style={{
            boxShadow: "inset 0 2px 12px rgba(255, 255, 255, 0.04)"
          }}
        >
          <Sparkles className="w-3 sm:w-4 h-3 sm:h-4 text-[#FDA205]" />
          <span className="text-xs sm:text-sm text-[#B4AFA8] font-secondary">Your Sinag Rewards</span>
        </div>
              
      <section className="mb-6">
        <h1 className="text-3xl font-semibold mb-2">Rewards Exchange</h1>
        <p className="text-sm text-neutral-400">Redeem your SINAG tokens for products, vouchers, donations, and partner discounts.</p>
      </section>

      {/* Partner carousel */}
 <section className="mb-6">
  <div className="overflow-x-auto py-3 scrollbar-hide">
    <div className="flex gap-5 sm:gap-6 items-center px-2">
      {partners.map((p) => (
        <div
          key={p}
          className="
            group
            relative
            flex-shrink-0 
            w-36 sm:w-44 
            h-20 sm:h-24 
            rounded-xl
            flex items-center justify-center
            transition-all duration-300
            hover:scale-[1.08] 
            hover:shadow-[0_8px_28px_rgba(0,0,0,0.3)]
            hover:border-white/20
            bg-white/5 
            backdrop-blur-xl 
            border border-white/10
            overflow-hidden
            cursor-pointer
          "
        >
          {/* Subtle top highlight */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-20 pointer-events-none" />

          {/* Logo */}
          <img
            src={`/${p.toUpperCase()}.png`}
            alt={p}
            className="w-[70%] h-[70%] object-contain opacity-90 group-hover:opacity-100 transition"
          />

        </div>
      ))}
    </div>
  </div>
</section>



      {/* Filters */}
      <section className="mb-6 flex items-center justify-between">
        <div className="flex gap-2">
          {(['All', 'Appliance', 'Voucher', 'Donation', 'Partner'] as Category[]).map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-3 py-1 text-sm rounded transition-all ${filter === c ? 'bg-[#FE9126] text-white' : 'text-neutral-300'}`}
              style={filter === c ? {} : {
                background: "rgba(255, 255, 255, 0.05)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                boxShadow: "inset 0 2px 12px rgba(255, 255, 255, 0.04)"
              }}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      {/* Rewards grid */}
      <section className="mb-8">
        <RewardsGrid rewards={filtered} onRedeem={() => setIsRedeemOpen(true)} />
      </section>

      {isRedeemOpen && <RedeemModal onClose={() => setIsRedeemOpen(false)} tokenBalance={75} />}
        <Footer />
    </>
  );
};

export default Marketplace;
