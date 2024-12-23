'use client';

export type Achievement = {
  id: string;
  title: string;
  description: string;
  icon: string;
  xp: number;
};

type AchievementPopupProps = {
  achievement: Achievement;
  onClose: () => void;
};

export default function AchievementPopup({ achievement, onClose }: AchievementPopupProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose} />
      
      <div className="bg-white rounded-lg p-6 transform animate-bounce-in relative z-10 max-w-sm w-full">
        <div className="text-center">
          <div className="text-4xl mb-2">{achievement.icon}</div>
          <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
          <p className="text-gray-600 mb-4">{achievement.description}</p>
          <div className="text-primary font-bold">+{achievement.xp} XP</div>
          
          <button
            onClick={onClose}
            className="mt-4 px-4 py-2 bg-primary text-white rounded-full hover:bg-primary-dark transition-colors"
          >
            Awesome!
          </button>
        </div>
      </div>
    </div>
  );
}