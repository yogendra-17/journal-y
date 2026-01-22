---
id: 8
title: Search a 2D Matrix II
excerpt: Start from the top-right corner and walk the matrix like a staircase.
category: leetcode
date: 2025-12-24
tags: ["matrix","binary-search","medium","cpp"]
---

**Straight to the point:** start from the **top-right corner** and walk the matrix like a staircase.

### Why this works
Start at the top-right corner `(0, n-1)`. This position is special because it's the only place where:
* Moving **left** always gives smaller numbers.
* Moving **down** always gives larger numbers.

This gives us a clear decision tree at every step:
* **Too big?** Move **left** to eliminate the current column (everything below is even bigger).
* **Too small?** Move **down** to eliminate the current row (everything left is smaller).
* **Found it?** Return `true`.

Because we only move left or down, we never backtrack. We peel off one row or one column with every comparison.

* Time: **O(m + n)** — at most m steps down and n steps left.
* Space: **O(1)** — no extra data structures needed.

### C++ implementation

```cpp
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
```

Think of it as **binary elimination without binary search**: every comparison kills an entire row or column. Is the current number too big? Kill the column. Too small? Kill the row.
