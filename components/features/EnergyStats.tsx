'use client';

import { useEnergyLogs } from '@/lib/hooks/useEnergyLogs';
import { calculateAverageEnergy, getEnergyColor } from '@/lib/utils/energy';

export default function EnergyStats() {
  const { logs } = useEnergyLogs(7); // Last 7 days

  if (!logs || logs.length === 0) return null;

  const energyLevels = logs.map(log => log.energy_level);
  const averageEnergy = calculateAverageEnergy(energyLevels);
  const lowestEnergy = Math.min(...energyLevels);
  const highestEnergy = Math.max(...energyLevels);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <div className="text-sm text-gray-500">Average Energy</div>
        <div className={`text-2xl font-bold ${getEnergyColor(averageEnergy)}`}>
          {averageEnergy}
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-sm">
        <div className="text-sm text-gray-500">Lowest Energy</div>
        <div className={`text-2xl font-bold ${getEnergyColor(lowestEnergy)}`}>
          {lowestEnergy}
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-sm">
        <div className="text-sm text-gray-500">Highest Energy</div>
        <div className={`text-2xl font-bold ${getEnergyColor(highestEnergy)}`}>
          {highestEnergy}
        </div>
      </div>
    </div>
  );
}