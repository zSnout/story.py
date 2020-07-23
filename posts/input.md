---
group: Variables, Input
---

# Inputs
You can ask the user to type a custom value for a variable. This article explains how.

## Asking for Text
To input for text, use `${varname} = @input`. You can optionally provide a question.
``` storymatic
start
  $name = @input What is your name?
  Hi, $name!
```

## Asking for Numbers
To input for a number, use `${varname} = @number`. You can optionally provide a question.
``` storymatic
start
  $name = @input What is your name?
  $money = @number How much money do you have?
  Hi, $name! You have $$money.
```
