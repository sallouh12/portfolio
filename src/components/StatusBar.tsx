import React from 'react';
import { Wifi, Github as Git, GitBranch } from 'lucide-react';
import { File } from '../types';

interface StatusBarProps {
  activeFile: File | null;
}

const StatusBar: React.FC<StatusBarProps> = ({ activeFile }) => {
  const languageMap: Record<string, string> = {
    javascript: 'JavaScript',
    html: 'HTML',
    json: 'JSON',
    python: 'Python',
  };

  return (
    <div className="h-6 bg-[#007ACC] text-white flex items-center justify-between px-2 text-xs">
      <div className="flex items-center space-x-3">
        <div className="flex items-center">
          <GitBranch className="w-3 h-3 mr-1" />
          <span>main</span>
        </div>
        <div className="flex items-center">
          <Git className="w-3 h-3 mr-1" />
          <span>0 ↓ 0 ↑</span>
        </div>
      </div>
      <div className="flex items-center space-x-3">
        {activeFile && (
          <span>{languageMap[activeFile.language] || activeFile.language}</span>
        )}
        <span>UTF-8</span>
        <span>LF</span>
        <div className="flex items-center">
          <Wifi className="w-3 h-3 mr-1" />
          <span>Connected</span>
        </div>
      </div>
    </div>
  );
};

export default StatusBar;