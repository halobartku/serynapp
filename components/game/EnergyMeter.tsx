'use client';

import { useState, useEffect } from 'react';

type EnergyMeterProps = {
  level: number;
  onChange: (level: number) => void;
};

export default function EnergyMeter({ level, onChange }: EnergyMeterProps) {
  return (
    <div className="relative w-full max-w-xs mx-auto">
      {/* Interactive Battery Visual */}
      <div className="h-40 w-20 mx-auto relative bg-gray-200 rounded-t-full rounded-b-full border-4 border-gray-300 overflow-hidden">
        <div 
          className="absolute bottom-0 w-full transition-all duration-500 ease-out rounded-b-full"
          style={{
            height: `${(level / 10) * 100}%`,
            backgroundColor: `hsl(${(level / 10) * 120}, 70%, 50%)`
          }}
        />
      </div>

      {/* Level Display */}
      <div className="mt-4 text-center text-2xl font-bold">
        {level * 10}%
      </div>

      {/* Interactive Slider */}
      <input
        type="range"
        min="1"
        max="10"
        value={level}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-4 w-full"
      />
    </div>
  );
}