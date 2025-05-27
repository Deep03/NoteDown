import { ClipboardEntry } from '../types';

const STORAGE_KEY = 'notedown_clipboard_history';

export const getClipboardHistory = (): ClipboardEntry[] => {
  const history = localStorage.getItem(STORAGE_KEY);
  return history ? JSON.parse(history) : [];
};

export const saveClipboardHistory = (history: ClipboardEntry[]): void => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
};

export const addClipboardEntry = (content: string): void => {
  const history = getClipboardHistory();
  const date = Date.now();
  const newEntry: ClipboardEntry = {
    id: crypto.randomUUID(),
    content,
    timestamp: date,
  };
  // Add to beginning of array (most recent first)
  const updatedHistory = [newEntry, ...history];

  saveClipboardHistory(updatedHistory);
};



export const clearClipboardHistory = (): void => {
  localStorage.removeItem(STORAGE_KEY);
};