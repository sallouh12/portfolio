import React from 'react';
import TypingEffect from '../components/TypingEffect';

const AboutContent: React.FC = () => {
  return (
    <div className="font-mono text-sm">
      <div className="text-blue-400">// about.js - Who am I?</div>
      <div className="mt-4">
        <span className="text-purple-400">const</span>{' '}
        <span className="text-yellow-300">developer</span>{' '}
        <span className="text-white">=</span>{' '}
        <span className="text-blue-300">{'{'}</span>
      </div>
      
      <div className="ml-4">
        <span className="text-green-300">name</span>
        <span className="text-white">:</span>{' '}
        <span className="text-orange-300">'Abderrahmane Sallouh'</span>
        <span className="text-white">,</span>
      </div>
      
      <div className="ml-4">
        <span className="text-green-300">title</span>
        <span className="text-white">:</span>{' '}
        <span className="text-orange-300">'Full Stack Developer'</span>
        <span className="text-white">,</span>
      </div>
      
      <div className="ml-4">
        <span className="text-green-300">location</span>
        <span className="text-white">:</span>{' '}
        <span className="text-orange-300">'Laayoune'</span>
        <span className="text-white">,</span>
      </div>
      
      <div className="ml-4">
        <span className="text-green-300">bio</span>
        <span className="text-white">:</span>{' '}
        <TypingEffect 
          text="'I'm a passionate developer who loves creating elegant solutions to complex problems. With expertise in front-end and back-end technologies, I build scalable, user-friendly applications.'"
          delay={20}
          className="text-orange-300" 
        />
        <span className="text-white">,</span>
      </div>
      
      <div className="ml-4">
        <span className="text-green-300">education</span>
        <span className="text-white">:</span>{' '}
        <span className="text-blue-300">[</span>
      </div>
      
      <div className="ml-8">
        <span className="text-blue-300">{'{'}</span>{' '}
        <span className="text-green-300">degree</span>
        <span className="text-white">:</span>{' '}
        <span className="text-orange-300">'Full-stack developpement'</span>
        <span className="text-white">,</span>{' '}
        <span className="text-green-300">school</span>
        <span className="text-white">:</span>{' '}
        <span className="text-orange-300">'CTS'</span>{' '}
        <span className="text-blue-300">{'}'}</span>
        <span className="text-white">,</span>
      </div>
      
      <div className="ml-4">
        <span className="text-blue-300">]</span>
        <span className="text-white">,</span>
      </div>
      
      <div className="ml-4">
        <span className="text-green-300">experience</span>
        <span className="text-white">:</span>{' '}
        <span className="text-purple-400">function</span>
        <span className="text-yellow-300">()</span>{' '}
        <span className="text-blue-300">{'{'}</span>
      </div>
      
      <div className="ml-8">
        <span className="text-purple-400">return</span>{' '}
        <span className="text-blue-300">[</span>
      </div>
      

      
      <div className="ml-12">
        <span className="text-orange-300">'Web Developer at Urbane Agency - 2024'</span>
        <span className="text-white">,</span>
      </div>
 
      <div className="ml-8">
        <span className="text-blue-300">]</span>
        <span className="text-white">;</span>
      </div>
      
      <div className="ml-4">
        <span className="text-blue-300">{'}'}</span>
      </div>
      
      <div>
        <span className="text-blue-300">{'}'}</span>
        <span className="text-white">;</span>
      </div>
      
      <div className="mt-4">
        <span className="text-purple-400">export default</span>{' '}
        <span className="text-yellow-300">developer</span>
        <span className="text-white">;</span>
      </div>
    </div>
  );
};

export default AboutContent;