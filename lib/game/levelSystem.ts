export function calculateXpForLevel(level: number): number {
  // Base XP needed for each level with increasing difficulty
  return Math.floor(100 * Math.pow(1.2, level - 1));
}

export function calculateLevelFromXp(xp: number): number {
  let level = 1;
  let xpNeeded = calculateXpForLevel(level);
  
  while (xp >= xpNeeded) {
    level++;
    xpNeeded += calculateXpForLevel(level);
  }
  
  return level;
}

export function calculateProgress(currentXp: number, level: number): number {
  const currentLevelXp = calculateXpForLevel(level);
  const previousLevelXp = level > 1 ? calculateXpForLevel(level - 1) : 0;
  const levelProgress = currentXp - previousLevelXp;
  
  return Math.floor((levelProgress / (currentLevelXp - previousLevelXp)) * 100);
}