import React, { useState } from 'react';
import { Instagram, Eye, EyeOff } from 'lucide-react';

interface SignupScreenProps {
  onSignup: () => void;
  onSwitchToLogin: () => void;
}

export default function SignupScreen({ onSignup, onSwitchToLogin }: SignupScreenProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    fullName: '',
    password: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSignup();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <Instagram className="h-12 w-12 text-pink-500" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Create account</h2>
          <p className="text-gray-600">Join the community today</p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <input
                name="email"
                type="email"
                autoComplete="email"
                required
                className="relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors"
                placeholder="Email address"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                name="fullName"
                type="text"
                autoComplete="name"
                required
                className="relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors"
                placeholder="Full name"
                value={formData.fullName}
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                name="username"
                type="text"
                autoComplete="username"
                required
                className="relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
              />
            </div>
            <div className="relative">
              <input
                name="password"
                type={showPassword ? 'text' : 'password'}
                autoComplete="new-password"
                required
                className="relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors pr-10"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5 text-gray-400" />
                ) : (
                  <Eye className="h-5 w-5 text-gray-400" />
                )}
              </button>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 transition-all duration-200 transform hover:scale-105"
            >
              Create account
            </button>
          </div>

          <div className="text-center">
            <button
              type="button"
              className="text-pink-600 hover:text-pink-500 font-medium transition-colors"
              onClick={onSwitchToLogin}
            >
              Already have an account? Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}