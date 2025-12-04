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
  {
    id: '6',
    title: 'Understanding APIs: From REST to WebRTC',
    excerpt: 'Notes on different API architectures and when I actually use each one.',
    content: `So I was thinking about APIs today. Not in the "let me write documentation" way, but more like... why do we have so many different types and when do I actually reach for each one?

## REST API

REST is the one I use most. It's simple, it makes sense. You want data? Make a GET request. You want to create something? POST. It's like having a conversation where you always know what the other person is thinking.

The thing about REST that clicks for me is that it's stateless. The server doesn't remember me. Each request is independent. Which sounds isolating but actually means it scales beautifully. Millions of requests, all completely independent, and the server just... handles it.

\`\`\`
GET /api/users/1
→ Returns user data
\`\`\`

That's it. Simple. Clean. Most of the stuff I build uses REST because it's rarely the bottleneck.

## SOAP

Honestly, SOAP feels like overkill for most things I do. But I get why it exists. Banks use it. Government systems use it. When you're transferring actual money, you want guarantees.

SOAP is formal. Everything's wrapped in XML, there's a header, a body, all these rules. It's like the difference between texting a friend and signing a contract. Both work, but for different situations.

\`\`\`xml
<soap:Envelope>
  <soap:Body>
    <!-- your request here -->
  </soap:Body>
</soap:Envelope>
\`\`\`

I haven't actually used SOAP in any real project. But I understand why it's there. When reliability matters more than speed, SOAP wins.

## gRPC

I keep hearing about gRPC and thinking I should learn it properly. The performance gains are real - 7 to 10 times faster than REST in many cases. It uses binary protocol buffers instead of text, which is why it's so fast.

The thing that intrigues me is the bidirectional streaming. Both client and server can send data simultaneously, which is powerful for real-time stuff.

\`\`\`proto
service UserService {
  rpc GetUser(UserId) returns (User) {}
}
\`\`\`

Netflix uses gRPC. Uber uses it. It's not just hype. But for my projects? REST usually does the job. Maybe someday when I'm building something that actually needs that performance, I'll dive deeper into gRPC.

## GraphQL

GraphQL is interesting because it fixes real problems I've had with REST. Like when I need just a user's name and email but REST sends back their entire profile? That's annoying. Or when I need data from multiple endpoints and have to make three separate requests?

GraphQL says: you write exactly what you want, you get exactly that back.

\`\`\`graphql
query {
  user(id: 1) {
    username
    email
  }
}
\`\`\`

No over-fetching. No under-fetching. One request, perfect data.

The thing is, GraphQL adds complexity. You need a server that understands GraphQL. You need to write queries. For simple CRUD apps? REST is faster to build. For complex data needs? GraphQL shines.

I used GraphQL once and it was slick. I should use it more.

## Webhooks

Webhooks are the reverse of how I normally think. Instead of my app asking "hey, is there anything new?" every few seconds, the server just... tells me when something happens.

GitHub fires a webhook when I push code. Shopify sends one when an order comes in. My app just has to listen.

\`\`\`
Event happens → POST request to my URL → I handle it
\`\`\`

It's elegant. No polling. No wasted requests. Just real-time notifications. I used webhooks for a Slack bot once and it was so much cleaner than constantly checking an API.

## WebSockets

WebSockets keep the connection open. Both sides can talk anytime. It's like having a phone call instead of trading text messages.

\`\`\`javascript
const ws = new WebSocket('wss://api.example.com/live');
ws.onmessage = (event) => console.log(event.data);
\`\`\`

Perfect for live updates. Chat apps. Real-time dashboards. Stock tickers. Anything where you need instant push notifications.

I haven't built anything serious with WebSockets yet. But I get why they're essential for real-time applications.

## WebRTC

WebRTC is peer-to-peer. Your video call doesn't go through a server - it goes straight from your device to theirs. It handles all the messy networking stuff automatically.

Think about every video call you've made on Zoom or Google Meet. That direct connection? WebRTC.

It's technically complex but damn, it's powerful. No central server bottleneck. Lower latency. More privacy since your data isn't being routed through someone else's infrastructure.

I haven't built anything with WebRTC myself. But it's on my mental list of "things I should learn when I have a project that needs it."

## The Takeaway

I use REST for 90% of what I build. It's boring, it's predictable, it works. GraphQL when I need flexibility. Webhooks when I want real-time notifications without polling. WebSockets for live data streaming.

SOAP? gRPC? WebRTC? They're tools in the toolbox I haven't needed yet. But that's okay. You don't need to master everything. You need to understand when to reach for each one.

REST has served me well. And I think that's the real lesson here - the simplest tool that solves your problem is usually the right choice.`,
    category: 'articles',
    date: '2025-12-04',
    tags: ['api', 'rest', 'grpc', 'graphql', 'websockets', 'reflection'],
  },
];
