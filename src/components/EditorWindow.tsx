import React from 'react';
import { File } from '../types';
import FileTab from './FileTab';
import CodeFile from './CodeFile';

interface EditorWindowProps {
  activeFile: File | null;
  openFiles: File[];
  onFileClick: (file: File) => void;
  onCloseFile: (fileId: string, e: React.MouseEvent) => void;
}

const EditorWindow: React.FC<EditorWindowProps> = ({ 
  activeFile, 
  openFiles, 
  onFileClick, 
  onCloseFile 
}) => {
  return (
    <div className="flex-1 flex flex-col bg-[#1E1E1E]">
      {/* Tabs */}
      <div className="flex bg-[#252526] overflow-x-auto">
        {openFiles.map((file) => (
          <FileTab
            key={file.id}
            file={file}
            isActive={activeFile?.id === file.id}
            onClick={() => onFileClick(file)}
            onClose={(e) => onCloseFile(file.id, e)}
          />
        ))}
      </div>

      {/* Editor content */}
      <div className="flex-1 overflow-auto">
        {activeFile ? (
          <CodeFile file={activeFile} />
        ) : (
          <div className="flex items-center justify-center h-full text-gray-500">
            <div className="text-center">
              <h2 className="text-2xl mb-2">Welcome to VS Portfolio</h2>
              <p>Select a file from the sidebar to view content</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EditorWindow;