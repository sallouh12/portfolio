import React from 'react';

interface SkillCategory {
  name: string;
  skills: Skill[];
}

interface Skill {
  name: string;
  level: number; // 1-5
}

const SkillsContent: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      name: "Frontend",
      skills: [
        { name: "HTML/CSS", level: 5 },
        { name: "JavaScript", level: 5 },
        { name: "React", level: 4 },
        { name: "Vue.js", level: 3 },
        { name: "TypeScript", level: 4 },
        { name: "Tailwind CSS", level: 5 },
      ]
    },
    {
      name: "Backend",
      skills: [
        { name: "Node.js", level: 4 },
        { name: "Express", level: 4 },
        { name: "Python", level: 3 },
        { name: "Django", level: 3 },
        { name: "RESTful APIs", level: 5 },
        { name: "Laravel", level: 3 },
      ]
    },
    {
      name: "Database",
      skills: [
        { name: "MongoDB", level: 4 },
        { name: "MySQL", level: 3 },
      ]
    },
    {
      name: "Tools",
      skills: [
        { name: "Git", level: 5 },
        { name: "Docker", level: 3 },
        { name: "Webpack", level: 4 },
        { name: "VS Code", level: 5 },
        { name: "Terminal", level: 4 },
      ]
    }
  ];

  // Function to render skill level bars
  const renderSkillLevel = (level: number) => {
    return (
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className={`w-4 h-2 rounded-sm ${
              i <= level ? 'bg-[#007ACC]' : 'bg-[#3C3C3C]'
            }`}
          ></div>
        ))}
      </div>
    );
  };

  return (
    <div className="font-mono text-sm">
      <div className="text-yellow-400">/* skills.json - My Technical Skills */</div>
      
      <div className="mt-4">
        <span className="text-blue-300">{'{'}</span>
      </div>
      
      <div className="ml-4">
        <span className="text-green-300">"skills"</span>
        <span className="text-white">:</span>{' '}
        <span className="text-blue-300">{'{'}</span>
      </div>
      
      {skillCategories.map((category, index) => (
        <div key={category.name} className="ml-8">
          <span className="text-green-300">"{category.name}"</span>
          <span className="text-white">:</span>{' '}
          <span className="text-blue-300">[</span>
          
          <div className="ml-4 space-y-2">
            {category.skills.map((skill, skillIndex) => (
              <div key={skill.name} className="flex items-center justify-between">
                <div>
                  <span className="text-blue-300">{'{'}</span>
                  <span className="text-green-300">"name"</span>
                  <span className="text-white">:</span>{' '}
                  <span className="text-orange-300">"{skill.name}"</span>
                  <span className="text-white">,</span>{' '}
                  <span className="text-green-300">"level"</span>
                  <span className="text-white">:</span>{' '}
                  <span className="text-purple-400">{skill.level}</span>
                  <span className="text-blue-300">{'}'}</span>
                  {skillIndex < category.skills.length - 1 && <span className="text-white">,</span>}
                </div>
                <div className="ml-4">
                  {renderSkillLevel(skill.level)}
                </div>
              </div>
            ))}
          </div>
          
          <span className="text-blue-300">]</span>
          {index < skillCategories.length - 1 && <span className="text-white">,</span>}
        </div>
      ))}
      
      <div className="ml-4">
        <span className="text-blue-300">{'}'}</span>
      </div>
      
      <div>
        <span className="text-blue-300">{'}'}</span>
      </div>
    </div>
  );
};

export default SkillsContent;