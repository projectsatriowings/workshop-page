const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'app', 'page.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// Regex to match the Banner Header blocks
// It looks like:
// {/* Banner Header */}
// <div className="relative w-full h-44 sm:h-52 xl:h-60 overflow-hidden bg-slate-900 ...">
//   <img ... />
//   <div className="absolute inset-0 bg-gradient-to-r ..."></div>
//   
//   <div className="relative z-10 flex flex-col justify-center text-white h-full">
//     <div className="...">
//       MODULE X
//     </div>
//     <h3 className="...">Title Here</h3>
//     <p className="...">Description Here</p>
//   </div>
// </div>

const bannerRegex = /\{\/\*\s*Banner Header\s*\*\/\}\s*<div className="relative w-full h-[^>]+>\s*<img[^>]+>\s*<div className="absolute inset-0 bg-gradient-[^>]+><\/div>\s*<div className="relative z-10 flex flex-col justify-center text-white h-full">\s*<div className="text-\[10px\][^>]+>\s*(MODULE \d+)\s*<\/div>\s*<h3 className="[^"]*">([^<]+)<\/h3>\s*<p className="[^"]*">([^<]+)<\/p>\s*<\/div>\s*<\/div>/g;

content = content.replace(bannerRegex, (match, moduleText, title, description) => {
  return `{/* Clean Header */}
                <div className="p-6 sm:px-10 xl:px-12 pt-8 sm:pt-10 pb-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-[10px] xl:text-xs font-mono font-bold tracking-wider uppercase mb-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                    ${moduleText}
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl xl:text-4xl font-bold text-slate-900 mb-2 leading-tight">${title}</h3>
                  <p className="text-sm sm:text-base text-slate-600 font-medium max-w-2xl">${description}</p>
                </div>`;
});

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully updated banners.');
