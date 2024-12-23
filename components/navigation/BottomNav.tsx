'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Battery, Award, User } from 'lucide-react';

const TABS = [
  { name: 'Home', path: '/', icon: Home },
  { name: 'Stats', path: '/stats', icon: Battery },
  { name: 'Achievements', path: '/achievements', icon: Award },
  { name: 'Profile', path: '/profile', icon: User },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 inset-x-0 bg-white border-t border-gray-200">
      <div className="grid grid-cols-4 h-16">
        {TABS.map((tab) => {
          const Icon = tab.icon;
          const isActive = pathname === tab.path;

          return (
            <Link
              key={tab.path}
              href={tab.path}
              className={`flex flex-col items-center justify-center space-y-1
                ${isActive ? 'text-primary' : 'text-gray-500'}`}
            >
              <Icon size={20} />
              <span className="text-xs">{tab.name}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}