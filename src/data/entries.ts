export type Category = 'leetcode' | 'blockchain' | 'system-design' | 'articles' | 'thoughts';

export interface JournalEntry {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: Category;
  date: string;
  tags: string[];
}

export const categoryLabels: Record<Category, string> = {
  'leetcode': 'LeetCode',
  'blockchain': 'Blockchain',
  'system-design': 'System Design',
  'articles': 'Articles',
  'thoughts': 'Thoughts',
};

export const categoryDescriptions: Record<Category, string> = {
  'leetcode': 'Problem-solving journey through algorithms and data structures',
  'blockchain': 'Exploring decentralized systems and Web3',
  'system-design': 'Architectural patterns and scalable systems',
  'articles': 'Long-form explorations and deep dives',
  'thoughts': 'Reflections on learning and growth',
};

export const entries: JournalEntry[] = [
  {
    id: '1',
    title: 'Two Sum: The Gateway Problem',
    excerpt: 'Every journey begins somewhere. For most of us in competitive programming, it begins with Two Sum.',
    content: `The Two Sum problem is deceptively simple: given an array of integers and a target, find two numbers that add up to the target.

My first instinct was the brute force approach—O(n²) nested loops. It works, but there's elegance in the hash map solution that reduces it to O(n).

The insight: for each number, we ask "have I seen its complement before?" This transforms a search problem into a lookup problem.

\`\`\`python
def twoSum(nums, target):
    seen = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in seen:
            return [seen[complement], i]
        seen[num] = i
\`\`\`

What I learned: sometimes the best optimization is changing how you ask the question.`,
    category: 'leetcode',
    date: '2024-12-01',
    tags: ['arrays', 'hash-map', 'easy'],
  },
  {
    id: '2',
    title: 'Understanding Merkle Trees',
    excerpt: 'How blockchain achieves efficient verification of data integrity through elegant tree structures.',
    content: `Merkle trees are the unsung heroes of blockchain technology. They allow us to verify that a piece of data belongs to a set without downloading the entire set.

The concept is beautifully recursive: hash pairs of data, then hash pairs of hashes, until you reach a single root hash. Any change in the underlying data ripples up to change the root.

This is why light clients can exist—they only need the block headers (containing the Merkle root) to verify transactions.

The efficiency is remarkable: verification requires only O(log n) hashes, not O(n).`,
    category: 'blockchain',
    date: '2024-11-28',
    tags: ['data-structures', 'cryptography', 'fundamentals'],
  },
  {
    id: '3',
    title: 'Designing a URL Shortener',
    excerpt: 'A classic system design problem that teaches us about trade-offs, scalability, and distributed systems.',
    content: `The URL shortener is a rite of passage in system design interviews. But beyond interviews, it's a masterclass in trade-offs.

Key considerations:
- How do we generate unique short codes? (Counter vs. hash vs. random)
- How do we handle collisions?
- How do we scale reads vs. writes?
- What's our caching strategy?

The beauty is there's no single right answer. A startup might use a simple database with sequential IDs. A company like Bitly needs distributed ID generation, consistent hashing, and global CDN caching.

The lesson: understand the scale before designing the solution.`,
    category: 'system-design',
    date: '2024-11-25',
    tags: ['distributed-systems', 'scalability', 'databases'],
  },
  {
    id: '4',
    title: 'On the Art of Learning',
    excerpt: 'Reflections on how I approach new technologies and why deliberate practice matters more than passive consumption.',
    content: `There's a trap I keep falling into: watching tutorial after tutorial, feeling productive, but not actually building anything.

I've started following a new rule: for every hour of learning, spend two hours applying. Read about a concept, then immediately try to break it. Build something small. Write about what confused you.

The Feynman technique works: if you can't explain it simply, you don't understand it well enough. That's why this journal exists.

Every entry forces me to articulate what I've learned, and the gaps become painfully obvious.`,
    category: 'thoughts',
    date: '2024-11-22',
    tags: ['learning', 'productivity', 'meta'],
  },
  {
    id: '5',
    title: 'The Philosophy of Clean Code',
    excerpt: 'Why readability matters more than cleverness, and how I\'m trying to write code for my future self.',
    content: `I used to take pride in writing clever one-liners. Now I take pride in writing code that needs no comments because the intent is obvious.

A function should do one thing. A variable name should tell a story. Magic numbers are never acceptable.

The real test: can someone unfamiliar with the codebase understand what this does in 30 seconds?

Clean code is an act of empathy—for your teammates, for your future self, for the poor soul who inherits your project at 2 AM during an outage.`,
    category: 'articles',
    date: '2024-11-18',
    tags: ['best-practices', 'code-quality', 'philosophy'],
  },
];
