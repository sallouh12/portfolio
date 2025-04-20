import React, { useState } from 'react';
import Sidebar from './Sidebar';
import EditorWindow from './EditorWindow';
import StatusBar from './StatusBar';
import ActivityBar from './ActivityBar';
import { File } from '../types';

const VSCodeLayout: React.FC = () => {
  const [activeFile, setActiveFile] = useState<File | null>(null);
  const [openFiles, setOpenFiles] = useState<File[]>([]);
  
  const files: File[] = [
    { id: 'about', name: 'about.js', language: 'javascript', icon: 'FileJson' },
    { id: 'projects', name: 'projects.html', language: 'html', icon: 'FileCode' },
    { id: 'skills', name: 'skills.json', language: 'json', icon: 'FileJson' },
    { id: 'contact', name: 'contact.py', language: 'python', icon: 'FileText' },
  ];

  const handleFileClick = (file: File) => {
    // If file is not already open, add it to open files
    if (!openFiles.some(f => f.id === file.id)) {
      setOpenFiles([...openFiles, file]);
    }
    setActiveFile(file);
  };

  const handleCloseFile = (fileId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const newOpenFiles = openFiles.filter(file => file.id !== fileId);
    setOpenFiles(newOpenFiles);
    
    // If the active file is being closed, set the active file to the last open file
    if (activeFile && activeFile.id === fileId) {
      setActiveFile(newOpenFiles.length > 0 ? newOpenFiles[newOpenFiles.length - 1] : null);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-[#1E1E1E] text-gray-300 font-mono">
      <div className="flex-1 flex overflow-hidden">
        <ActivityBar />
        <Sidebar files={files} onFileClick={handleFileClick} activeFileId={activeFile?.id} />
        <EditorWindow 
          activeFile={activeFile} 
          openFiles={openFiles} 
          onFileClick={handleFileClick}
          onCloseFile={handleCloseFile}
        />
      </div>
      <StatusBar activeFile={activeFile} />
    </div>
  );
};

export default VSCodeLayout;