# Divisibility Rules
It's rather obvious to tell when a number is divisible by 2 or 5, but are there other tricks?

 - [2 - 10](#2-10)
 - [11, 13, 17, 19, 21, etc.](#11-13-17-19-21-etc)
 - [2, 4, 8, 16, etc.](#2-4-8-16-etc)
 - [5, 25, 125, 625, etc.](#5-25-125-625-etc)

## 2 - 10
Here are the divisibility rules for 2 to 10.

### 2
To check if a number is divisible by 2, check if it ends in `0`, `2`, `4`, `6`, or `8`. If it does, it's divisible by 2.
> `23896` is divisible by 2 because it ends in `6`.

### 3
To check if a number is divisible by 3, add up all the digits. If the new number is divisible by 3, your original number also was!
> `586` is not divisible by 3 because `19` (`5 + 8 + 6`) is not divisible by 3.

You can use this method recursively.
> `7248` --> `7 + 2 + 4 + 8 = 21`
> `21` --> `2 + 1 = 3`, which is divisible by 3, meaning that `7248` is also divisible by 3!

### 4
To check if a number is divisible by 4, check if the last two digits are divisible by 4. If they are, your original number is also divisible by 4.
> `568` is divisible by 4 because `68` is divisible by 4.

### 5
To check if a number is divisible by 5, check if it ends in `0` or `5`. If it does, it's divisible by 5.
> `582` is not divisible by 5 because it ends in `2`.

### 6
A number is divisible by 6 if it is divisible by [2](#2) and [3](#3).
> `67` is not divisible by 6 because it is not divisible by 2.

### 7
7 is to most complex number to check for divisibility by. While we go through the steps, we'll use `7389` as an example.

 1. Check if the number ends in a `0`. If it does, remove the `0` at the end. Our example number is still `7389`.
     - If it ends in several `0`s, you can remove all of them.
 2. Get the last digit of the number (`9`, in this case). Find a multiple of 7 ending in `9`. We found 49.
 3. Subtract this number from the original number. We now have `7340`.
 4. If this new number is a multiple of 7, your original number also was!
     - You can repeat this process with the new number.

Here's our full example:
 1. `7389` doesn't end in a zero.
 2. `7389 - 49` = `7340`
     1. `7340` ends in a zero: `734`.
     2. `734 - 14` = `720`
         1. `720` ends in a zero: `72`.
         2. `72 - 42` = `30`
         3. `30` isn't a multiple of 7, so `720` isn't a multiple of 7.
     3. `720` isn't a multiple of 7, so `7340` isn't a multiple of 7.
 3. `7340` isn't a multiple of 7, so `7389` isn't a multiple of 7.

Done!
