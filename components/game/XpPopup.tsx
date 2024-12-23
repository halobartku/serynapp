'use client';

type XpPopupProps = {
  xp: number;
  message?: string;
};

export default function XpPopup({ xp, message }: XpPopupProps) {
  return (
    <div className="fixed bottom-20 left-1/2 transform -translate-x-1/2 bg-primary text-white px-4 py-2 rounded-full shadow-lg animate-slide-up">
      <div className="flex items-center space-x-2">
        <span className="text-yellow-300">✨</span>
        <span>+{xp} XP</span>
        {message && (
          <span className="text-sm opacity-90">• {message}</span>
        )}
      </div>
    </div>
  );
}