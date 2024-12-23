import { Suspense } from 'react';
import ProfileForm from '@/components/features/ProfileForm';
import EnergySettings from '@/components/features/EnergySettings';
import LoadingSpinner from '@/components/common/LoadingSpinner';

export default function ProfilePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Profile Settings</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
          <Suspense fallback={<LoadingSpinner />}>
            <ProfileForm />
          </Suspense>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Energy Settings</h2>
          <Suspense fallback={<LoadingSpinner />}>
            <EnergySettings />
          </Suspense>
        </div>
      </div>
    </div>
  );
}