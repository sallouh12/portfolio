import React, { useState } from 'react';
import TypingEffect from '../components/TypingEffect';

const ContactContent: React.FC = () => {
  const [command, setCommand] = useState('');
  const [history, setHistory] = useState<string[]>([
    '# Welcome to Contact Terminal',
    '# Type "help" to see available commands'
  ]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      // Process the command
      processCommand(command);
      // Clear the command input
      setCommand('');
    }
  };

  const processCommand = (cmd: string) => {
    setHistory(prev => [...prev, `$ ${cmd}`]);
    
    const lowerCmd = cmd.toLowerCase().trim();
    
    if (lowerCmd === 'help') {
      setHistory(prev => [...prev, 
        'Available commands:',
        '  email - Send me an email',
        '  github - View my GitHub profile',
        '  linkedin - Visit my LinkedIn profile',
        '  twitter - Follow me on Twitter',
        '  clear - Clear the terminal'
      ]);
    } else if (lowerCmd === 'email') {
      setHistory(prev => [...prev, 'Opening email client...']);
      window.open('mailto:john.doe@example.com', '_blank');
    } else if (lowerCmd === 'github') {
      setHistory(prev => [...prev, 'Opening GitHub profile...']);
      window.open('https://github.com/username', '_blank');
    } else if (lowerCmd === 'linkedin') {
      setHistory(prev => [...prev, 'Opening LinkedIn profile...']);
      window.open('https://linkedin.com/in/username', '_blank');
    } else if (lowerCmd === 'twitter') {
      setHistory(prev => [...prev, 'Opening Twitter profile...']);
      window.open('https://twitter.com/username', '_blank');
    } else if (lowerCmd === 'clear') {
      setHistory([
        '# Welcome to Contact Terminal',
        '# Type "help" to see available commands'
      ]);
    } else if (lowerCmd === '') {
      // Do nothing for empty command
    } else {
      setHistory(prev => [...prev, `Command not found: ${cmd}. Type "help" for available commands.`]);
    }
  };

  return (
    <div className="font-mono text-sm">
      <div className="text-green-400"># contact.py - Get in touch with me</div>
      
      <div className="mt-4">
        <div className="text-blue-400">def</div>{' '}
        <span className="text-yellow-300">contact_information</span>
        <span className="text-white">():</span>
      </div>
      
      <div className="ml-4 mb-8">
        <div>
          <span className="text-purple-400">email</span>{' '}
          <span className="text-white">=</span>{' '}
          <span className="text-green-300">"sallouhabdu@gmail.com"</span>
        </div>
        <div>
          <span className="text-purple-400">phone</span>{' '}
          <span className="text-white">=</span>{' '}
          <span className="text-green-300">"+212 701189725"</span>
        </div>
        <div>
          <span className="text-purple-400">location</span>{' '}
          <span className="text-white">=</span>{' '}
          <span className="text-green-300">"LAAYOUNE"</span>
        </div>
        <div>
          <span className="text-blue-400">return</span>{' '}
          <span className="text-purple-400">email</span>
          <span className="text-white">,</span>{' '}
          <span className="text-purple-400">phone</span>
          <span className="text-white">,</span>{' '}
          <span className="text-purple-400">location</span>
        </div>
      </div>
      
      <div>
        <div className="text-blue-400">def</div>{' '}
        <span className="text-yellow-300">social_media</span>
        <span className="text-white">():</span>
      </div>
      
      <div className="ml-4 mb-8">
        <div>
          <span className="text-blue-400">return</span>{' '}
          <span className="text-white">{'{'}</span>
        </div>
        <div className="ml-4">
          <span className="text-green-300">"github"</span>
          <span className="text-white">:</span>{' '}
          <span className="text-green-300">"github.com/sallouh12"</span>
          <span className="text-white">,</span>
        </div>
        <div className="ml-4">
          <span className="text-green-300">"linkedin"</span>
          <span className="text-white">:</span>{' '}
          <span className="text-green-300">"linkedin.com/in/abderrahmanesallouh"</span>
          <span className="text-white">,</span>
        </div>
        <div className="ml-4">
          <span className="text-green-300">"twitter"</span>
          <span className="text-white">:</span>{' '}
          <span className="text-green-300">"twitter.com/abderrahmanesallouh"</span>
        </div>
        <div>
          <span className="text-white">{'}'}</span>
        </div>
      </div>
      
      {/* Terminal-like interface */}
      <div className="mt-8 bg-[#1A1A1A] border border-[#333333] rounded">
        <div className="px-2 py-1 bg-[#333333] text-white text-xs flex items-center">
          <span className="w-3 h-3 rounded-full bg-red-500 inline-block mr-1"></span>
          <span className="w-3 h-3 rounded-full bg-yellow-500 inline-block mr-1"></span>
          <span className="w-3 h-3 rounded-full bg-green-500 inline-block mr-1"></span>
          <span className="ml-2">Terminal - Contact Me</span>
        </div>
        <div className="p-3 h-48 overflow-y-auto text-white">
          {history.map((line, index) => (
            <div key={index} className={line.startsWith('#') ? 'text-green-400' : ''}>
              {line}
            </div>
          ))}
          <div className="flex items-center mt-1">
            <span className="text-green-400 mr-2">$</span>
            <input
              type="text"
              value={command}
              onChange={(e) => setCommand(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent outline-none border-none text-white"
              autoFocus
            />
          </div>
        </div>
      </div>
      
      <div className="mt-8">
        <span className="text-green-400"># You can also use the contact form below:</span>
      </div>
      
      <div className="mt-4 bg-[#2D2D2D] p-3 rounded">
        <div className="mb-3">
          <label className="block text-gray-400 mb-1">Name</label>
          <input 
            type="text" 
            className="w-full bg-[#1E1E1E] border border-[#333333] rounded px-3 py-2 text-white focus:outline-none focus:border-[#007ACC]"
            placeholder="Your name"
          />
        </div>
        <div className="mb-3">
          <label className="block text-gray-400 mb-1">Email</label>
          <input 
            type="email" 
            className="w-full bg-[#1E1E1E] border border-[#333333] rounded px-3 py-2 text-white focus:outline-none focus:border-[#007ACC]"
            placeholder="your.email@example.com"
          />
        </div>
        <div className="mb-3">
          <label className="block text-gray-400 mb-1">Message</label>
          <textarea 
            className="w-full bg-[#1E1E1E] border border-[#333333] rounded px-3 py-2 text-white focus:outline-none focus:border-[#007ACC] h-24"
            placeholder="Your message"
          ></textarea>
        </div>
        <button className="bg-[#007ACC] text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
          Send Message
        </button>
      </div>
    </div>
  );
};

export default ContactContent;