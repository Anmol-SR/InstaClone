import React from 'react';
import { Story } from '../../types';

interface StoriesProps {
  stories: Story[];
}

export default function Stories({ stories }: StoriesProps) {
  return (
    <div className="bg-white border-b border-gray-200 p-4">
      <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
        {stories.map((story) => (
          <div key={story.id} className="flex-shrink-0 text-center">
            <div className={`relative w-16 h-16 rounded-full p-0.5 ${
              story.isViewed 
                ? 'bg-gray-300' 
                : 'bg-gradient-to-tr from-pink-500 to-purple-600'
            }`}>
              <div className="w-full h-full rounded-full p-0.5 bg-white">
                <img
                  src={story.user.avatar}
                  alt={story.user.username}
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>
            <p className="text-xs text-gray-800 mt-1 font-medium truncate w-16">
              {story.user.username === 'sarah_travels' ? 'akash_dev' : story.user.username}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}