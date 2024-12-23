const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;

export function calculateStreak(lastCheckIn: Date | null): number {
  if (!lastCheckIn) return 0;
  
  const now = new Date();
  const timeDiff = now.getTime() - lastCheckIn.getTime();
  const daysDiff = Math.floor(timeDiff / MILLISECONDS_PER_DAY);
  
  // Streak is broken if more than 1 day has passed
  if (daysDiff > 1) return 0;
  
  return daysDiff === 1 ? 1 : 0; // Increment streak for daily check-in
}

export function getStreakBonus(streakDays: number): number {
  // Bonus XP for maintaining streaks
  if (streakDays >= 30) return 50;  // Monthly streak
  if (streakDays >= 7) return 25;   // Weekly streak
  if (streakDays >= 3) return 10;   // Mini streak
  return 5; // Daily bonus
}