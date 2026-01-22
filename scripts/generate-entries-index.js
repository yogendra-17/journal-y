import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to create a slug from a title
function createSlug(title) {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
}

// Function to parse frontmatter from markdown
function parseFrontmatter(content) {
    const frontmatterRegex = /^---\n([\s\S]*?)\n---\n/;
    const match = content.match(frontmatterRegex);

    if (!match) {
        throw new Error('No frontmatter found');
    }

    const frontmatterText = match[1];
    const metadata = {};

    // Parse each line
    const lines = frontmatterText.split('\n');
    for (const line of lines) {
        const colonIndex = line.indexOf(':');
        if (colonIndex === -1) continue;

        const key = line.substring(0, colonIndex).trim();
        let value = line.substring(colonIndex + 1).trim();

        // Remove quotes if present
        if ((value.startsWith('"') && value.endsWith('"')) ||
            (value.startsWith("'") && value.endsWith("'"))) {
            value = value.slice(1, -1);
        }

        // Parse arrays
        if (value.startsWith('[') && value.endsWith(']')) {
            try {
                value = JSON.parse(value);
            } catch (e) {
                console.error(`Error parsing array for ${key}:`, e);
            }
        }

        metadata[key] = value;
    }

    return metadata;
}

// Read all markdown files from public/entries
const entriesDir = path.join(__dirname, '../public/entries');
const files = fs.readdirSync(entriesDir).filter(f => f.endsWith('.md'));

console.log(`Found ${files.length} markdown files`);

const entries = [];

files.forEach(filename => {
    const filepath = path.join(entriesDir, filename);
    const content = fs.readFileSync(filepath, 'utf-8');

    try {
        const metadata = parseFrontmatter(content);
        const slug = createSlug(metadata.title);

        entries.push({
            id: metadata.id,
            slug: slug,
            title: metadata.title,
            excerpt: metadata.excerpt,
            category: metadata.category,
            date: metadata.date,
            tags: metadata.tags,
            filename: filename
        });

        console.log(`✓ Processed ${filename}`);
    } catch (e) {
        console.error(`Error processing ${filename}:`, e);
    }
});

// Sort entries by ID
entries.sort((a, b) => parseInt(a.id) - parseInt(b.id));

// Create index.json
const indexData = {
    entries: entries,
    lastUpdated: new Date().toISOString()
};

const indexPath = path.join(entriesDir, 'index.json');
fs.writeFileSync(indexPath, JSON.stringify(indexData, null, 2), 'utf-8');

console.log('\n✅ Generated index.json');
console.log(`Total entries: ${entries.length}`);
