'use client';

import { useState } from 'react';
import EnergyMeter from './EnergyMeter';

export default function QuickLog() {
  const [energy, setEnergy] = useState(5);

  const handleQuickLog = () => {
    // TODO: Save energy log
    // Show achievement popup if applicable
  };

  return (
    <div className="bg-white rounded-lg p-4 shadow-sm">
      <h2 className="text-lg font-semibold mb-4">How's your energy?</h2>
      
      <EnergyMeter 
        level={energy}
        onChange={setEnergy}
      />

      <button
        onClick={handleQuickLog}
        className="mt-6 w-full py-3 bg-primary text-white rounded-full font-medium hover:bg-primary-dark transition-colors"
      >
        Log Now! +10 XP
      </button>
    </div>
  );
}