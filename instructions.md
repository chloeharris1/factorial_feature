# JavaScript Testing: Factorial Feature

In this project, you will use test-driven development to build a factorial method. You will use the assert module and mocha testing library to drive your development using tests that follow the phases: setup, exercise, and verification.

## How To Calculate Factorial

You take an integer and you multiply that by all the integers that are less than it.

The factorial of an integer n is denoted by an exclamation mark n!, so 5! is equal to:

~~~
5 x 4 x 3 x 2 x 1 = 120
~~~

## Edge Case 

An edge case is a problem or situation that occurs only at an extreme (maximum or minimum) operating parameter — you can think of these as special cases that you need to account for. Based on the logic of factorials, you would expect that calculating 0! would look like this:

~~~
0 x 0 = 0
~~~

But mathematically this is not true. In this instance of a factorial method, there is an edge-case which is that 0 factorial (or 0!) is 1.

Follow the red-green-refactor cycle and use test-driven development to create a factorial method. The factorial method will be inside an object named Calculate. You will be implementing your test code in the file index_test.js, and your implementation code in index.js.

After you complete each step, run the test suite in the terminal to test the results. 