import { useState } from 'react';
import { supabase } from '@/lib/supabase/client';

export default function EnergyTracker() {
  const [energyLevel, setEnergyLevel] = useState(5);
  const [activityType, setActivityType] = useState('');
  const [notes, setNotes] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { error } = await supabase
        .from('energy_logs')
        .insert([
          {
            energy_level: energyLevel,
            activity_type: activityType,
            notes,
          },
        ]);

      if (error) throw error;

      // Reset form
      setActivityType('');
      setNotes('');
    } catch (error) {
      console.error('Error logging energy:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Track Your Energy</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Energy Level: {energyLevel}
          </label>
          <input
            type="range"
            min="1"
            max="10"
            value={energyLevel}
            onChange={(e) => setEnergyLevel(Number(e.target.value))}
            className="w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Activity Type
          </label>
          <select
            value={activityType}
            onChange={(e) => setActivityType(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
            required
          >
            <option value="">Select an activity...</option>
            <option value="social_event">Social Event</option>
            <option value="work_meeting">Work Meeting</option>
            <option value="family_gathering">Family Gathering</option>
            <option value="public_space">Public Space</option>
            <option value="online_interaction">Online Interaction</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Notes
          </label>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
            rows={3}
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
        >
          {isLoading ? 'Saving...' : 'Log Energy'}
        </button>
      </form>
    </div>
  );
}