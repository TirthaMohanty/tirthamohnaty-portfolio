import { writeFileSync } from 'node:fs';

const lines = [
  'Tirtha Sarathi Mohanty',
  'Quality Assurance Engineer',
  'Mohali, India | +91 9668738425 | tirthasarathimohanty966@gmail.com',
  'https://github.com/TirthaMohanty | linkedin.com/in/tirtha-sarathi-mohanty | https://tirthamohanty-portfolio.vercel.app/',
  '',
  'SUMMARY',
  'Quality Assurance Engineer with hands-on experience of 1.7 years in manual and automation testing for web and mobile',
  'applications (Android & iOS). Skilled in Selenium, Playwright, Appium, API testing, Database testing, and performance',
  'testing with strong knowledge of SDLC, STLC, and Agile methodologies. Adept at identifying defects, improving test',
  'efficiency, and ensuring high-quality software delivery.',
  '',
  'TECHNICAL SKILLS',
  'Languages: Python, JavaScript, HTML5, CSS3',
  'Testing & Automation: Selenium, Playwright, Appium, Pytest, Manual Testing, Automation Testing, Functional Testing,',
  '                     Non-functional Testing, UI Testing, API Testing, Performance Testing',
  'Frameworks & Tools: Selenium WebDriver, FastAPI, Django, Postman, OWASP ZAP, Locust, Hoppscotch, Swagger',
  'Technologies & Tools: Git, Bitbucket, Jira, SQL, MS Excel',
  'Database Testing: MongoDB, DBeaver',
  'Other Skills: Test Case Design, Bug Tracking, Agile Methodology, Debugging, Clean Code Practices',
  '',
  'EXPERIENCE',
  'Quality Assurance Engineer | Alpha IT Managed Services | Mohali, India | June 2025 - Present',
  '- Performed end-to-end testing for E-commerce, Health and Fitness, Recruitment Management SaaS Platform and',
  '  Contract Management System web and mobile applications (Android & iOS).',
  '- Executed manual and automated test cases using Selenium, Playwright and Appium, improving test coverage and efficiency.',
  '- Conducted API testing using Postman and validated backend services.',
  '- Performed performance and security testing using tools like Locust and OWASP ZAP.',
  '- Collaborated with cross-functional teams to ensure high-quality releases and production stability.',
  '- Contributed to projects including Campus Closet, Health and Fitness, Talyn 360 and CMS ensuring defect-free deployments.',
  '',
  'Quality Analyst (Internship) | Alpha IT Managed Services | Mohali, India | Feb 2025 - May 2025',
  '- Designed and executed test cases for web applications across different testing phases.',
  '- Developed automation scripts using Selenium with Python, improving regression testing efficiency.',
  '- Assisted in bug tracking and reporting using Jira.',
  '- Built RESTful APIs using Python frameworks like FastAPI and Django.',
  '- Gained hands-on experience in both QA and backend development workflows.',
  '',
  'PROJECTS & WORK HIGHLIGHTS',
  '- Developed automated test scripts using Selenium, Playwright and Pytest, reducing manual effort and improving reliability.',
  '- Tested AI applications for response accuracy, relevance, and hallucinations.',
  '- Built REST APIs using FastAPI and Django enhancing backend development skills.',
  '- Implemented hybrid testing frameworks for scalable automation testing.',
  '- Conducted performance and security testing using Locust and OWASP ZAP.',
  '- Improved defect detection and reporting processes, enhancing overall product quality.',
  '',
  'EDUCATION',
  'Master of Computer Applications (MCA) - Chandigarh Group of Colleges, Jhanjeri | 2023',
  'Bachelor of Computer Applications (BCA) - Rourkela Institute of Management Services | 2021',
  '',
  'CERTIFICATIONS',
  '- ISTQB Certification (In Progress)',
  '',
  'ADDITIONAL INFORMATION',
  '- Strong interest in Python programming and backend development.',
  '- Experience in both QA and development roles, bridging the gap between testing and engineering.',
  '- Passionate about writing clean, maintainable, and scalable code.'
];

const escapePdfText = (value) =>
  value.replaceAll('\\', '\\\\').replaceAll('(', '\\(').replaceAll(')', '\\)');

const pageWidth = 612;
const pageHeight = 792;
const margin = 48;
const lineHeight = 14.5;
const maxLinesPerPage = 48;
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
  const contentLines = ['BT', '/F1 9.5 Tf', `${margin} ${pageHeight - margin} Td`];
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
console.log('Original Resume PDF regenerated successfully!');
