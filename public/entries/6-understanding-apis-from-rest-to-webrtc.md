---
id: 6
title: "Understanding APIs: From REST to WebRTC"
excerpt: Notes on different API architectures and when I actually use each one.
category: articles
date: 2025-12-04
tags: ["api","rest","grpc","graphql","websockets","reflection"]
---

So I was thinking about APIs today. Not in the "let me write documentation" way, but more like... why do we have so many different types and when do I actually reach for each one?

## REST API

REST is the one I use most. It's simple, it makes sense. You want data? Make a GET request. You want to create something? POST. It's like having a conversation where you always know what the other person is thinking.

The thing about REST that clicks for me is that it's stateless. The server doesn't remember me. Each request is independent. Which sounds isolating but actually means it scales beautifully. Millions of requests, all completely independent, and the server just... handles it.

```
GET /api/users/1
→ Returns user data
```

That's it. Simple. Clean. Most of the stuff I build uses REST because it's rarely the bottleneck.

## SOAP

Honestly, SOAP feels like overkill for most things I do. But I get why it exists. Banks use it. Government systems use it. When you're transferring actual money, you want guarantees.

SOAP is formal. Everything's wrapped in XML, there's a header, a body, all these rules. It's like the difference between texting a friend and signing a contract. Both work, but for different situations.

```xml
<soap:Envelope>
  <soap:Body>
    <!-- your request here -->
  </soap:Body>
</soap:Envelope>
```

I haven't actually used SOAP in any real project. But I understand why it's there. When reliability matters more than speed, SOAP wins.

## gRPC

I keep hearing about gRPC and thinking I should learn it properly. The performance gains are real - 7 to 10 times faster than REST in many cases. It uses binary protocol buffers instead of text, which is why it's so fast.

The thing that intrigues me is the bidirectional streaming. Both client and server can send data simultaneously, which is powerful for real-time stuff.

```proto
service UserService {
  rpc GetUser(UserId) returns (User) {}
}
```

Netflix uses gRPC. Uber uses it. It's not just hype. But for my projects? REST usually does the job. Maybe someday when I'm building something that actually needs that performance, I'll dive deeper into gRPC.

## GraphQL

GraphQL is interesting because it fixes real problems I've had with REST. Like when I need just a user's name and email but REST sends back their entire profile? That's annoying. Or when I need data from multiple endpoints and have to make three separate requests?

GraphQL says: you write exactly what you want, you get exactly that back.

```graphql
query {
  user(id: 1) {
    username
    email
  }
}
```

No over-fetching. No under-fetching. One request, perfect data.

The thing is, GraphQL adds complexity. You need a server that understands GraphQL. You need to write queries. For simple CRUD apps? REST is faster to build. For complex data needs? GraphQL shines.

I used GraphQL once and it was slick. I should use it more.

## Webhooks

Webhooks are the reverse of how I normally think. Instead of my app asking "hey, is there anything new?" every few seconds, the server just... tells me when something happens.

GitHub fires a webhook when I push code. Shopify sends one when an order comes in. My app just has to listen.

```
Event happens → POST request to my URL → I handle it
```

It's elegant. No polling. No wasted requests. Just real-time notifications. I used webhooks for a Slack bot once and it was so much cleaner than constantly checking an API.

## WebSockets

WebSockets keep the connection open. Both sides can talk anytime. It's like having a phone call instead of trading text messages.

```javascript
const ws = new WebSocket('wss://api.example.com/live');
ws.onmessage = (event) => console.log(event.data);
```

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

REST has served me well. And I think that's the real lesson here - the simplest tool that solves your problem is usually the right choice.
