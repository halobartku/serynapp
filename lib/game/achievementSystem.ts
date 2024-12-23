import { supabase } from '@/lib/supabase/client';

export async function checkAchievements(userId: string) {
  // Get user's current stats
  const { data: stats } = await supabase
    .from('player_stats')
    .select('*')
    .eq('user_id', userId)
    .single();

  if (!stats) return [];

  // Get all achievements
  const { data: achievements } = await supabase
    .from('achievements')
    .select('*');

  if (!achievements) return [];

  // Get user's unlocked achievements
  const { data: unlockedAchievements } = await supabase
    .from('user_achievements')
    .select('achievement_id')
    .eq('user_id', userId);

  const unlocked = unlockedAchievements?.map(ua => ua.achievement_id) || [];

  // Return newly unlocked achievements
  return achievements.filter(achievement => {
    if (unlocked.includes(achievement.id)) return false;

    // Check conditions
    switch (achievement.type) {
      case 'streak':
        return stats.streak_days >= achievement.threshold;
      case 'level':
        return stats.level >= achievement.threshold;
      default:
        return false;
    }
  });
}