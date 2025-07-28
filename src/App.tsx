import React, { useState } from 'react';
import LoginScreen from './components/Auth/LoginScreen';
import SignupScreen from './components/Auth/SignupScreen';
import HomeScreen from './components/Home/HomeScreen';
import SearchScreen from './components/Search/SearchScreen';
import ReelsScreen from './components/Reels/ReelsScreen';
import NotificationsScreen from './components/Notifications/NotificationsScreen';
import ProfileScreen from './components/Profile/ProfileScreen';
import BottomNav from './components/Navigation/BottomNav';

type Screen = 'login' | 'signup' | 'home' | 'search' | 'reels' | 'notifications' | 'profile';

function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('login');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
    setCurrentScreen('home');
  };

  const handleSignup = () => {
    setIsAuthenticated(true);
    setCurrentScreen('home');
  };

  const handleTabChange = (tab: string) => {
    setCurrentScreen(tab as Screen);
  };

  const renderScreen = () => {
    if (!isAuthenticated) {
      switch (currentScreen) {
        case 'signup':
          return (
            <SignupScreen
              onSignup={handleSignup}
              onSwitchToLogin={() => setCurrentScreen('login')}
            />
          );
        default:
          return (
            <LoginScreen
              onLogin={handleLogin}
              onSwitchToSignup={() => setCurrentScreen('signup')}
            />
          );
      }
    }

    switch (currentScreen) {
      case 'search':
        return <SearchScreen />;
      case 'reels':
        return <ReelsScreen />;
      case 'notifications':
        return <NotificationsScreen />;
      case 'profile':
        return <ProfileScreen />;
      default:
        return <HomeScreen />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {renderScreen()}
      {isAuthenticated && (
        <BottomNav activeTab={currentScreen} onTabChange={handleTabChange} />
      )}
    </div>
  );
}

export default App;