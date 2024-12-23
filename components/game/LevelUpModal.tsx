'use client';

type LevelUpModalProps = {
  level: number;
  onClose: () => void;
};

export default function LevelUpModal({ level, onClose }: LevelUpModalProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose} />
      
      <div className="bg-white rounded-lg p-6 transform animate-bounce-in text-center max-w-sm w-full relative z-10">
        <div className="text-6xl mb-4">⭐</div>
        <h2 className="text-2xl font-bold mb-2">Level Up!</h2>
        <p className="text-xl text-primary mb-4">You reached Level {level}</p>
        <p className="text-gray-600 mb-6">Keep going! New challenges await.</p>
        
        <button
          onClick={onClose}
          className="w-full py-3 bg-primary text-white rounded-full font-medium hover:bg-primary-dark transition-colors"
        >
          Continue
        </button>
      </div>
    </div>
  );
}