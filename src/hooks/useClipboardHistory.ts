import { useState, useEffect } from 'react';
import { ClipboardEntry } from '../types';
import { getClipboardHistory, saveClipboardHistory, clearClipboardHistory } from '../utils/storage';

export const useClipboardHistory = () => {
  const [entries, setEntries] = useState<ClipboardEntry[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load clipboard history from storage on component mount
    const loadHistory = () => {
      const history = getClipboardHistory();
      setEntries(history);
      setIsLoading(false);
    };

    loadHistory();
  }, []);

  const addEntry = (content: string) => {
    const newEntry: ClipboardEntry = {
      id: crypto.randomUUID(),
      content,
      timestamp: Date.now(),
    };

    const updatedEntries = [newEntry, ...entries];
    setEntries(updatedEntries);
    saveClipboardHistory(updatedEntries);
  };

  const clearHistory = () => {
    setEntries([]);
    clearClipboardHistory();
  };

  return {
    entries,
    isLoading,
    addEntry,
    clearHistory,
  };
};