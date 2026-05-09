const fs = require('fs');
const https = require('https');
const path = require('path');

const urls = [
  { url: 'https://teltonika-gps.com/products/trackers/fmc920', filename: 'teltonika-fmc920.webp' },
  { url: 'https://teltonika-gps.com/products/trackers/fmc234', filename: 'teltonika-fmc234.webp' },
  { url: 'https://teltonika-gps.com/products/trackers/fmc130', filename: 'teltonika-fmc130.webp' },
  { url: 'https://teltonika-gps.com/products/trackers/fmb204', filename: 'teltonika-fmb204.webp' },
  { url: 'https://www.orbcomm.com/en/hardware/devices/st-9100', filename: 'orbcomm-st9100.webp' }
];

async function download(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      // follow redirects
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return resolve(download(res.headers.location.startsWith('http') ? res.headers.location : new URL(res.headers.location, url).href, dest));
      }
      if (res.statusCode !== 200) {
        return reject(new Error('Status: ' + res.statusCode + ' for ' + url));
      }
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
  if (!fs.existsSync(targetDir)) fs.mkdirSync(targetDir, { recursive: true });

  for (let item of urls) {
    try {
      console.log('Fetching', item.url);
      const html = await fetchHtml(item.url);
      
      let imgUrl = null;
      // Try to find og:image
      const ogMatch = html.match(/<meta property="og:image" content="([^"]+)"/i);
      if (ogMatch && ogMatch[1]) {
        imgUrl = ogMatch[1];
      } else {
        // Try to find any img tag that looks like the product
        const imgMatch = html.match(/<img[^>]+src="([^"]+)"/i);
        if (imgMatch && imgMatch[1]) {
           imgUrl = imgMatch[1];
        }
      }

      if (imgUrl) {
        if (!imgUrl.startsWith('http')) imgUrl = new URL(imgUrl, item.url).href;
        console.log('Found image for', item.filename, ':', imgUrl);
        const dest = path.join(targetDir, item.filename);
        await download(imgUrl, dest);
        console.log('Downloaded', item.filename);
      } else {
        console.log('No image found for', item.url);
      }
    } catch(e) {
      console.log('Error for', item.url, e.message);
    }
  }
}

main();
