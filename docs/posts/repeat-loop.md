---
group: Loops
---

# The Repeat Loop
The article explains how to use the most basic loop, the repeat loop, which repeats some statements a specified number of times.

## Overview
You write `@repeat {number}` and put statements inside to use it. `number` must be a whole number between `1` and `99`.

## Example
``` storymatic
$money = 0

start
  @repeat 5
    $money += 500
    @nowait $money
```

The above example will increment `money` by `500` `5` times.
