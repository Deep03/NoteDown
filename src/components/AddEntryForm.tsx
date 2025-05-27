import React, { useState } from 'react';
import { Plus } from 'lucide-react';

interface AddEntryFormProps {
  onAdd: (content: string) => void;
  theme: 'dark' | 'light';
}

const AddEntryForm: React.FC<AddEntryFormProps> = ({ onAdd, theme }) => {
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (content.trim()) {
      onAdd(content);
      setContent('');
    }
  };

  const bgClass = theme === 'dark' ? 'bg-[#121212]/80' : 'bg-white/80';
  const borderClass = theme === 'dark' ? 'border-[#2a2a2a]' : 'border-gray-200/50';
  const inputBgClass = theme === 'dark' ? 'bg-[#1a1a1a]' : 'bg-gray-50';

  return (
    <form onSubmit={handleSubmit} className={`p-6 border-t ${borderClass} ${bgClass} glass-effect`}>
      <div className="flex gap-2">
        <input
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Add text manually..."
          className={`flex-1 ${inputBgClass} text-inherit px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-300`}
        />
        <button
          type="submit"
          className="bg-black hover:bg-[#222] text-white px-4 py-3 rounded-xl transition-all duration-300 flex items-center justify-center min-w-[48px] hover:scale-105"
        >
          <Plus className="w-5 h-5" />
        </button>
      </div>
    </form>
  );
};

export default AddEntryForm