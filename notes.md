array size        | trial 1 | insert time | append time | trial 2 | insert time | append time | trial 3 | insert time | append time |
-----------------: :-------: :-----------: :-----------: :-------: :-----------: :-----------: :-------: :-----------: :-----------:
tiny array        |         |  23.122 μs  |  7.647 μs   |         |  2.377 μs   |   7.49 μs   |         |   1.753 μs  |  4.592 μs   |
small array       |         |  12.308 μs  |  9.998 μs   |         |  37.04 μs   |  53.196 μs  |         |  29.298 μs  |  4.083 μs   |
medium array      |         |  282.014 μs |  21.748 μs  |         | 171.384 μs  |  34.352 μs  |         |  81.082 μs  |  25.018 μs  |
large array       |         | 5.697166 ms |  429.842 μs |         | 11.902451 ms| 1.784017 ms |         | 7.888048 ms | 1.228064 ms |
extra large array |         |882.026569 ms| 3.988197 ms |         |1.031610984 s| 3.923129 ms |         | 878.81042 ms| 4.111647 ms |

Both the Insert and the Append functions increase in time with scaling. It appears that the Insert function's time grows more rapidly as the array scales. The Insert function appears to grow exponentially, the multiplicative factor increasing with each scale of the array. Based on these trials, its hard to distinguish how the Append function scales--it jumps around a bit. However, it is safe to say that it does not scale as fast as the Insert function. It appears to grow by about 4n, where n is the factor increase in array values

Looking at the functions themselves, the Insert function grows exponentially with a time-complexity of O(n^2) and the Append function grows linearly with a time-complexity of O(n). With the .unshift method, the computer has to do the work of adjusting each array value's index. That is to say, another n events to do. Since its in a for loop iterating n times, we are multiplying n by n, yielding time-complexity of O(n^2). The Append method, using the .push does not require adjusting the values of any array's index except for the new value pushed onto the end of the array. So we just have time complexity of O(n) as we perform a loop n times.

Taking as much as a second to run a very large array may be too much time in a full-scale application for a user's experience. It is advisable for the software development team to write a new function