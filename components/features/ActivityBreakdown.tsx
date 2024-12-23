'use client';

import { useEnergyLogs } from '@/lib/hooks/useEnergyLogs';
import { calculateAverageEnergy } from '@/lib/utils/energy';

type ActivitySummary = {
  type: string;
  count: number;
  averageEnergy: number;
};

export default function ActivityBreakdown() {
  const { logs } = useEnergyLogs(30); // Last 30 days

  if (!logs || logs.length === 0) return null;

  // Group logs by activity type
  const activityGroups = logs.reduce((groups, log) => {
    const type = log.activity_type;
    if (!groups[type]) {
      groups[type] = {
        energyLevels: [],
        count: 0,
      };
    }
    groups[type].energyLevels.push(log.energy_level);
    groups[type].count++;
    return groups;
  }, {} as Record<string, { energyLevels: number[]; count: number; }>);

  // Calculate summaries
  const summaries: ActivitySummary[] = Object.entries(activityGroups).map(([type, data]) => ({
    type,
    count: data.count,
    averageEnergy: calculateAverageEnergy(data.energyLevels),
  }));

  // Sort by frequency
  summaries.sort((a, b) => b.count - a.count);

  return (
    <div className="bg-white rounded-lg shadow-sm p-4">
      <div className="space-y-4">
        {summaries.map((summary) => (
          <div key={summary.type} className="flex items-center justify-between">
            <div>
              <div className="font-medium">{summary.type.replace('_', ' ')}</div>
              <div className="text-sm text-gray-500">{summary.count} times</div>
            </div>
            <div className="text-right">
              <div className="font-medium">Avg. Energy</div>
              <div className="text-sm text-gray-500">{summary.averageEnergy}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}