'use client';

const ACHIEVEMENTS = [
  {
    id: 'first-log',
    title: 'First Steps',
    description: 'Log your energy for the first time',
    icon: '🌟',
    xp: 50,
    unlocked: true,
  },
  {
    id: 'week-streak',
    title: 'Week Warrior',
    description: 'Log your energy every day for a week',
    icon: '🔥',
    xp: 100,
    unlocked: false,
  },
  {
    id: 'energy-master',
    title: 'Energy Master',
    description: 'Maintain high energy for 3 days straight',
    icon: '⚡',
    xp: 150,
    unlocked: false,
  },
  // Add more achievements...
];

export default function AchievementList() {
  return (
    <div className="grid gap-4">
      {ACHIEVEMENTS.map((achievement) => (
        <div 
          key={achievement.id}
          className={`p-4 rounded-lg ${achievement.unlocked ? 'bg-white' : 'bg-gray-100'}`}
        >
          <div className="flex items-center space-x-4">
            <div className="text-3xl">{achievement.icon}</div>
            <div className="flex-1">
              <h3 className="font-medium">{achievement.title}</h3>
              <p className="text-sm text-gray-600">{achievement.description}</p>
            </div>
            <div className="text-right">
              <div className="text-primary font-medium">{achievement.xp} XP</div>
              {!achievement.unlocked && (
                <div className="text-xs text-gray-500">Locked</div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}