export type Profile = {
  id: string;
  name: string | null;
  avatar_url: string | null;
  baseline_energy: number;
  settings: ProfileSettings;
  created_at: string;
  updated_at: string;
};

export type ProfileSettings = {
  notifications: boolean;
  privacyLevel: 'private' | 'friends' | 'public';
  theme: 'light' | 'dark' | 'system';
  dailyReminder: string | null;
};

export type EnergyLog = {
  id: string;
  user_id: string;
  energy_level: number;
  activity_type: string;
  duration_minutes: number | null;
  notes: string | null;
  created_at: string;
};

export type ActivityType = {
  id: string;
  name: string;
  description: string | null;
  created_at: string;
};

export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: Profile;
        Insert: Omit<Profile, 'id' | 'created_at' | 'updated_at'>;
        Update: Partial<Omit<Profile, 'id'>>;
      };
      energy_logs: {
        Row: EnergyLog;
        Insert: Omit<EnergyLog, 'id' | 'created_at'>;
        Update: Partial<Omit<EnergyLog, 'id' | 'user_id'>>;
      };
      activity_types: {
        Row: ActivityType;
        Insert: Omit<ActivityType, 'id' | 'created_at'>;
        Update: Partial<Omit<ActivityType, 'id'>>;
      };
    };
  };
};