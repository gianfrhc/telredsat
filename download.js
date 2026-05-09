const fs = require('fs');
const https = require('https');
const path = require('path');

async function download(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return resolve(download(res.headers.location.startsWith('http') ? res.headers.location : new URL(res.headers.location, url).href, dest));
      }
      if (res.statusCode !== 200) return reject(new Error('Status: ' + res.statusCode + ' for ' + url));
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => { file.close(); resolve(); });
    }).on('error', err => { fs.unlink(dest, () => {}); reject(err); });
  });
}

async function fetchHtml(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, (res) => {
       if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return resolve(fetchHtml(res.headers.location.startsWith('http') ? res.headers.location : new URL(res.headers.location, url).href));
      }
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

async function main() {
  const targetDir = path.join('public', 'productos');
  
  const tasks = [
    { url: 'https://teltonika-gps.com/products/trackers/fmc234', regex: /<img[^>]+src=\"([^\"]+render[^\"]+)\"/i, file: 'teltonika-fmc234.webp' },
    { url: 'https://teltonika-gps.com/products/trackers/fmb204', regex: /<img[^>]+src=\"([^\"]+render[^\"]+)\"/i, file: 'teltonika-fmb204.webp' }
  ];

  for (let t of tasks) {
    try {
      const html = await fetchHtml(t.url);
      const match = html.match(t.regex);
      if (match && match[1]) {
        let url = match[1];
        if (url.startsWith('//')) url = 'https:' + url;
        const dest = path.join(targetDir, t.file);
        await download(url, dest);
        console.log('Downloaded clean render for', t.file);
      }
    } catch(e) { console.error(e); }
  }

  // Orbcomm
  try {
     const orbHtml = await fetchHtml('https://www.orbcomm.com/en/hardware/devices/st-9100');
     const orbMatch = orbHtml.match(/<img[^>]+src=\"([^\"]+ST9100[^\"]+)\"/i) || orbHtml.match(/<img[^>]+src=\"([^\"]+st-9100[^\"]+)\"/i) || orbHtml.match(/<img[^>]+src=\"([^\"]+st9100[^\"]+png)\"/i);
     if (orbMatch && orbMatch[1]) {
        let imgUrl = orbMatch[1];
        if (!imgUrl.startsWith('http')) imgUrl = new URL(imgUrl, 'https://www.orbcomm.com').href;
        await download(imgUrl, path.join(targetDir, 'orbcomm-st9100.webp'));
        console.log('Downloaded clean image for orbcomm');
     }
  } catch(e) { console.error(e); }
}

main();
