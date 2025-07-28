import React, { useState } from 'react';
import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal } from 'lucide-react';
import { Post } from '../../types';

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  const [isLiked, setIsLiked] = useState(post.isLiked);
  const [likes, setLikes] = useState(post.likes);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes(prev => isLiked ? prev - 1 : prev + 1);
  };

  return (
    <div className="bg-white border-b border-gray-200">
      {/* Post Header */}
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center space-x-3">
          <img
            src={post.user.avatar}
            alt={post.user.username}
            className="w-8 h-8 rounded-full object-cover"
          />
          <div>
            <p className="font-semibold text-sm text-gray-900">{post.user.username}</p>
          </div>
        </div>
        <button className="p-1">
          <MoreHorizontal className="h-5 w-5 text-gray-600" />
        </button>
      </div>

      {/* Post Image */}
      <div className="relative">
        <img
          src={post.image}
          alt="Post"
          className="w-full aspect-square object-cover"
        />
      </div>

      {/* Post Actions */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-4">
            <button onClick={handleLike} className="transition-transform hover:scale-110">
              <Heart 
                className={`h-6 w-6 ${isLiked ? 'fill-red-500 text-red-500' : 'text-gray-900'}`} 
              />
            </button>
            <button className="transition-transform hover:scale-110">
              <MessageCircle className="h-6 w-6 text-gray-900" />
            </button>
            <button className="transition-transform hover:scale-110">
              <Send className="h-6 w-6 text-gray-900" />
            </button>
          </div>
          <button className="transition-transform hover:scale-110">
            <Bookmark className="h-6 w-6 text-gray-900" />
          </button>
        </div>

        {/* Likes */}
        <p className="font-semibold text-sm mb-2">
          {likes.toLocaleString()} likes
        </p>

        {/* Caption */}
        <div className="text-sm">
          <span className="font-semibold mr-2">
            {post.user.username === 'sarah_travels' ? 'akash_dev' : post.user.username}
          </span>
          <span className="text-gray-900">{post.caption}</span>
        </div>

        {/* Comments */}
        <button className="text-gray-500 text-sm mt-1">
          View all {post.comments} comments
        </button>

        {/* Timestamp */}
        <p className="text-gray-400 text-xs mt-1 uppercase tracking-wide">
          {post.timestamp} ago
        </p>
      </div>
    </div>
  );
}