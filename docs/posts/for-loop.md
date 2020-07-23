---
group: Loops
---

# For Loops
This article explains how to use for loops, which are a shortened and more advanced version of [while loops](while-loop).

## Overview
Remember [while loops](while-loop)? What if we want to increment a variable each time? We could do:
``` storymatic
start
  $i = 0
  @while $i < 5
    @nowait $i
    $i++
```
or we could use a `for` loop.

A for loop runs a declaration, and repeats some statements while a condition is true. Each time the statements inside are run, an increment is run.

You write `@for {declaration};{condition};{increment}` and then put statements inside. The first example above could be rewritten with for loops like this:
```
start
  @for $i = 0; $i < 5; $i++
    @nowait $i
```

Note that there is no type of for loop that acts like a do-while loop.
