---
group: Variables
---

# Variables
Variable are an amazing way to store data about the user! Learn how to work with them in this article!

## Overview
A variable contains data. It can either be declared as a [global or local variable](#global-vs-local), and can be declared as a local from within a block.

To set a local variable, use `${varname} = {value}`.
To set a global variable, use `@global ${varname} = {value}`.

## Example
``` storymatic
@global $money = 500
$name = Steve

start
  $name has $money dollars.
```

In the example above, we declared `money` as a global variable with the value `500`, and `name` as a local variable with the value `Steve`.
To use variables, you just type `${varname}` in your text. To make sure that the parser isn't confused, you can also use `{${varname}}`. Ex: `{$name}`.

## Redeclaring Variables
You can change variable by redeclaring them in a block:
``` storymatic
@global $money = 500
$name = Steve

start
  $name has $money dollars.
  $money = 1000
  Now $name has $money dollars!
```

Note that when redeclaring, you do not use `@global`, even if the variable is global. You can also declare variable from within a block:
``` storymatic
@global $money = 500
$name = Steve

start
  $friend = Annie
  $name has $money dollars.
  $money = 1000
  Now $name has $money dollars!
  $name's friend $friend also has $money dollars!
```

When declaring a variable from within a block, you can also use the names of variables within the value:
``` storymatic
@global $money = 500
$name = Steve

start
  $friend = $name's friend Annie
  $name has $money dollars.
  $money = 1000
  Now $name has $money dollars!
  $friend also has $money dollars!
```

## Changing Variables
You can also add, subtract, multiply, or divide the current value of a variable to another value by using different operators.

 - For `+`, use `+=`: `$money += 20`.
 - For `-`, use `-=`: `$money -= 20`.
 - For `*`, use `*=`: `$money *= 20`.
 - For `/`, use `/=`: `$money /= 20`.

``` storymatic
@global $money = 500
$name = Steve

start
  $friend = $name's friend Annie
  $name has $money dollars.
  $money += 630
  Now $name has $money dollars!
  $friend also has $money dollars!
```

There's also shortcuts for adding and subtracting one: `${varname}++` and `${varname}--`.

### Appending Text
You can also append text to a variable with `.=`. For example,
``` storymatic
$text = a

start
  $text
  $text .= b
  $text
  $text .= c
  $text
```

## Global vs. Local
Global variables are not reset when the program switches to a different context, while local variables are.

## Special Variables
There are two special variables: `@runfrom` and `@reference`.

When you use `@goto` or `@run` to run a different block, `@reference` is set to the state that ran `@goto` or `@run`.

When you use `@context`, `@runfrom` is set to the state that ran `@context`.
