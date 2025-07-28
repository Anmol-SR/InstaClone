import React from 'react';
import { Instagram, MessageCircle } from 'lucide-react';
import Stories from './Stories';
import PostCard from './PostCard';
import { mockStories, mockPosts } from '../../data/mockData';

export default function HomeScreen() {
  return (
    <div className="max-w-md mx-auto bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between sticky top-0 z-10">
        <Instagram className="h-8 w-8 text-gray-900" />
        <h1 className="text-xl font-bold text-gray-900">Instagram</h1>
        <MessageCircle className="h-6 w-6 text-gray-900" />
      </div>

      {/* Stories */}
      <Stories stories={mockStories} />

      {/* Posts Feed */}
      <div className="space-y-0">
        {mockPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}