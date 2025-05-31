# 📋 Notedown Clipboard History

A minimalistic clipboard history tracker built with **React**, storing recent copied items locally and displaying them with sleek UI animations.

🧠 Tracks up to 50 clipboard entries
⏱ Displays timestamps for every copied item
📦 Stores data in `localStorage` (IndexedDB support coming soon!)
🌓 Supports light and dark modes
✅ Built for speed and simplicity

---

## ✨ Features

* **Clipboard Tracking**: Automatically logs copied text to local history.
* **Persistent Storage**: Saves clipboard history using `localStorage` (with plans for IndexedDB support).
* **Time Metadata**: Each entry is timestamped and shown in human-readable format.
* **Copy-to-Clipboard UI**: Click any entry to copy it back to the clipboard.
* **Visual Feedback**: Animations and icons indicate copy success.
* **Theming**: Light/dark theme support based on user preference.

---

## 🧱 Project Structure

```
src/
├── components/
│   └── ClipboardItem.tsx       // Individual clipboard entry display
├── hooks/
│   └── useClipboardHistory.ts  // Custom hook for clipboard state logic
├── utils/
│   └── storage.ts              // Local storage access and helpers
├── types/
│   └── index.ts                // TypeScript interfaces
├── App.tsx                     // Main entry point
```

---

## 🧪 How It Works

* A custom React hook `useClipboardHistory` handles fetching, adding, and clearing clipboard entries.
* Entries are saved in `localStorage` with an ID, content, and timestamp.
* The UI displays each entry and offers a one-click recopy function.

---

## 🚀 Coming Soon
* 🕵️ Clipboard monitoring in the background
* 🔍 Search/filter clipboard history
---

## 🛠️ Tech Stack

* **Vite + React** with TypeScript
* **TailwindCSS** for UI styling
---

## 🧠 Inspiration

Necessity.

---

## 🧾 License

MIT License

---
