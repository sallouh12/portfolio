import React from 'react';
import { 
  FileJson, 
  FileCode, 
  FileText,
  Code
} from 'lucide-react';

interface FileIconProps {
  iconName: string;
  language: string;
}

const FileIcon: React.FC<FileIconProps> = ({ iconName, language }) => {
  // Map file icon based on name or language
  switch (iconName) {
    case 'FileJson':
      return <FileJson className="w-4 h-4 text-yellow-300" />;
    case 'FileCode':
      return <FileCode className="w-4 h-4 text-orange-300" />;
    case 'FileText':
      return <FileText className="w-4 h-4 text-blue-300" />;
    default:
      return <Code className="w-4 h-4 text-gray-400" />;
  }
};

export default FileIcon;