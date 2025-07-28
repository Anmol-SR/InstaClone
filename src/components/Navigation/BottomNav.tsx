import React from 'react';
import { Home, Search, PlaySquare, Heart, User } from 'lucide-react';

interface BottomNavProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export default function BottomNav({ activeTab, onTabChange }: BottomNavProps) {
  const tabs = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'search', icon: Search, label: 'Search' },
    { id: 'reels', icon: PlaySquare, label: 'Reels' },
    { id: 'notifications', icon: Heart, label: 'Notifications' },
    { id: 'profile', icon: User, label: 'Profile' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
      <div className="max-w-md mx-auto">
        <div className="flex items-center justify-around py-2">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            
            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`p-3 flex flex-col items-center space-y-1 transition-colors ${
                  isActive ? 'text-gray-900' : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                <Icon 
                  className={`h-6 w-6 ${isActive ? 'fill-current' : ''}`} 
                />
                <span className="text-xs font-medium">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}