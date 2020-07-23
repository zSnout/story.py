---
group: Flow
---

# Boolean Expressions
This article explains what boolean expressions are and how to write them.

## Overview
A boolean expression is something that evaluates to `true` or `false`. You always write them in this format: `${varname} {operator} {value}`.

The `operator` can be `<`, `>`, `<=`. `>=`, `=`, or `!=`. `!=` means "doesn't equal".
If `operator` is `<`, `>`, `<=`, or `>=`, then `value` must be a number.

## Examples
```
$money > 500
$money <= 800
```

In the first example, we are checking whether the `money` variable is less than `500`.
In the second example, we are checking whether the `money` variable is greater than or equal to `800`.

## Usage
Booleans are used in [if blocks](if-blocks), [for loops](for-loops), [while loops](while-loops), and [do-while loops](while-loops).
