#Just demo for what "starter code" section can do.
#Not really used in this homework.
from math import *

# Q1: multiply_loop
# Full score: 1
# Type `python3 test multiply_loop` in terminal
#    to run tests on this question.
def multiply_loop(a, b):
    '''Return `a` multiplied with `b`.
    Please use a loop with the "+"
    operator. Do not use "recursion".

    >>> multiply_loop(1, 0)
    0
    >>> multiply_loop(1, 2)
    2
    >>> multiply_loop(2, 2)
    4
    >>> multiply_loop(2, 3)
    6
    '''
    sum = 0
    for i in range(b):
        sum += a
    return sum


# Q2: test2
# Full score: 1
# Type `python3 test test2` in terminal
#    to run tests on this question.
def multiply_recursion(a, b):
    '''Return `a` multiplied with `b`.
    Please use recursion with the
    "+" operator. Do not use "*" or
     any form of loops.

    >>> multiply_recursion(1, 1)
    1
    >>> multiply_recursion(1, 2)
    2
    >>> multiply_recursion(2, 2)
    4
    >>> multiply_recursion(2, 3 )
    6
    '''
    '*** YOUR CODE HERE ***'
