const fs = require('fs');
const path = '/Users/sumitkumar/Desktop/untitled folder 21/doctor-panel/src/screens/doctor/DoctorChat.tsx';
let content = fs.readFileSync(path, 'utf8');

const target = `                return (
                  <div key={msg.id} className={\`flex w-full \${isDoctor ? 'justify-end' : 'justify-start'} \${!isLastInGroup ? 'mb-1' : 'mb-3'}\`}>
                    <div 
                      className={\`relative max-w-[85%] sm:max-w-[70%]`;

const replacement = `                return (
                  <div key={msg.id} className={\`flex flex-col w-full \${isDoctor ? 'items-end' : 'items-start'} \${!isLastInGroup ? 'mb-1' : 'mb-3'}\`}>
                    {!isDoctor && isFirstInGroup && (
                      <span className="text-[10px] text-slate-500 ml-2 mb-0.5">{activeChat.name}</span>
                    )}
                    <div 
                      className={\`relative max-w-[85%] sm:max-w-[70%]`;

content = content.replace(target, replacement);
fs.writeFileSync(path, content, 'utf8');
console.log('Updated DoctorChat.tsx');
