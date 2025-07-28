import React from 'react';
import { Settings, Grid, Bookmark, UserPlus, MoreHorizontal } from 'lucide-react';
import { mockUsers, mockPosts } from '../../data/mockData';

export default function ProfileScreen() {
  const user = mockUsers[0]; // Using Akash Gupta as current user
  const userPosts = mockPosts.filter(post => post.user.id === user.id);

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <h1 className="text-xl font-bold">{user.username}</h1>
        <div className="flex items-center space-x-4">
          <UserPlus className="h-6 w-6" />
          <Settings className="h-6 w-6" />
        </div>
      </div>

      {/* Profile Info */}
      <div className="p-4">
        <div className="flex items-center space-x-4 mb-4">
          <img
            src={user.avatar}
            alt={user.username}
            className="w-20 h-20 rounded-full object-cover"
          />
          
          <div className="flex-1">
            <div className="flex justify-around">
              <div className="text-center">
                <div className="font-bold text-lg">{user.posts}</div>
                <div className="text-gray-600 text-sm">Posts</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-lg">{user.followers.toLocaleString()}</div>
                <div className="text-gray-600 text-sm">Followers</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-lg">{user.following.toLocaleString()}</div>
                <div className="text-gray-600 text-sm">Following</div>
              </div>
            </div>
          </div>
        </div>

        {/* Name and Bio */}
        <div className="mb-4">
          <h2 className="font-semibold text-gray-900">{user.name}</h2>
          <p className="text-gray-600">{user.bio}</p>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-2 mb-6">
          <button className="flex-1 bg-gray-100 text-gray-900 py-2 px-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
            Edit Profile
          </button>
          <button className="flex-1 bg-gray-100 text-gray-900 py-2 px-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
            Share Profile
          </button>
          <button className="bg-gray-100 p-2 rounded-lg hover:bg-gray-200 transition-colors">
            <MoreHorizontal className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-t border-gray-200">
        <div className="flex">
          <button className="flex-1 py-3 flex items-center justify-center space-x-2 border-t-2 border-gray-900">
            <Grid className="h-5 w-5" />
          </button>
          <button className="flex-1 py-3 flex items-center justify-center space-x-2 text-gray-400">
            <Bookmark className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Posts Grid */}
      <div className="grid grid-cols-3 gap-1">
        {userPosts.map((post) => (
          <div key={post.id} className="aspect-square">
            <img
              src={post.image}
              alt="Post"
              className="w-full h-full object-cover hover:opacity-90 transition-opacity cursor-pointer"
            />
          </div>
        ))}
        {/* Add more placeholder posts to fill the grid */}
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={`placeholder-${index}`} className="aspect-square">
            <img
              src={`https://images.pexels.com/photos/${1660995 + index}/pexels-photo-${1660995 + index}.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop`}
              alt="Post"
              className="w-full h-full object-cover hover:opacity-90 transition-opacity cursor-pointer"
            />
          </div>
        ))}
      </div>
    </div>
  );
}