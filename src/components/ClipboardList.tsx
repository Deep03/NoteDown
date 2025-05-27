import React from 'react';
import { ClipboardEntry } from '../types';
import ClipboardItem from './ClipboardItem';
import { ClipboardCopy } from 'lucide-react';

interface ClipboardListProps {
  entries: ClipboardEntry[];
  isLoading: boolean;
  theme: 'dark' | 'light';
}

const ClipboardList: React.FC<ClipboardListProps> = ({ entries, isLoading, theme }) => {
  const bgClass = theme === 'dark' ? 'bg-[#3c3c3e]' : 'bg-gray-100';
  const textClass = theme === 'dark' ? 'text-gray-300' : 'text-gray-700';

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-full">
        <div className="animate-pulse text-gray-400">Loading...</div>
      </div>
    );
  }

  if (entries.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center h-full text-center px-6">
        <div className={`${bgClass} p-4 rounded-2xl mb-6`}>
          <ClipboardCopy className="w-12 h-12 text-gray-500" />
        </div>
        <h3 className={`${textClass} text-xl font-medium mb-3`}>No clipboard history yet</h3>
        <p className="text-gray-400 text-base max-w-sm">
          Copy text to your clipboard and it will appear here automatically.
        </p>
      </div>
    );
  }

  return (
    <div className="py-4 px-6 overflow-y-auto h-full custom-scrollbar">
      {entries.map((entry) => (
        <ClipboardItem key={entry.id} entry={entry} theme={theme} />
      ))}
    </div>
  );
};

export default ClipboardList;