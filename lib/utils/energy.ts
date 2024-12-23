export function getEnergyColor(level: number): string {
  if (level >= 8) return 'text-green-500';
  if (level >= 5) return 'text-yellow-500';
  return 'text-red-500';
}

export function getEnergyLabel(level: number): string {
  if (level >= 8) return 'High Energy';
  if (level >= 5) return 'Moderate Energy';
  return 'Low Energy';
}

export function calculateAverageEnergy(levels: number[]): number {
  if (levels.length === 0) return 0;
  const sum = levels.reduce((acc, val) => acc + val, 0);
  return Math.round((sum / levels.length) * 10) / 10;
}