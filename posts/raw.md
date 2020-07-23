---
group: Basics
---

# Raw Text, @pass, and @base
This article explains how to print raw text without "evaluating" it.

## Overview
You can put a space before text to force it to be raw:
``` storymatic
$money = 500

start
  This line will print the value of $money.
   This line will actually print $money.
```
The above example should print:
```
This line will print the value of 500.
This line will actually print $money.
```

The problem is when you put a space before each line, because then the level of indentation changes, and all of your statements are now non-raw. How do we fix this?

## @base
We can fix it by putting a line that prints nothing as the first line, such as `$var = for indent`.
However, this is a messy way to do it, so we need a statement that does nothing. Meet `@base`!

`@base` on a line by itself will literally do nothing, but it can help place the indentation level:
``` storymatic
$money = 500

start
  @base
   This line will print $money.
   This line will also print $money.
```

## @pass
There is a second statement like `@base`: `@pass`. `@pass` also does nothing.

## @base vs. @pass
@base is meant to be used to set the level of indentation, while `@pass` is meant to aid in creating blank blocks, such as a blank option inside an `@menu` block.
They can be used interchangeably, but please respect their semantic meanings.
