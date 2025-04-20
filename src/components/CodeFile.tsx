import React from 'react';
import AboutContent from '../content/AboutContent';
import ProjectsContent from '../content/ProjectsContent';
import SkillsContent from '../content/SkillsContent';
import ContactContent from '../content/ContactContent';
import { File } from '../types';

interface CodeFileProps {
  file: File;
}

const CodeFile: React.FC<CodeFileProps> = ({ file }) => {
  // Map file ID to content component
  const getContent = () => {
    switch (file.id) {
      case 'about':
        return <AboutContent />;
      case 'projects':
        return <ProjectsContent />;
      case 'skills':
        return <SkillsContent />;
      case 'contact':
        return <ContactContent />;
      default:
        return <div>File not found</div>;
    }
  };

  return (
    <div className="flex h-full">
      {/* Line numbers */}
      <div className="w-12 text-right pr-2 bg-[#1E1E1E] text-gray-600 select-none border-r border-[#333333]">
        {Array.from({ length: 30 }, (_, i) => i + 1).map(num => (
          <div key={num} className="leading-6 text-xs">
            {num}
          </div>
        ))}
      </div>
      
      {/* Content */}
      <div className="flex-1 p-2 overflow-auto bg-[#1E1E1E]">
        {getContent()}
      </div>
    </div>
  );
};

export default CodeFile;