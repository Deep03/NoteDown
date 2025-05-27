import { useState, useEffect } from 'react';
import { ClipboardEntry } from '../types';
import {
  getClipboardHistory,
  clearClipboardHistory,
  addClipboardEntry,
} from '../utils/storage';

export const useClipboardHistory = () => {
  const [entries, setEntries] = useState<ClipboardEntry[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadHistory = () => {
      const history = getClipboardHistory();
      setEntries(history);
      setIsLoading(false);
    };

    loadHistory();
  }, []);

  const addEntry = (content: string) => {
    addClipboardEntry(content);
    const updated = getClipboardHistory();

    setEntries(updated);
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
