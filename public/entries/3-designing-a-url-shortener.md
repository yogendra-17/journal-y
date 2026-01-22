---
id: 3
title: Designing a URL Shortener
excerpt: A classic system design problem that teaches us about trade-offs, scalability, and distributed systems.
category: system-design
date: 2024-11-25
tags: ["distributed-systems","scalability","databases"]
---

The URL shortener is a rite of passage in system design interviews. But beyond interviews, it's a masterclass in trade-offs.

Key considerations:
- How do we generate unique short codes? (Counter vs. hash vs. random)
- How do we handle collisions?
- How do we scale reads vs. writes?
- What's our caching strategy?

The beauty is there's no single right answer. A startup might use a simple database with sequential IDs. A company like Bitly needs distributed ID generation, consistent hashing, and global CDN caching.

The lesson: understand the scale before designing the solution.
