import { writeFileSync } from 'node:fs';

const lines = [
  'Tirtha Sarathi Mohanty',
  'Quality Assurance Engineer',
  'Mohali, India | tirthasarathimohanty966@gmail.com',
  '',
  'PUBLIC PORTFOLIO NOTICE',
  'All client names, project names, API examples, identifiers, metrics, and datasets are sanitized or synthetic.',
  '',
  'SUMMARY',
  'Quality Assurance Engineer with hands-on experience in manual and automated testing for web and mobile',
  'applications. Skilled in Selenium, Playwright, Appium, API contract testing, database verification,',
  'performance testing, and Python backend development.',
  '',
  'TECHNICAL SKILLS',
  'Automation: Selenium WebDriver, Playwright, Appium, Pytest, Page Object Model',
  'API and security: Postman, OpenAPI, OWASP ZAP, contract and access-control validation',
  'Performance and data: Locust, SQL, MongoDB, DBeaver, deterministic test fixtures',
  'Development: Python, JavaScript, TypeScript, FastAPI, Django, Git',
  '',
  'EXPERIENCE',
  'Quality Assurance Engineer | Confidential Software Services Company | June 2025 - Present',
  '- Execute end-to-end web and mobile testing across functional, regression, API, and security scopes.',
  '- Build maintainable browser and mobile automation suites using synthetic test data.',
  '- Validate fictionalized API contracts, status handling, schemas, and authorization boundaries.',
  '- Run local performance simulations and analyze illustrative latency and throughput trends.',
  '',
  'Quality Analyst Intern | Confidential Software Services Company | Feb 2025 - May 2025',
  '- Designed test cases, automated repeatable checks, and documented reproducible defects.',
  '- Built learning-focused demo APIs and verified database state using non-production fixtures.',
  '',
  'SANITIZED CASE STUDIES',
  '- Demo Commerce Platform: catalog, checkout, account summary, notification, and mobile QA.',
  '- Demo Workflow Platform: order requests, approvals, document checks, and role validation.',
  '- Demo Scheduling Platform: record lifecycle, appointments, forms, and load simulation.',
  '- Demo Media Platform: mobile capture, resilient uploads, asynchronous analysis, and reports.',
  '',
  'EDUCATION',
  'Master of Computer Applications (2023)',
  'Bachelor of Computer Applications (2021)',
  '',
  'This resume intentionally excludes confidential client details and production-derived data.'
];

const escapePdfText = (value) =>
  value.replaceAll('\\', '\\\\').replaceAll('(', '\\(').replaceAll(')', '\\)');

const pageWidth = 612;
const pageHeight = 792;
const margin = 54;
const lineHeight = 16;
const maxLinesPerPage = 43;
const pages = [];

for (let index = 0; index < lines.length; index += maxLinesPerPage) {
  pages.push(lines.slice(index, index + maxLinesPerPage));
}

const objects = [];
const addObject = (content) => {
  objects.push(content);
  return objects.length;
};

const catalogId = addObject('');
const pagesId = addObject('');
const fontId = addObject('<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>');
const pageIds = [];

for (const pageLines of pages) {
  const contentLines = ['BT', '/F1 10 Tf', `${margin} ${pageHeight - margin} Td`];
  pageLines.forEach((line, index) => {
    if (index > 0) contentLines.push(`0 -${lineHeight} Td`);
    contentLines.push(`(${escapePdfText(line)}) Tj`);
  });
  contentLines.push('ET');

  const stream = contentLines.join('\n');
  const contentId = addObject(`<< /Length ${Buffer.byteLength(stream)} >>\nstream\n${stream}\nendstream`);
  const pageId = addObject(
    `<< /Type /Page /Parent ${pagesId} 0 R /MediaBox [0 0 ${pageWidth} ${pageHeight}] ` +
      `/Resources << /Font << /F1 ${fontId} 0 R >> >> /Contents ${contentId} 0 R >>`
  );
  pageIds.push(pageId);
}

objects[catalogId - 1] = `<< /Type /Catalog /Pages ${pagesId} 0 R >>`;
objects[pagesId - 1] =
  `<< /Type /Pages /Kids [${pageIds.map((id) => `${id} 0 R`).join(' ')}] /Count ${pageIds.length} >>`;

let pdf = '%PDF-1.4\n';
const offsets = [0];
objects.forEach((object, index) => {
  offsets.push(Buffer.byteLength(pdf));
  pdf += `${index + 1} 0 obj\n${object}\nendobj\n`;
});

const xrefOffset = Buffer.byteLength(pdf);
pdf += `xref\n0 ${objects.length + 1}\n`;
pdf += '0000000000 65535 f \n';
for (let index = 1; index <= objects.length; index += 1) {
  pdf += `${String(offsets[index]).padStart(10, '0')} 00000 n \n`;
}
pdf +=
  `trailer\n<< /Size ${objects.length + 1} /Root ${catalogId} 0 R >>\n` +
  `startxref\n${xrefOffset}\n%%EOF\n`;

writeFileSync('public/Tirtha_Mohanty_Resume.pdf', pdf, 'binary');
writeFileSync('public/resume.pdf', pdf, 'binary');
