---
group: Paradoxes/Numbers | Paradoxes/Integers | Integers/Paradoxes
keyword: sum series
---

# 1 + 2 + 3 + 4 + 5 + ... = -1/12
In this article we prove that the sum of all the whole numbers is `-1/12`.

For those of you who prefer videos, watch [this video by Numberphile](https://www.youtube.com/watch?v=w-I6XTVZXww).

## The Series
We will define three series that we need to find out.

```
S = 1 + 2 + 3 + 4 + 5 + ...
G = 1 - 1 + 1 - 1 + 1 - ...
H = 1 - 2 + 3 - 4 + 5 - ...
```

## Solving For `G`
Here's how we solve for G:

```
 G = 1 - 1 + 1 - 1 + 1 - ...
 G = 1 - (1 - 1 + 1 - 1 + ...)
 G = 1 - G
2G = 1
 G = 1/2
```

Now we have proved that `G = 1/2`.

## Solving For `H`
Here's how we solve for H:

```
 H = 1 - 2 + 3 - 4 + 5 - ...
2H = 1 - 2 + 3 - 4 + 5 - ...
   + 0 + 1 - 2 + 3 - 4 + ...
   = 1 - 1 + 1 - 1 + 1 - ...
   = G = 1/2
2H = 1/2
 H = 1/4
```

Now we have proved that `H = 1/4`.

## Solving For `S`
Here's how we solve for S:

```
      S = 1 + 2 + 3 + 4 + 5 + 6 + ...
  S - H = 1 + 2 + 3 + 4 + 5 + 6 + ...
        - 1 - 2 + 3 - 4 + 5 - 6 + ...
        =     4     + 8     + 12  ...
        = 4 + 8 + 12 + 16 + ...
        = 4S
  S - H = 4S
S - 1/4 = 4S
   -1/4 = 3S
  -1/12 = S
      S = -1/12
```

Now we have proved that `S = -1/12`, and we're done!
