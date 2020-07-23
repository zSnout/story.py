---
group: Input
---

# Menus
This article explains how to ask the user to choose between several options.

## Overview
A menu has several options, and different statements will run depending on which option the user selects. For example, you might want to ask the user what their favorite flavor of ice cream is.

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

In the example
