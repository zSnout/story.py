---
group: Flow
---

# If, Else, and Elseif
As the most common use of [booleans](boolean), if blocks are a quick and easy way to check if a boolean expression is `true`.

## Overview
If blocks run statements inside if a boolean expression is `true`. You begin by writing `@if {condition}`, and then put statements inside.

## Example
``` storymatic
$money = 300

start
  @if $money < 500
    You have less than $500.
```

## @else
You can also specify statements to run if the condition is `false`.
You do this by typing `@else` at the same level of indentation that your `@if` had, and putting statements inside it.
``` storymatic
$money = 300

start
  @if $money < 500
    You have less than $500.
  @else
    You do not have less than $500.
```

Using nested `@if`s with `@else`, you can do several `@if` clauses:
``` storymatic
$money = 300

start
  @if $money < 500
    You have less than $500.
  @else
    @if $money < 1000
      You have less than $1000.
    @else
      @if $money < 2000
        You have less than $2000.
      @else
        You do not have less than $2000.
```
However, this can get a bit messy, so let's learn about `@elseif`.

## @elseif
`@elseif` is an alternative method to using nested `@if`s. You use it similar to `@if`, but it must follow an `@if` or `@elseif` statement.
You can always put `@else` after a group of `@elseif`s or one `@elseif`.

Here's the example from above, written using `@elseif`:
``` storymatic
$money = 300

start
  @if $money < 500
    You have less than $500.
  @elseif $money < 1000
    You have less than $1000.
  @elseif $money < 2000
    You have less than $2000.
  @else
    You do not have less than $2000.
```
