---
group: Flow
---

# Stop and Kill
The `stop` and `kill` statements are key to using the block system.

## Overview
The `@stop` statement exits the current context. To use it, just write `@stop`.
The `@kill` statement exits the current story (all contexts). TO use it, just write `@kill`.

## Example
``` storymatic
start
  Welcome to my text adventure!
  @menu Do you want to leave?
    Yes
      @stop
    No
      @pass
  Goodbye!
```

In the example above, the user can exit early by selecting Yes.
