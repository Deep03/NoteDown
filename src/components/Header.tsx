import React from 'react';
import { Clipboard, Trash2, Sun, Moon } from 'lucide-react';

interface HeaderProps {
  onClear: () => void;
  onToggleTheme: () => void;
  theme: 'dark' | 'light';
}

const Header: React.FC<HeaderProps> = ({ onClear, onToggleTheme, theme }) => {
  const bgClass = theme === 'dark' ? 'bg-[#121212]/80' : 'bg-white/80';
  const borderClass = theme === 'dark' ? 'border-[#2a2a2a]' : 'border-gray-200/50';
  const textClass = theme === 'dark' ? 'text-white' : 'text-gray-900';

  return (
    <header className={`${bgClass} glass-effect ${textClass} p-6 flex justify-between items-center sticky top-0 z-10 border-b ${borderClass}`}>
      <div className="flex items-center space-x-3">
        <div className="bg-black p-2 rounded-xl">
          <Clipboard className="w-6 h-6 text-white" />
        </div>
        <h1 className="text-2xl font-medium tracking-tight">Notedown</h1>
      </div>
      <div className="flex items-center space-x-4">
        <button
          onClick={onToggleTheme}
          className={`theme-toggle ${theme === 'light' ? 'active bg-blue-500' : 'bg-black'}`}
          aria-label="Toggle theme"
        >
          <span className="sr-only">Toggle theme</span>
        </button>
        <button
          onClick={onClear}
          className="px-4 py-2 text-sm bg-red-500/10 hover:bg-red-500/20 text-red-400 rounded-xl transition-all duration-300 flex items-center space-x-2"
          aria-label="Clear history"
        >
          <Trash2 className="w-4 h-4" />
          <span>Clear All</span>
        </button>
      </div>
    </header>
  );
};

export default Header