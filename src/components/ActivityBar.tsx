import React from 'react';
import { FileText, Code, User, BookOpen, Mail, Github } from 'lucide-react';

const ActivityBar: React.FC = () => {
  return (
    <div className="w-12 bg-[#252526] flex flex-col items-center py-4 border-r border-[#1E1E1E]">
      <div className="mb-4">
        <User className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
      </div>
      <div className="mb-4">
        <FileText className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
      </div>
      <div className="mb-4">
        <Code className="w-6 h-6 text-white cursor-pointer" />
      </div>
      <div className="mb-4">
        <BookOpen className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
      </div>
      <div className="mb-4">
        <Mail className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
      </div>
      <div className="mt-auto">
        <Github className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
      </div>
    </div>
  );
};

export default ActivityBar;