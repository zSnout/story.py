---
group: Basics
---

# Blocks and States
The core foundation of Storymatic is the block and state system.

## Overview
A block is a collection of statements to run and text to output. `State` is an alternative name for `block`, but it is usually used to describe the names of blocks, and the internal state that the program is in, while `block` is used to describe the statements inside.

## Example
``` storymatic
start
  Hello Bob!
  What would you like to do today?
```

The first line (`start`) is the state (name). A state can only contain letters, numbers, and underscores, and must have no indentation.
The indented text (`Hello $name...`) is the block (content). A block must be indented. The block can have several lines, but they must all be indented.

The part of the story that contains the states and blocks is called the `root section`, or the `root`.

**The root should always contain a state called `start`, which is where your story should start.**

## More Examples

Here is another example with two states (`chocolate` and `vanilla`):
``` storymatic
chocolate
  Wow! Chocolate is also my favorite ice cream flavor!
  Would you like to buy some?

vanilla
  I also love vanilla!
```
Notice how both states have no indentation, while the blocks have indentation.

You can have different levels of indentation for different blocks; thus, this example is valid Storymatic code:
``` storymatic
chocolate
 Wow! Chocolate is also my favorite ice cream flavor!
 Would you like to buy some?

vanilla
    I also love vanilla!
```
