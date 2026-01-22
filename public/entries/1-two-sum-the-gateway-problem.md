---
id: 1
title: "Two Sum: The Gateway Problem"
excerpt: Every journey begins somewhere. For most of us in competitive programming, it begins with Two Sum.
category: leetcode
date: 2024-12-01
tags: ["arrays","hash-map","easy"]
---

The Two Sum problem is deceptively simple: given an array of integers and a target, find two numbers that add up to the target.

My first instinct was the brute force approach—O(n²) nested loops. It works, but there's elegance in the hash map solution that reduces it to O(n).

The insight: for each number, we ask "have I seen its complement before?" This transforms a search problem into a lookup problem.

```python
def twoSum(nums, target):
    seen = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in seen:
            return [seen[complement], i]
        seen[num] = i
```

What I learned: sometimes the best optimization is changing how you ask the question.
