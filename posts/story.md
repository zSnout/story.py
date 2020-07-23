# Storymatic

 - [`story` Object](#story-object)
 - [`story` Static Methods](#story-static-methods)

## `story` Object
To create a new `story` object, initialize it with `story(code)`. The `code` should be the source code for your story.

### `.state`
This is the current state (block name) that the story is in.

### `.states`
This is a dictionary of all the different states and their blocks.

### `.localVars`
This is a dictionary of all the local variables (variables that get reset with `.newContext()`).

### `.globalVars`
This is a dictionary of all the global variables (variables that are NOT reset with `.newContext()`).

### `.runfrom`
The state that ran the `@run` command for a new context, or `start`. It is stored in `@runfrom`.

### `.reference`
The state that went to the current one with `@goto`. It is stored in `@reference`.

### `.source["text"]`
The original text put into `story()`.

### `.source["globalVars"]`
The original global variables.

### `.source["localVars"]`
The original local variables.

### `.newContext([runfrom, [state]])`
Creates a new context of the story and returns it, keeping global variables, but resetting local variables.

### `.text(text)`
Formats the given `text`. Note that if it starts with a space, the rest is treated as raw text, and does not get formatted.

### `.runState(state)`
Runs the given `state`.

### `.run(code)`
Runs the given code.

### `.varExists(var as str)`
Returns `True` or `False` based of whether `var` exists.

### `.varExists(var as list, tuple, set)`
Return a dictionary containing whether each variable in `var` exists.

### `.getVariable(var as str)`
Returns the value of `var`, or `False`.

### `.getVariable(var as list, tuple, set)`
Return a dictionary containing the value of each variable in `var`, or `False`.

### `.setVariable(var as str)`
Resets the value of `var`.

### `.setVariable(var as str,val)`
Sets the value of `var` to the string value of `val`.

### `.setVariable(var as list, tuple, set)`
Resets the value of all variables in `var`.

### `.setVariable(var as dict)`
Sets the value of each variable in `var` to the value of it.

### `.simpleCondition(condition)`
Returns the value of a simple condition.

### `.test(condition)`
Returns the value of a condition.

## `story` Static Methods
These are some methods you can call on the `story` class itself.

### `story.removeIndent(text)`
This function removes as many spaces as possible from the left side of `text`, in an equal amount of columns.

### `story.number(text)`
This function tries to convert `text` to a `float`. If it fails, returns `False`.

### `story.ask(question,option 0,option 1,...)`
This function asks the user to select an option, and then return the key (0, 1, ...) of the option selected.

### `story.ask(question,list of options)`
This function is like the first `story.ask`, except is takes a list of options instead of spread out options.

### `story.ask(question,answer as `str`)`
This function asks the user to input an answer to `question`, then returns whether their answer matched your `answer`.

### `story.ask(question)`
This function returns `True` or `False` based on whether the user selects `Yes` or `No`.
