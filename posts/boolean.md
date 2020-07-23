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

## Advanced Expressions
You can also join together several simple conditions with `and`, `or`, and `not`.
In advanced expressions, `not` has higher precedence than `and`, which has higher precedence than `or`, meaning `not` is evaluated before `and`, and `and` is evaluated before `or`.

For example, you can check whether `money` is between 300 and 800 with `$money > 300 and $money < 800`.
Note that `300 < $money and $money < 800` will always evaluate to `false` because the variable should come before the value.

## Usage
Booleans are used in [if blocks](if-block), [for loops](for-loop), [while loops](while-loop), and [do-while loops](while-loop).
