import React, { useState, useRef, useEffect } from 'react';
import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal, Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { mockReels } from '../../data/mockData';

export default function ReelsScreen() {
  const [currentReel, setCurrentReel] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [likes, setLikes] = useState(mockReels.map(reel => ({ count: reel.likes, isLiked: reel.isLiked })));
  const containerRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (containerRef.current) {
      const scrollTop = containerRef.current.scrollTop;
      const windowHeight = window.innerHeight;
      const newCurrentReel = Math.round(scrollTop / windowHeight);
      setCurrentReel(newCurrentReel);
    }
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleLike = (index: number) => {
    setLikes(prev => prev.map((like, i) => 
      i === index 
        ? { 
            count: like.isLiked ? like.count - 1 : like.count + 1, 
            isLiked: !like.isLiked 
          }
        : like
    ));
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div className="max-w-md mx-auto bg-black min-h-screen relative overflow-hidden">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-30 bg-gradient-to-b from-black/70 via-black/20 to-transparent p-4">
        <h1 className="text-white text-xl font-bold text-center">Reels</h1>
      </div>

      {/* Reels Container */}
      <div 
        ref={containerRef}
        className="h-screen overflow-y-auto snap-y snap-mandatory scrollbar-hide"
        style={{ scrollBehavior: 'smooth' }}
      >
        {mockReels.map((reel, index) => (
          <div key={reel.id} className="relative h-screen w-full snap-start">
            {/* Video/Image Container */}
            <div className="relative h-full w-full bg-black">
              <img
                src={reel.video}
                alt="Reel"
                className="h-full w-full object-cover"
              />
              
              {/* Video Controls Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={togglePlayPause}
                  className={`transition-all duration-300 ${
                    isPlaying ? 'opacity-0 hover:opacity-100' : 'opacity-100'
                  }`}
                >
                  <div className="bg-black/50 backdrop-blur-sm rounded-full p-4 hover:bg-black/70 transition-colors">
                    {isPlaying ? (
                      <Pause className="h-12 w-12 text-white fill-white" />
                    ) : (
                      <Play className="h-12 w-12 text-white fill-white ml-1" />
                    )}
                  </div>
                </button>
              </div>

              {/* Progress Bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
                <div 
                  className="h-full bg-white transition-all duration-1000 ease-linear"
                  style={{ width: isPlaying ? '100%' : '0%' }}
                />
              </div>
            </div>

            {/* Right Side Actions */}
            <div className="absolute right-4 bottom-24 flex flex-col items-center space-y-6 z-20">
              <button 
                onClick={() => handleLike(index)}
                className="flex flex-col items-center space-y-1 group"
              >
                <div className="relative">
                  <Heart 
                    className={`h-8 w-8 transition-all duration-200 group-active:scale-125 ${
                      likes[index].isLiked 
                        ? 'fill-red-500 text-red-500' 
                        : 'text-white hover:text-red-400'
                    }`} 
                  />
                  {likes[index].isLiked && (
                    <div className="absolute inset-0 animate-ping">
                      <Heart className="h-8 w-8 fill-red-500 text-red-500 opacity-75" />
                    </div>
                  )}
                </div>
                <span className="text-white text-xs font-semibold">
                  {likes[index].count.toLocaleString()}
                </span>
              </button>
              
              <button className="flex flex-col items-center space-y-1 group">
                <MessageCircle className="h-8 w-8 text-white group-hover:scale-110 transition-transform" />
                <span className="text-white text-xs font-semibold">
                  {reel.comments}
                </span>
              </button>
              
              <button className="flex flex-col items-center space-y-1 group">
                <Send className="h-8 w-8 text-white group-hover:scale-110 transition-transform" />
                <span className="text-white text-xs font-semibold">
                  {reel.shares}
                </span>
              </button>
              
              <button className="group">
                <Bookmark className="h-8 w-8 text-white group-hover:scale-110 transition-transform" />
              </button>
              
              <button className="group">
                <MoreHorizontal className="h-8 w-8 text-white group-hover:scale-110 transition-transform" />
              </button>

              {/* Sound Control */}
              <button 
                onClick={toggleMute}
                className="group mt-4"
              >
                {isMuted ? (
                  <VolumeX className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
                ) : (
                  <Volume2 className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
                )}
              </button>
            </div>

            {/* Bottom Info */}
            <div className="absolute bottom-24 left-4 right-20 z-20">
              <div className="flex items-center space-x-3 mb-3">
                <div className="relative">
                  <img
                    src={reel.user.avatar}
                    alt={reel.user.username}
                    className="w-12 h-12 rounded-full border-2 border-white object-cover"
                  />
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center border-2 border-white">
                    <span className="text-white text-xs font-bold">+</span>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-white font-semibold text-lg">
                    {reel.user.username}
                  </span>
                  <button className="text-white border border-white px-4 py-1.5 rounded-full text-sm font-semibold hover:bg-white hover:text-black transition-all duration-200">
                    Follow
                  </button>
                </div>
              </div>
              
              <p className="text-white text-sm mb-2 leading-relaxed">
                {reel.caption}
              </p>

              {/* Trending Audio */}
              <div className="flex items-center space-x-2 text-white/80 text-xs">
                <div className="flex items-center space-x-1">
                  <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                  <span>Original audio • {reel.user.username}</span>
                </div>
              </div>
            </div>

            {/* Reel Indicator */}
            <div className="absolute top-20 right-4 z-20">
              <div className="bg-black/50 backdrop-blur-sm rounded-full px-3 py-1">
                <span className="text-white text-xs font-medium">
                  {index + 1} / {mockReels.length}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Double tap to like overlay */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <div className="h-full w-full flex items-center justify-center">
          <div className="opacity-0 animate-pulse">
            <Heart className="h-20 w-20 fill-red-500 text-red-500" />
          </div>
        </div>
      </div>
    </div>
  );
}