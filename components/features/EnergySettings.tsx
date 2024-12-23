'use client';

import { useState } from 'react';
import { useProfile } from '@/lib/hooks/useProfile';

export default function EnergySettings() {
  const { profile, updateProfile, isLoading } = useProfile();
  const [baselineEnergy, setBaselineEnergy] = useState(profile?.baseline_energy || 5);
  const [settings, setSettings] = useState(profile?.settings || {
    notifications: true,
    privacyLevel: 'private',
    theme: 'light',
    dailyReminder: null,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await updateProfile({
      baseline_energy: baselineEnergy,
      settings,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-sm rounded-lg p-6">
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Baseline Energy Level: {baselineEnergy}
          </label>
          <input
            type="range"
            min="1"
            max="10"
            value={baselineEnergy}
            onChange={(e) => setBaselineEnergy(Number(e.target.value))}
            className="w-full mt-2"
          />
          <p className="text-sm text-gray-500 mt-1">
            Your typical energy level on an average day
          </p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Privacy Level
          </label>
          <select
            value={settings.privacyLevel}
            onChange={(e) => setSettings({ ...settings, privacyLevel: e.target.value as any })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
          >
            <option value="private">Private</option>
            <option value="friends">Friends Only</option>
            <option value="public">Public</option>
          </select>
        </div>

        <div>
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={settings.notifications}
              onChange={(e) => setSettings({ ...settings, notifications: e.target.checked })}
              className="rounded border-gray-300 text-primary focus:ring-primary"
            />
            <span className="ml-2 text-sm text-gray-700">Enable Notifications</span>
          </label>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Daily Reminder Time
          </label>
          <input
            type="time"
            value={settings.dailyReminder || ''}
            onChange={(e) => setSettings({ ...settings, dailyReminder: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
        >
          {isLoading ? 'Saving...' : 'Save Settings'}
        </button>
      </div>
    </form>
  );
}