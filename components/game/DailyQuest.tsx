'use client';

type Quest = {
  title: string;
  description: string;
  xp: number;
  completed: boolean;
};

const DAILY_QUESTS: Quest[] = [
  {
    title: 'Morning Check-in',
    description: 'Log your energy level before noon',
    xp: 20,
    completed: false,
  },
  {
    title: 'Energy Streak',
    description: 'Log your energy 3 times today',
    xp: 30,
    completed: false,
  },
  {
    title: 'Reflection Master',
    description: 'Add notes to your energy log',
    xp: 15,
    completed: false,
  },
];

export default function DailyQuest() {
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm">
      <h2 className="text-lg font-semibold mb-4">Daily Quests</h2>
      
      <div className="space-y-4">
        {DAILY_QUESTS.map((quest, index) => (
          <div 
            key={index}
            className={`p-3 rounded-lg border ${quest.completed ? 'bg-gray-50 border-gray-200' : 'border-primary'}`}
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium">{quest.title}</h3>
                <p className="text-sm text-gray-600">{quest.description}</p>
              </div>
              <div className="text-primary font-medium">+{quest.xp} XP</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}