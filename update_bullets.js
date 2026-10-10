const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'app', 'page.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// Replace the bullet SVG with a highlighted one
const oldSvg = '<svg className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>';
const newSvg = '<div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 mt-0.5"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg></div>';

content = content.replaceAll(oldSvg, newSvg);

// Replace the bullet text styling to be bolder
const oldTextClass = 'text-slate-700 text-sm xl:text-base leading-relaxed';
const newTextClass = 'text-slate-800 text-sm xl:text-base leading-relaxed font-medium';

// We want to make sure we only replace it within the syllabus bullets. 
// They are in `<div className="flex gap-4 items-start text-slate-700 text-sm xl:text-base leading-relaxed">`
content = content.replaceAll(
  '<div className="flex gap-4 items-start text-slate-700 text-sm xl:text-base leading-relaxed">', 
  '<div className="flex gap-3 items-start ' + newTextClass + '">'
);

// Also change the padding of the bullets container to make it more compact since there's no big banner anymore.
// Previously: <div className="p-6 sm:p-10 xl:p-12 space-y-4">
// New: <div className="px-6 sm:px-10 xl:px-12 pb-8 space-y-3">
content = content.replaceAll('<div className="p-6 sm:p-10 xl:p-12 space-y-4">', '<div className="px-6 sm:px-10 xl:px-12 pb-8 space-y-3">');


fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully updated bullets.');
