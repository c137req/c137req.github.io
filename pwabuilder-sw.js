const params = new URLSearchParams(self.location.search);
const swRootUrl = params.get('swRootUrl');
if (swRootUrl) {
  const decoded = decodeURIComponent(swRootUrl);
  console.log('importing script from:', decoded + 'sw.js');
  importScripts(decoded + 'sw.js');
}
