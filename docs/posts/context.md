---
group: Flow
---

# Contexts
This article explains how to use contexts.

## Overview
A context is a clone of the current story with all local variables reset, but keeping all global variables.
You can run statements in a different context by writing `@context` and putting statements inside the `@context` command.

## Example
``` storymatic
@global $money = 500
$name = Steve

start
  $name = Annie
  $money = 700
  name: $name, money: $money
  @context
    name: $name, money: $money
```
should output

```
name: Annie, money: 700
name: Steve, money: 700
```
because name is local, but money is global.
