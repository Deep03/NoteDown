import { useEffect } from 'react';
import Header from './components/Header';
import ClipboardList from './components/ClipboardList';
import AddEntryForm from './components/AddEntryForm';
import { useClipboardHistory } from './hooks/useClipboardHistory';
import { useTheme } from './hooks/useTheme';

function App() {
  const { entries, isLoading, addEntry, clearHistory } = useClipboardHistory();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const checkClipboard = async () => {
      try {
        const text = await navigator.clipboard.readText();
        if (text && text.trim() !== '') {
          const isDuplicate = entries.some(entry => entry.content === text);
          if (!isDuplicate) {
            addEntry(text);
          }
        }
      } catch (error) {}
    };

    const intervalId = setInterval(checkClipboard, 5000);
    return () => clearInterval(intervalId);
  }, [entries, addEntry]);

  const bgColor = theme === 'dark' ? 'bg-black' : 'bg-gray-50';
  const containerBg = theme === 'dark' ? 'bg-[#121212]' : 'bg-white';

  return (
    <div className={`${bgColor} text-gray-100 min-h-screen flex flex-col transition-colors duration-300`}>
      <div className={`w-full h-full mx-auto ${containerBg} shadow-2xl flex flex-col min-h-screen transition-colors duration-300`}>
        <Header onClear={clearHistory} onToggleTheme={toggleTheme} theme={theme} />
        <div className="flex-1 overflow-hidden relative">
          <div className="absolute inset-0">
            <ClipboardList entries={entries} isLoading={isLoading} theme={theme} />
          </div>
        </div>
        <AddEntryForm onAdd={addEntry} theme={theme} />
      </div>
    </div>
  );
}

export default App;