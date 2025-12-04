# Journal

A personal collection of thoughts, solutions, and explorations from the ongoing learning journey.

---

## 📝 Writing Style Guide

### Your Voice

Your writing style is **personal, reflective, and conversational**. You write for yourself, not for an audience. Here's what makes your voice unique:

- **Honest and authentic** - You share what you've actually used, what you haven't, and what intrigues you
- **Conversational tone** - "So I was thinking about..." instead of formal explanations
- **Short and punchy** - You get to the point quickly without unnecessary elaboration
- **Real examples** - You reference your own experiences and projects
- **Reflective** - You think deeply about why things work the way they do

### Use This Prompt to Format Your Writing

When you have raw thoughts or messy notes and want to format them into a readable article, use this prompt with an AI:

```
You are helping format personal learning notes. The writer's style is conversational, honest, 
and reflective. They write for themselves, not an audience. 

Key characteristics of their writing:
- Personal and authentic ("I use REST for 90% of what I build")
- Conversational ("So I was thinking about..." not "Let's explore...")
- Honest about what they have/haven't used
- Short paragraphs with punchiness, not dense explanations
- Real examples from their own experience
- Reflective tone - thinking about the "why" not just the "what"
- They use code blocks for technical examples
- They use bold text (**like this**) for emphasis on key concepts
- NO formal tutorials, NO tables comparing things, NO "best practices" lectures
- NO overly formatted emojis or excessive decoration

Take their raw notes and format them into a readable article that maintains their authentic voice.
Keep the conversational flow. Use markdown with proper headings (##), code blocks (```), 
and bold text for emphasis. Structure it naturally like they would tell someone informally.
```

### Example of Your Writing Style

Good (personal, reflective):
> "I use REST for 90% of what I build. It's boring, it's predictable, it works. GraphQL when I need flexibility. That's the real lesson here - the simplest tool that solves your problem is usually the right choice."

Not good (formal, tutorial-like):
> "REST API is a fundamental architecture pattern that enables seamless client-server communication through standardized HTTP methods. Its stateless nature provides excellent scalability..."

---

## 🚀 How to Add/Update an Article

### Step 1: Write Your Thoughts

Write your raw thoughts in any format - messy notes, bullet points, stream of consciousness. Don't worry about structure yet.

### Step 2: Format Using the AI Prompt

Use the prompt above to ask an AI to format your messy notes into a readable article while maintaining your voice.

### Step 3: Add to the Entries

Open `src/data/entries.ts` and add your article to the `entries` array:

```typescript
{
  id: '7',
  title: 'Your Article Title',
  excerpt: 'A short one-line summary of what this is about',
  content: `Your full article content here with proper markdown formatting.
  
## Section Heading

Some text with **bold** emphasis and \`code\` if needed.

\`\`\`javascript
// Code blocks like this
const example = "code";
\`\`\`

More content...`,
  category: 'articles', // or 'leetcode', 'blockchain', 'system-design', 'thoughts'
  date: 'YYYY-MM-DD',
  tags: ['tag1', 'tag2', 'tag3'],
},
```

### Step 4: Field Definitions

- **id**: Unique identifier (string). Use the next available number as a string (e.g., '7', '8')
- **title**: Main heading of your article (string)
- **excerpt**: One-line summary shown in the list (string)
- **content**: Full article with markdown formatting (string)
  - Use `## ` for section headings
  - Use `### ` for subsection headings
  - Use `` ` `` for inline code
  - Use `` ``` `` for code blocks
  - Use `**text**` for bold emphasis
  - Keep paragraphs short and punchy
- **category**: One of: `'articles'`, `'leetcode'`, `'blockchain'`, `'system-design'`, `'thoughts'`
- **date**: Publication date in `YYYY-MM-DD` format (string)
- **tags**: Array of relevant tags (string array) - keep them lowercase and hyphenated

### Step 5: Check the Live Site

Your article will automatically appear in the "Entries" section on the main page:
1. It will show in the list with your excerpt
2. Click it to view the full article
3. Filter by category to find related articles

### File Location

All entries are stored in: `/src/data/entries.ts`

---

## 📖 Article Categories

- **articles** - Long-form explorations, reflections, deep dives
- **leetcode** - Algorithm problems and solutions
- **blockchain** - Crypto, Web3, and blockchain concepts
- **system-design** - Architecture patterns and scalable systems
- **thoughts** - Short reflections and observations

---

## 🎨 Markdown Formatting Reference

Here's what formatting options are available:

```markdown
## Heading 2
### Heading 3

**bold text**
`inline code`

\`\`\`javascript
// Code block with language
const code = "here";
\`\`\`

Regular paragraph text flows naturally.
Keep paragraphs short for readability.
```

---

## ✨ Tips

1. **Don't overthink it** - Your first draft voice is usually the best
2. **Use code blocks freely** - They break up text and make things clearer
3. **Keep it short** - Your strength is punchy, honest writing, not long essays
4. **Link to your experiences** - Reference projects you've worked on, problems you've solved
5. **Be honest about gaps** - "I haven't used this yet" is way more authentic than pretending expertise

---

## 🔧 Development

### Setup

```bash
npm install
npm run dev
```

Dev server runs at `http://localhost:8080/`

### Build

```bash
npm run build
```

---

**Scholar's Notebook** - Where learning happens one entry at a time.
