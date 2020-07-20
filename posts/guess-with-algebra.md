---
group: Math-Tricks/Guessing
---

# Guess with Algebra
In this article, you learn how to guess someone's number with simple algebra.

## Preparing
 1. Select a one-digit number ranging from 2 to 6, and call it `a`. We'll use `a = 3`.
 2. Select another one-digit number ranging from 3 to 5, and call it `b`. We'll use `b = 4`.
 3. Multiply the two numbers together, and call the product `c`. For us, `c = 3×4 = 12`.

## The Trick
 1. Ask each person in the audience to select a small number from 1 to 100, but not to tell it to you. We'll use `7` as an example.
 2. Ask them to multiply their number by `a`. For us, `a = 3`, so we now have `7×3 = 21`.
 3. Ask them to add `c` to their number. For us, `c = 12`, so we now have `21+12 = 33`.
 4. Ask them to divide their number by `a`. For us, `a = 3`, so we now have `33÷3 = 11`.
 5. Ask each person to subtract their original number. We had `7`, so we now have `11-7 = 4`.
 6. Announce that you already knew their number! Say it was `b`, which it will be.

## The Explanation
During the explanation, we will refer to the number the user picked as `n`.
```
   n
=> n × a                    Multiply by `a`.
=> (n × a) + (a × b)        Add `c`. `c = a×b`.
=> ((n × a) + (a × b)) ÷ a  Divide by `a`.
 = a × (n + b) ÷ a          Distributive law.
 = a ÷ a × (n + b)          Order of operations.
 = n + b                    `a÷a` = 1.
=> n + b - n                Subtract your original number.
 = n - n + b                Order of operations.
 = b                        `n-n` = 0.
```
