const fetch = global.fetch || require('node-fetch');
const base = process.env.BASE || 'http://localhost:3000';
const pages = ['/', '/home', '/landing', '/learn-more'];

function extractNavLinks(html) {
  // Extract <nav ...>...</nav>
  const navMatch = html.match(/<nav[\s\S]*?<\/nav>/i);
  const navHtml = navMatch ? navMatch[0] : html; // fallback to full html
  const hrefs = [];
  const aRegex = /href=\"([^\"]+)\"/g;
  let m;
  while ((m = aRegex.exec(navHtml)) !== null) {
    hrefs.push(m[1]);
  }
  return [...new Set(hrefs)];
}

(async () => {
  const results = [];
  for (const page of pages) {
    try {
      const res = await fetch(base + page);
      const html = await res.text();
      const links = extractNavLinks(html);
      const checks = [];
      for (const href of links) {
        if (href.startsWith('mailto:')) {
          checks.push({ href, ok: true, note: 'mailto link, skipped' });
          continue;
        }
        if (href.startsWith('/#')) {
          const anchor = href.split('#')[1];
          const rootRes = await fetch(base + '/');
          const rootHtml = await rootRes.text();
          const found = new RegExp('id="' + anchor + '"').test(rootHtml) || new RegExp("id='" + anchor + "'").test(rootHtml);
          checks.push({ href, ok: found, note: found ? 'anchor exists on /' : 'missing anchor on /' });
          continue;
        }
        // otherwise fetch the href
        const target = href.startsWith('http') ? href : base + href;
        try {
          const r = await fetch(target, { method: 'GET' });
          checks.push({ href, ok: r.status >= 200 && r.status < 400, status: r.status });
        } catch (err) {
          checks.push({ href, ok: false, error: String(err) });
        }
      }
      results.push({ page, ok: checks.every(c => c.ok), checks });
    } catch (err) {
      results.push({ page, ok: false, error: String(err) });
    }
  }

  console.log(JSON.stringify(results, null, 2));
  const failures = results.filter(r => !r.ok);
  if (failures.length > 0) {
    console.error('Header link checks failed on some pages.');
    process.exit(2);
  }
  console.log('All header link checks passed.');
})();
