import { Suspense } from 'react';
import AchievementList from '@/components/game/AchievementList';
import LoadingSpinner from '@/components/common/LoadingSpinner';

export default function AchievementsPage() {
  return (
    <main className="min-h-screen bg-gray-50 pb-16">
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Achievements</h1>
        
        <Suspense fallback={<LoadingSpinner />}>
          <AchievementList />
        </Suspense>
      </div>
    </main>
  );
}