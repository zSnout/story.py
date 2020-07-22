# Text
This article explains how to display (print) text to the user.

## Waiting for Enter
To print text, just add it to your block:
``` storymatic
start
  Welcome to my first story!
```

Using this method will wait for the user to press Enter before executing the next command. For example, in
``` storymatic
start
  Welcome to my first story!
  Do you like it?
```
the user will have to press Enter after seeing `Welcome to my first story!` to view the next line.

## `@nowait`
There is a simple way to print the text without waiting for Enter, which is by using the `@nowait` command. Just type `@nowait ` before your text to make sure that it instantly prints.

### Example
``` storymatic
start
  On this line, the user has to press Enter to go to the next line.
  @nowait This line will print and skip the Enter key.
```
