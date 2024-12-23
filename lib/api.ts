import { supabase } from './supabase/client';
import { type Database } from '@/types/database';

export async function getProfile() {
  const { data: profile, error } = await supabase
    .from('profiles')
    .select('*')
    .single();

  if (error) throw error;
  return profile;
}

export async function updateProfile(updates: Database['public']['Tables']['profiles']['Update']) {
  const { data, error } = await supabase
    .from('profiles')
    .update(updates)
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function getEnergyLogs(limit = 10) {
  const { data: logs, error } = await supabase
    .from('energy_logs')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(limit);

  if (error) throw error;
  return logs;
}

export async function createEnergyLog(log: Database['public']['Tables']['energy_logs']['Insert']) {
  const { data, error } = await supabase
    .from('energy_logs')
    .insert(log)
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function getActivityTypes() {
  const { data: types, error } = await supabase
    .from('activity_types')
    .select('*')
    .order('name');

  if (error) throw error;
  return types;
}