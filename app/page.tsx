import { Suspense } from 'react';
import QuickLog from '@/components/game/QuickLog';
import DailyQuest from '@/components/game/DailyQuest';
import PlayerStats from '@/components/game/PlayerStats';
import LoadingSpinner from '@/components/common/LoadingSpinner';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50 pb-16">
      {/* Top Section */}
      <div className="bg-primary text-white p-4">
        <Suspense fallback={<LoadingSpinner />}>
          <PlayerStats level={1} xp={50} streak={3} />
        </Suspense>
      </div>

      {/* Quick Actions */}
      <div className="p-4">
        <QuickLog />
      </div>

      {/* Daily Quest */}
      <div className="p-4">
        <DailyQuest />
      </div>
    </main>
  );
}