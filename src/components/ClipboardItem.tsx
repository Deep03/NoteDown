import React from 'react';
import { ClipboardEntry } from '../types';
import { Check } from 'lucide-react';

interface ClipboardItemProps {
  entry: ClipboardEntry;
  theme?: 'dark' | 'light';
}

const ClipboardItem: React.FC<ClipboardItemProps> = ({ entry, theme = 'dark' }) => {
  const [copied, setCopied] = React.useState(false);

  const bgClass = theme === 'dark' 
    ? 'bg-[#1a1a1a] hover:bg-[#222222]' 
    : 'bg-gray-50 hover:bg-gray-100';
  const textClass = theme === 'dark' ? 'text-gray-100' : 'text-gray-900';

  const formatTime = (timestamp: number): string => {
    const date = new Date(timestamp);
    return new Intl.DateTimeFormat('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
      month: 'short',
      day: 'numeric',
    }).format(date);
  };

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(entry.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div 
      className={`${bgClass} rounded-xl p-5 mb-4 transition-all duration-300 shadow-lg cursor-pointer group hover:scale-[1.02]`}
      onClick={copyToClipboard}
    >
      <div className="flex justify-between items-start mb-3">
        <div className="text-sm text-gray-400">{formatTime(entry.timestamp)}</div>
        <div className={`transition-all duration-300 ${copied ? 'opacity-100' : 'opacity-0'}`}>
          <Check className="w-4 h-4 text-green-400" />
        </div>
      </div>
      <p className={`${textClass} break-words line-clamp-3 text-base`}>{entry.content}</p>
      <div className="mt-3 text-sm text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Click to copy
      </div>
    </div>
  );
};

export default ClipboardItem