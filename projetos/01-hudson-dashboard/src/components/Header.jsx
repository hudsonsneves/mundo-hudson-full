import React from 'react';
import { Menu, Bell, User, Search } from 'lucide-react';

export const Header = () => {
  return (
    <header className="bg-hudson-blue text-white p-4 shadow-xl">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <h1 className="text-xl font-bold">📊 Hudson Dashboard</h1>
        </div>
        <div className="flex items-center gap-4">
          <button className="relative hover:bg-white/10 p-2 rounded transition">
            <Bell size={20} />
          </button>
          <button className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition">
            <User size={18} />
          </button>
        </div>
      </div>
    </header>
  );
};