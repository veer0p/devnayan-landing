const fs = require('fs');
const path = require('path');

const templatesDir = path.join(__dirname, 'src', 'components', 'templates');
const mapCode = `
      {/* Map Section */}
      <section className="border-t border-slate-200">
        <iframe
          title={\`\${clinic.name} Location\`}
          src={clinic.mapEmbedUrl}
          className="w-full h-[400px]"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          style={{ border: 0 }}
        />
      </section>
`;

for (let i = 2; i <= 8; i++) {
  const filePath = path.join(templatesDir, `Template${i}.tsx`);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf-8');
    // Find the last </div> before the end of the file
    const lastDivIndex = content.lastIndexOf('</div>');
    if (lastDivIndex !== -1) {
      content = content.substring(0, lastDivIndex) + mapCode + content.substring(lastDivIndex);
      fs.writeFileSync(filePath, content, 'utf-8');
      console.log(`Updated Template${i}.tsx`);
    }
  }
}
