import React from 'react';
import { ChevronDown, FolderOpen } from 'lucide-react';
import FileIcon from './FileIcon';
import { File } from '../types';

interface SidebarProps {
  files: File[];
  onFileClick: (file: File) => void;
  activeFileId: string | undefined;
}

const Sidebar: React.FC<SidebarProps> = ({ files, onFileClick, activeFileId }) => {
  return (
    <div className="w-64 bg-[#252526] overflow-y-auto border-r border-[#1E1E1E]">
      <div className="p-2 text-sm text-gray-400 uppercase tracking-wider">
        Explorer
      </div>
      
      <div className="px-2 py-1 flex items-center text-gray-300 bg-[#2D2D2D] cursor-pointer">
        <ChevronDown className="w-4 h-4 mr-1" />
        <FolderOpen className="w-4 h-4 mr-1 text-blue-300" />
        <span className="font-semibold">PORTFOLIO</span>
      </div>
      
      <div className="pl-4">
        {files.map(file => (
          <div
            key={file.id}
            className={`flex items-center p-1 cursor-pointer hover:bg-[#2D2D2D] ${
              activeFileId === file.id ? 'bg-[#37373D]' : ''
            }`}
            onClick={() => onFileClick(file)}
          >
            <FileIcon iconName={file.icon} language={file.language} />
            <span className="ml-1 text-sm">{file.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;