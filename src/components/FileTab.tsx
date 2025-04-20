import React from 'react';
import { X } from 'lucide-react';
import FileIcon from './FileIcon';
import { File } from '../types';

interface FileTabProps {
  file: File;
  isActive: boolean;
  onClick: () => void;
  onClose: (e: React.MouseEvent) => void;
}

const FileTab: React.FC<FileTabProps> = ({ file, isActive, onClick, onClose }) => {
  return (
    <div
      className={`flex items-center h-9 px-3 border-r border-[#1E1E1E] cursor-pointer ${
        isActive ? 'bg-[#1E1E1E]' : 'bg-[#2D2D2D] hover:bg-[#2D2D2D]'
      }`}
      onClick={onClick}
    >
      <FileIcon iconName={file.icon} language={file.language} />
      <span className="ml-1 text-sm">{file.name}</span>
      <div 
        className="ml-2 p-1 hover:bg-[#3C3C3C] rounded-sm" 
        onClick={onClose}
      >
        <X className="w-3 h-3" />
      </div>
    </div>
  );
};

export default FileTab;