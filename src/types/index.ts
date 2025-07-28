export interface User {
  id: string;
  username: string;
  name: string;
  avatar: string;
  bio?: string;
  followers: number;
  following: number;
  posts: number;
}

export interface Post {
  id: string;
  user: User;
  image: string;
  caption: string;
  likes: number;
  comments: number;
  timestamp: string;
  isLiked: boolean;
}

export interface Story {
  id: string;
  user: User;
  image: string;
  isViewed: boolean;
}

export interface Reel {
  id: string;
  user: User;
  video: string;
  caption: string;
  likes: number;
  comments: number;
  shares: number;
  isLiked: boolean;
}