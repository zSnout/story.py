# The `0 = 1` Paradox
The `0 = 1` paradox states that the two numbers `0` and `1` are equivalent. Once we've proved this, we'll show how you can also change this to any two numbers you like!

## `S`
We'll start with a series `S`, which we'll prove equals 0 and 1 with algebra. Then, we can use basic mathematical laws to show that `0 = 1`. Here's `S`:
```
S = 1 - 1 + 1 - 1 + 1 - 1 + ...
```

### `S = 0`
We can prove that `S` equals 0 like this:

```
S = 1 - 1 + 1 - 1 + 1 - 1 + ...        This is the original series.
S = (1 - 1) + (1 - 1) + (1 - 1) + ...  Now we group each 1 - 1.
S = 0 + 0 + 0 + ...                    Each group is 0.
S = 0                                  No matter how many times you add 0 to itself, it's still 0.
```

### `S = 1`
We can prove that `S` equals 1 like this:

```
S = 1 - 1 + 1 - 1 + 1 - ...        This is the original series.
S = 1 + (-1) + 1 + (-1) + 1 + ...  We change each - 1 to a + (-1), which is the same thing.
S = 1 + (-1 + 1) + (-1 + 1) + ...  Group each -1 + 1.
S = 1 + 0 + 0 + ...                -1 + 1 = 0
S = 1                              No matter how many times you add zero to itself, it's still 0.
```

## `0 = 1`
We just proved that `S = 0` and `S = 1`. To show that `0 = 1`, we do this:

```
S = S  Duh.
0 = S  We proved this already.
S = 1  We proved this already.
0 = 1  Law of substitution.
```

Done!
