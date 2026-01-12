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
  {
    id: '7',
    title: 'The Genesis Block: When Mathematics First Spoke Back to Power',
    excerpt: 'The story of how Bitcoin actually began not with a launch, but with a quiet, immutable declaration hidden in the first block ever mined.',
    content: `I’ve been thinking a lot about origins lately. Not just where things come from, but how they’re born. Most tech launches these days are loud marketing campaigns, press releases, countdown timers. But Bitcoin? Bitcoin was different. It didn’t launch. It just... appeared.

Imagine it’s January 3rd, 2009. The world is in a mess. Global finance is crashing, banks are being bailed out with taxpayer money, and nobody really knows what’s going to happen next. And in the middle of all that noise, Satoshi Nakamoto quietly mines a single block. 

To a machine, it was just data. But looking back, it was a line drawn in the sand. This was the Genesis Block. Block 0. And the more you look into it, the more you realize it was never meant to be just another block in a chain.

### The Block That Breaks the Rules

What’s wild about the Genesis Block is that it technically breaks all the rules Bitcoin eventually set for itself. It has no previous block to link to. It’s hard-coded into the software itself, everyone has to agree on it because it’s literally part of the code.

In distributed systems, we call this a trusted root. But in this case, it feels more like an anchor. Even the reward - the 50 BTC that Satoshi "earned" for mining it - can never be spent. It’s sitting there, forever out of reach. If you were looking for a payday, this makes zero sense. But if you’re making a declaration? It makes perfect sense.

### A Sentence Hidden in Plain Sight

But here’s the part that really gets me. Satoshi did something that the protocol didn't require him to do. Inside the block, buried in the coinbase transaction where normally you'd just see random bits, he left a message.

"The Times 03/Jan/2009 Chancellor on brink of second bailout for banks."

Think about that for a second. From an information-theoretic standpoint, the odds of random bytes forming a perfect, grammatically correct English headline from a real newspaper on a specific day are basically zero. It wasn't an accident. It was a signal. 

### Why That Headline?

At first, I thought it was just a clever timestamp. You can’t forge a newspaper headline from the future, right? So it proves the block couldn't have been mined before that day. Reality itself verified the timing. 

But it’s deeper than just a date. January 2009 was the peak of the financial crisis. Governments were using public money to save private banks while the average person was left to figure things out. It was centralized power at its most obvious.

Then you look at Bitcoin’s design. No central bank. No bailouts. No discretionary issuance. Just math and verification. The message wasn't just a timestamp; it was a payload of context. It explains *why* Bitcoin needed to exist in the first place.

### One Message, Then Silence

The thing that strikes me most is that Bitcoin never does this again. After Block 0, there are no more headlines. No more commentary. No more embedded opinions. Satoshi stepped back and let the math take over. 

That restraint is powerful. It’s like the Genesis Block spoke once, very clearly, and then stepped out of the way to let the protocol become its own thing. Rules, hashes, and difficulty adjustments took the place of human manifestos.

Every node on the network still carries that sentence today. Not because it has to for the math to work, but because we shouldn't forget why we're here. The Genesis Block is where mathematics briefly acknowledged history - and then moved on. 

And honestly, that’s probably the most Bitcoin thing about it.

![The original Times headline that Satoshi embedded in the Genesis Block](/journal-y/genesis_block.jpg)`,
    category: 'blockchain',
    date: '2025-01-03',
    tags: ['bitcoin', 'blockchain', 'history', 'cryptography', 'satoshi'],
  },
  {
    id: '8',
    title: 'Search a 2D Matrix II',
    excerpt: 'Start from the top-right corner and walk the matrix like a staircase.',
    content: `**Straight to the point:** start from the **top-right corner** and walk the matrix like a staircase.

### Why this works
Start at the top-right corner \`(0, n-1)\`. This position is special because it's the only place where:
* Moving **left** always gives smaller numbers.
* Moving **down** always gives larger numbers.

This gives us a clear decision tree at every step:
* **Too big?** Move **left** to eliminate the current column (everything below is even bigger).
* **Too small?** Move **down** to eliminate the current row (everything left is smaller).
* **Found it?** Return \`true\`.

Because we only move left or down, we never backtrack. We peel off one row or one column with every comparison.

* Time: **O(m + n)** — at most m steps down and n steps left.
* Space: **O(1)** — no extra data structures needed.

### C++ implementation

\`\`\`cpp
class Solution {
public:
    bool searchMatrix(vector<vector<int>>& matrix, int target) {
        int m = matrix.size();
        int n = matrix[0].size();
        
        int r = 0, c = n - 1;  // start top-right
        
        while (r < m && c >= 0) {
            if (matrix[r][c] == target) return true;
            if (matrix[r][c] > target) c--;   // move left: eliminate column
            else r++;                          // move down: eliminate row
        }
        return false;
    }
};
\`\`\`

Think of it as **binary elimination without binary search**: every comparison kills an entire row or column. Is the current number too big? Kill the column. Too small? Kill the row.`,
    category: 'leetcode',
    date: '2025-12-24',
    tags: ['matrix', 'binary-search', 'medium', 'cpp'],
  },
  {
    id: '9',
    title: 'ESP32: When Two Cores Change Everything',
    excerpt: 'How Espressif took a commodity microcontroller architecture and turned it into the backbone of modern IoT by making one critical decision: give it two brains.',
    content: `On paper, ESP32 is another WiFi-enabled MCU. But there's something different about it. Something that fundamentally changes how we think about embedded systems.

It has two cores.

That sounds simple. Almost obvious now. But think about what that means for a $4 chip. Most microcontrollers at this price point are single-core, running bare metal or a lightweight RTOS, carefully orchestrating every peripheral access to avoid blocking. The ESP32 said: what if you didn't have to choose?

### The Architecture That Shouldn't Exist at This Price

The ESP32 uses two Tensilica Xtensa LX6 32-bit RISC cores. Not ARM—Xtensa. This is important because Tensilica's architecture is configurable. Espressif didn't just license a core; they tailored it.

Each core can run from 80MHz to 240MHz with dynamic frequency scaling. That's 600 DMIPS of processing power. For context, that's more than enough to run signal processing, handle WiFi/Bluetooth stacks, and still have headroom for your application logic.

The cores are designated PRO_CPU (Protocol CPU) and APP_CPU (Application CPU), but here's the thing: it's a symmetric multiprocessing (SMP) architecture. Both cores have equal access to memory, peripherals, interrupts, and cache. The naming is more of a convention than a constraint.

\`\`\`
Memory Architecture:
├── 520KB Internal SRAM
│   ├── 192KB DRAM0 (data, accessible by both cores)
│   ├── 128KB DRAM1 (shared, DMA-capable)
│   └── 200KB DRAM2 (additional shared space)
├── 448KB ROM (boot + core functions)
├── 16KB RTC SRAM (8KB main + 8KB ULP coprocessor)
└── Instruction RAM (IRAM) for time-critical code
\`\`\`

What strikes me about this memory layout is the intentionality. They didn't just slap two cores together. The IRAM exists specifically so you can pin critical code to fast memory and avoid cache misses during interrupt handling. The RTC SRAM lets the ultra-low-power coprocessor run while the main cores sleep, consuming just 5µA.

This is systems thinking. Not just adding features, but designing for real-world constraints.

### FreeRTOS and the Scheduling Problem

The ESP32 ships with FreeRTOS baked into the ESP-IDF. This isn't just convenience—it's necessary. Managing two cores manually would be a nightmare. But FreeRTOS on dual-core introduces interesting challenges.

The scheduler runs independently on each core. When a core needs to select a task, it picks the highest-priority ready task that:
1. Has compatible affinity (pinned to that core or unpinned)
2. Isn't already running on the other core

This is where it gets interesting. You can pin tasks to specific cores using \`xTaskCreatePinnedToCore()\`. Why would you do this?

**Core 0 (PRO_CPU)** typically handles the WiFi stack. WiFi is timing-sensitive. Packet reception has hard deadlines. If you miss them, you get retransmissions, latency spikes, connection drops. Pinning the network stack to Core 0 isolates it from application jitter.

**Core 1 (APP_CPU)** runs your application logic. Sensor polling, data processing, business logic—all the stuff that can tolerate some variance in execution time.

But here's the subtlety: for tasks of the same priority, FreeRTOS implements "Best Effort Round Robin" time slicing. It's not strict round-robin because real-time constraints take precedence, but it ensures fairness by rotating tasks through the ready queue.

### The Scheduling Algorithm Trade-offs

Academic research on FreeRTOS scheduling reveals something non-obvious: the optimal algorithm depends on your task set characteristics.

**Rate-Monotonic Scheduling (RMS)** is the default. Fixed priorities based on task period. It's provably optimal for uniprocessor fixed-priority scheduling (Liu & Layland, 1973). Low overhead, simple implementation. But it can underutilize the CPU if task periods aren't harmonic.

**Earliest-Deadline-First (EDF)** is theoretically superior—it can schedule task sets up to 100% CPU utilization. But there's a catch: dynamic priority queues. Every time a task becomes ready, you need to reorder the queue. On a min-heap, that's O(log n) per insertion. On low-power embedded systems, that overhead matters.

Research comparing EDF implementations on ESP32 shows that heap-based EDF (EDF-H) has higher overhead than RMS in many cases. But linked-list-based EDF (EDF-L) can outperform RMS when task sets are carefully structured. The data structure choice matters as much as the algorithm.

For task dispatching, the default FreeRTOS implementation uses a linked list. Fine for small task sets. But studies using the ESP32-S3 show that for larger task sets, Red-Black Trees or Heaps can significantly reduce dispatch latency. The crossover point depends on your specific workload.

This is the kind of thing you only learn by measuring. Theory gives you bounds. Reality gives you constants.

### What This Enables

The dual-core architecture unlocks design patterns that are painful on single-core systems:

**Parallel Processing**: Run FFT on one core while the other handles I/O. No blocking, no careful interleaving.

**Isolation**: Keep the WiFi stack on Core 0, application on Core 1. A bug in your code won't crash the network.

**Real-time + Best-effort**: Pin hard real-time tasks (motor control, sensor sampling) to one core with high priority. Let the other core handle background tasks (logging, cloud sync) that can tolerate latency.

I built a sensor node that samples ADC at 10kHz, runs a Kalman filter, and streams data over WiFi. On a single-core MCU, you're fighting for cycles. On the ESP32, Core 1 handles the signal processing loop, Core 0 manages the network. They communicate through a lock-free ring buffer. Clean separation of concerns.

### The Peripheral Ecosystem

But the cores are only part of the story. The ESP32 has:
- **WiFi 802.11 b/g/n** and **Bluetooth 4.2 BR/EDR + BLE**
- **18-channel 12-bit ADC** (though the effective resolution is closer to 9-10 bits due to noise)
- **2x 8-bit DACs**
- **10 capacitive touch sensors** (no external components needed)
- **Hardware crypto acceleration**: AES, SHA-2, RSA, ECC, RNG
- **4x SPI, 2x I2S, 2x I2C, 3x UART**
- **CAN 2.0, Ethernet MAC, SD/SDIO**

The crypto acceleration is underrated. AES-256 encryption in hardware means you can secure IoT communications without killing your battery. The RNG is a true hardware random number generator, not a PRNG seeded from ADC noise.

### The Power Story

Deep sleep: **5µA**. That's not a typo. The ULP coprocessor can wake the main cores based on sensor thresholds, timer events, or external interrupts. You can build a battery-powered sensor that lasts months.

The power management is sophisticated. You can independently gate clocks to unused peripherals, scale CPU frequency dynamically, and even power down individual SRAM banks. The 40nm process technology helps, but the real win is the architecture.

### What It Costs

Here's the thing that still surprises me: you can buy an ESP32 module for under $4 in quantity. A dual-core 240MHz processor with WiFi, Bluetooth, crypto acceleration, and a full peripheral set. For the price of a coffee.

This democratized embedded systems. Projects that would have required a $50 ARM SoC can now run on a $4 ESP32. The barrier to entry collapsed.

### The Trade-offs

Nothing is free. The ESP32 has quirks:
- **ADC linearity** isn't great. You need calibration for precision measurements.
- **WiFi current spikes** can hit 240mA. Your power supply needs to handle that.
- **Xtensa toolchain** is less mature than ARM. Debugging can be painful.
- **Documentation** is... inconsistent. You'll be reading the technical reference manual and the ESP-IDF source code.

But these are solvable problems. The architecture is sound.

### The Real Insight

The ESP32 succeeded because it made the right trade-offs. Not the fastest cores. Not the lowest power. Not the most peripherals. But the right combination at the right price point.

Dual-core SMP was the key decision. It turned a microcontroller into a platform. You're not just running code—you're orchestrating concurrent workflows with real isolation and parallelism.

And that changes what you can build. From WiFi-connected sensors to edge ML inference to real-time audio processing, the ESP32 handles it because it gave you two cores when everyone else was still thinking in single-threaded terms.

That's the kind of architectural decision that defines a generation of hardware.`,
    category: 'articles',
    date: '2026-01-13',
    tags: ['esp32', 'embedded-systems', 'rtos', 'freertos', 'iot', 'microcontrollers', 'dual-core'],
  },
];
