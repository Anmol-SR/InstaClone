import React from 'react';
import { mockUsers } from '../../data/mockData';

export default function NotificationsScreen() {
  const notifications = [
    {
      id: '1',
      user: mockUsers[1],
      type: 'like',
      message: 'liked your photo.',
      time: '2h',
      postImage: 'https://images.pexels.com/photos/1660995/pexels-photo-1660995.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
    },
    {
      id: '2',
      user: mockUsers[2],
      type: 'follow',
      message: 'started following you.',
      time: '4h'
    },
    {
      id: '3',
      user: mockUsers[0],
      type: 'comment',
      message: 'commented on your photo.',
      time: '6h',
      postImage: 'https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
    }
  ];

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen">
      {/* Header */}
      <div className="p-4 border-b border-gray-200">
        <h1 className="text-xl font-bold text-gray-900">Notifications</h1>
      </div>

      {/* Notifications List */}
      <div className="divide-y divide-gray-100">
        {notifications.map((notification) => (
          <div key={notification.id} className="p-4 flex items-center space-x-3">
            <img
              src={notification.user.avatar}
              alt={notification.user.username}
              className="w-10 h-10 rounded-full object-cover"
            />
            
            <div className="flex-1">
              <p className="text-sm">
                <span className="font-semibold">{notification.user.username}</span>
                <span className="text-gray-600 ml-1">{notification.message}</span>
                <span className="text-gray-400 ml-1">{notification.time}</span>
              </p>
            </div>

            {notification.postImage ? (
              <img
                src={notification.postImage}
                alt="Post"
                className="w-10 h-10 object-cover"
              />
            ) : (
              <button className="bg-blue-500 text-white px-4 py-1 rounded-md text-sm font-semibold hover:bg-blue-600 transition-colors">
                Follow
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}