---
group: Flow
---

# @goto and @run
By helping keep your story neat, and opening up more possibilites, `@goto` and `@run` are essential parts of Storymatic.

## Overview
Both `@goto` and `@run` help you transition between blocks. There is a slight difference, which is that `@goto` goes to a block and exits the current one, while `@run` goes to a block, and when stopped, continues the current one.

You write them like this:
```
@goto {blockname}
@run {blockname}
```

## Example
Remember our example from [`@menu`](menu)? We can improve this by using seperate blocks.
``` storymatic
start
  Welcome to the ice cream store!
  @menu What flavor would you like to buy?
    Chocolate
      @goto chocolate
    Vanilla
      You bought vanilla!
    Strawberry
      You bought strawberry!

chocolate
  @menu Would you like milk or dark chocolate?
    Dark Chocolate
      You bought dark chocolate!
    Milk Chocolate
      You bought milk chocolate!
```

In the example above, if the user selects `Chocolate`, we go to the state `chocolate`.

In this example below
``` storymatic
start
  Welcome to the ice cream store!
  @menu What flavor would you like to buy?
    Chocolate
      @goto chocolate
    Vanilla
      You bought vanilla!
    Strawberry
      You bought strawberry!
  Goodbye!

chocolate
  @menu Would you like milk or dark chocolate?
    Dark Chocolate
      You bought dark chocolate!
    Milk Chocolate
      You bought milk chocolate!
```
the user will not see `Goodbye!` if they selected `Chocolate` because we used `goto`. However, in
``` storymatic
start
  Welcome to the ice cream store!
  @menu What flavor would you like to buy?
    Chocolate
      @goto chocolate
    Vanilla
      You bought vanilla!
    Strawberry
      You bought strawberry!
  Goodbye!

chocolate
  @menu Would you like milk or dark chocolate?
    Dark Chocolate
      You bought dark chocolate!
    Milk Chocolate
      You bought milk chocolate!
```
