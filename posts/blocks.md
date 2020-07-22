---
group: Basics
---

# Blocks and States
The core foundation of Storymatic is the block and state system.

## Overview
A block is a collection of statements to run and text to output. `State` is an alternative name for `block`, but it is usually used to describe the names of blocks, and the internal state that the program is in, while `block` is used to describe the statements inside.

Here is an example of a block:
``` storymatic
start
  Hello $name!
  @menu What would you like to do today?
    ...
```

