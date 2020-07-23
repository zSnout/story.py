---
group: Input
---

# Menus
This article explains how to ask the user to choose between several options.

## Overview
A menu has several options, and different statements will run depending on which option the user selects. For example, you might want to ask the user what their favorite flavor of ice cream is.

A menu starts with the `@menu` command, which can optionally have a question provided. Inside the `@menu` command, there must be a list of options, all indented. Each option must also have some statemants inside.

## Example
``` storymatic
start
  Welcome to the ice cream store!
  @menu What flavor would you like to buy?
    Chocolate
      You bought chocolate!
    Vanilla
      You bought vanilla!
    Strawberry
      You bought strawberry!
```

In the above example, a menu will run with the options `Chocolate`, `Vanilla`, and `Strawberry`, and depending on which item you select, the program will say which flavor you bought!

Note that menus can have more than one statement inside each option, and can even have sub-menus, which this example uses:
``` storymatic
start
  Welcome to the ice cream store!
  @menu What flavor would you like to buy?
    Chocolate
      @menu Would you like milk or dark chocolate?
        Dark Chocolate
          You bought dark chocolate!
        Milk Chocolate
          You bought milk chocolate!
    Vanilla
      You bought vanilla!
    Strawberry
      You bought strawberry!
```
