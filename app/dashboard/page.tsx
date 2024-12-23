import { Suspense } from 'react';
import EnergyTracker from '@/components/features/EnergyTracker';
import EnergyGraph from '@/components/features/EnergyGraph';
import EnergyStats from '@/components/features/EnergyStats';
import ActivityBreakdown from '@/components/features/ActivityBreakdown';
import LoadingSpinner from '@/components/common/LoadingSpinner';

export default function DashboardPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Dashboard</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <EnergyTracker />
          
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Energy Trends</h2>
            <Suspense fallback={<LoadingSpinner />}>
              <EnergyGraph />
            </Suspense>
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">Quick Stats</h2>
            <Suspense fallback={<LoadingSpinner />}>
              <EnergyStats />
            </Suspense>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Activity Analysis</h2>
            <Suspense fallback={<LoadingSpinner />}>
              <ActivityBreakdown />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}