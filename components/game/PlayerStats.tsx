'use client';

type PlayerStatsProps = {
  level: number;
  xp: number;
  streak: number;
};

export default function PlayerStats({ level, xp, streak }: PlayerStatsProps) {
  const xpToNextLevel = level * 100;
  const progress = (xp / xpToNextLevel) * 100;

  return (
    <div className="bg-white rounded-lg p-4 shadow-sm">
      <div className="flex justify-between items-center mb-2">
        <div className="text-sm font-medium text-gray-500">Level {level}</div>
        <div className="text-sm text-primary">{xp}/{xpToNextLevel} XP</div>
      </div>

      {/* XP Progress Bar */}
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
        <div 
          className="h-full bg-primary transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Streak Display */}
      <div className="mt-3 flex items-center justify-center text-orange-500">
        <span className="text-lg mr-1">🔥</span>
        <span className="font-medium">{streak} day streak!</span>
      </div>
    </div>
  );
}