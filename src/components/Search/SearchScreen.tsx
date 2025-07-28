import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { mockUsers, mockPosts } from '../../data/mockData';

export default function SearchScreen() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredUsers = mockUsers.filter(user =>
    user.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen">
      {/* Header */}
      <div className="p-4 border-b border-gray-200">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:bg-white border border-transparent focus:border-pink-500 transition-all"
          />
        </div>
      </div>

      {searchQuery ? (
        /* Search Results */
        <div className="p-4">
          <h2 className="font-semibold text-gray-900 mb-4">Users</h2>
          <div className="space-y-3">
            {filteredUsers.map((user) => (
              <div key={user.id} className="flex items-center space-x-3">
                <img
                  src={user.avatar}
                  alt={user.username}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-1">
                  <p className="font-semibold text-gray-900">{user.username}</p>
                  <p className="text-gray-600 text-sm">{user.name}</p>
                </div>
                <button className="text-blue-600 font-semibold text-sm">
                  Follow
                </button>
              </div>
            ))}
          </div>
        </div>
      ) : (
        /* Explore Grid */
        <div className="grid grid-cols-3 gap-1">
          {mockPosts.concat(mockPosts).map((post, index) => (
            <div key={`explore-${index}`} className="aspect-square">
              <img
                src={post.image}
                alt="Explore post"
                className="w-full h-full object-cover hover:opacity-90 transition-opacity cursor-pointer"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}