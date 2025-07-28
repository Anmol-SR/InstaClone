import { User, Post, Story, Reel } from '../types';

export const mockUsers: User[] = [
  {
    id: '1',
    username: 'sarah_travels',
    name: 'Akash Gupta',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    bio: '💻 Software Developer | 🚀 Tech Enthusiast | 📱 Mobile App Creator',
    followers: 12500,
    following: 890,
    posts: 156
  },
  {
    id: '2',
    username: 'alex_fitness',
    name: 'Alex Chen',
    avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    bio: '💪 Fitness coach | 🥗 Nutrition tips',
    followers: 8900,
    following: 567,
    posts: 89
  },
  {
    id: '3',
    username: 'emma_art',
    name: 'Emma Wilson',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    bio: '🎨 Digital artist | 🌈 Creative soul',
    followers: 15600,
    following: 1200,
    posts: 234
  }
];

export const mockStories: Story[] = [
  {
    id: '1',
    user: mockUsers[0],
    image: 'https://images.pexels.com/photos/1660995/pexels-photo-1660995.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    isViewed: false
  },
  {
    id: '2',
    user: mockUsers[1],
    image: 'https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    isViewed: true
  },
  {
    id: '3',
    user: mockUsers[2],
    image: 'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    isViewed: false
  }
];

export const mockPosts: Post[] = [
  {
    id: '1',
    user: mockUsers[0],
    image: 'https://images.pexels.com/photos/1660995/pexels-photo-1660995.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
    caption: 'Amazing sunset in Bali! The colors were absolutely breathtaking 🌅 #travel #sunset #bali',
    likes: 1234,
    comments: 56,
    timestamp: '2h',
    isLiked: false
  },
  {
    id: '2',
    user: mockUsers[1],
    image: 'https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
    caption: 'Morning workout complete! 💪 Remember, consistency is key to achieving your fitness goals.',
    likes: 892,
    comments: 23,
    timestamp: '4h',
    isLiked: true
  },
  {
    id: '3',
    user: mockUsers[2],
    image: 'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
    caption: 'New digital artwork finished! This piece represents the harmony between nature and technology 🎨',
    likes: 756,
    comments: 34,
    timestamp: '6h',
    isLiked: false
  }
];

export const mockReels: Reel[] = [
  {
    id: '1',
    user: mockUsers[0],
    video: 'https://images.pexels.com/photos/1660995/pexels-photo-1660995.jpeg?auto=compress&cs=tinysrgb&w=400&h=700&fit=crop',
    caption: 'Quick travel tip: Always pack light! ✈️',
    likes: 2340,
    comments: 89,
    shares: 45,
    isLiked: true
  },
  {
    id: '2',
    user: mockUsers[1],
    video: 'https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=400&h=700&fit=crop',
    caption: '30-second abs workout you can do anywhere! 💪',
    likes: 1890,
    comments: 67,
    shares: 123,
    isLiked: false
  }
];