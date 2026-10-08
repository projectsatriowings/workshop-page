const https = require('https');
https.get('https://outskill.com', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    // extract fonts
    const fonts = new Set();
    const regex = /font-family[\\s]*:[\\s]*['"]?([^'";,]+)['"]?/gi;
    let match;
    while ((match = regex.exec(data)) !== null) {
      fonts.add(match[1]);
    }
    const fontMatches = data.match(/family=([^&'\"]+)/g);
    console.log('Google Fonts:', fontMatches);
    console.log('CSS font-families:', Array.from(fonts));
  });
}).on('error', (e) => console.error(e));
