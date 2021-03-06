---
group: Loops
---

# While Loops and Do-While Loops
While loops execute a statement while a condition is `true`. This article explains how to make them.

## Overview
A while loop executes some statements while a condition is `true`. If the condition was originally `false`, a while loop will not run.
A do-while loop will always run at least once, even if the condition starts out as `false`.

You can write a while loop by writing `@while {condition}`, and putting statements inside.
You can write a do-while loop by writing `@dowhile {condition}`, and putting statements inside.

## Example
``` storymatic
$money = 0

start
  @while $money <= 500
    $money += 50
    @nowait $money
```
The example above will increment `money` by `50` until it is greater than `500`. However, if `money` is already greater than `500`, it will not run.

The example below will do the same thing, but will always increment `money` at least once.
``` storymatic
$money = 0

start
  @dowhile $money <= 500
    $money += 50
    @nowait $money
```
