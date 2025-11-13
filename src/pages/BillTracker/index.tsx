import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import UploadBox from '../../components/UploadBox/UploadBox';
import BillSummaryCards from '../../components/BillSummaryCards/BillSummaryCards';
import BaselineChart from '../../components/Charts/BaselineChart';

const BillTracker: React.FC = () => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
    
  const handleFileUpload = (file: File) => {
    setUploadedFile(file);
    console.log('File uploaded:', file.name);
    // TODO: trigger OCR extraction here
  };
    
  return (
    
    <div className="relative min-h-screen bg-black text-white overflow-hidden pt-28">
       {/* 🔶 Background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#ffb84d]/20 via-[#ff8a00]/5 to-transparent blur-1xl"></div>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-gradient-radial from-[#ff8a00]/25 to-transparent blur-[200px] rounded-full"></div>
      <div className="relative z-10 p-6 max-w-7xl mx-auto">
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
      
      {/* Header */}
      <section className="mb-8">
        <h1 className="text-3xl font-semibold mb-2">Bill Management</h1>
        <p className="text-sm text-neutral-400">Upload and view your historical Meralco bills. Our AI will automatically parse and analyze them.</p>
      </section>

      {/* Upload Area */}
      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-4">Upload Your Bill</h2>
        <UploadBox onFileSelect={handleFileUpload} />
        {uploadedFile && (
          <p className="mt-2 text-sm text-green-400">✅ File selected: <strong>{uploadedFile.name}</strong></p>
        )}
      </section>

      {/* Bill Summary Cards */}
      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-4">Bill History</h2>
        <BillSummaryCards />
      </section>

      {/* AI Baseline Chart */}
      <section>
        <h2 className="text-lg font-semibold mb-4">Consumption Analysis</h2>
        <div className="bg-white/3 border border-white/[0.02]  backdrop-blur-md shadow-[inset_0px_1px_1px_1px_rgba(255,255,255,0.12)] rounded-lg p-6">
          <BaselineChart />
        </div>
      </section>
    </div>
    </div>
  );
};

export default BillTracker;
