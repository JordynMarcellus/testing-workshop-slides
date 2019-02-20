# Testing a React application with Jest

Jordyn Marcellus (they/them)

---

# What we're learning

- Why we test
- Test-driven development
- Unit testing 
- Integration testing

---

# Technologies used today

- Why we test
- Test-driven development
- Unit testing 
- Integration testing

---

# The benefits of testing (1/2)

- Re-factor with confidence

- Understand _how_ our code works. 

- Instant feedback when things go wrong

---

# How to run the tests 

- Starts with npm script.
    - NPM scripts run a command line action using node

---

# Exercise 1 (group)

- Create an npm script to run our first tests 🎊

---

# Exercise 2 (individual/paired)

- Run tests in "watch" mode
    - hint: just like previous exercise, but with new "--watch" flag

- Run tests to see how much code we've covered with our tests
    - hint: this time there's a new "--coverage" flag

- Run tests with the above flags combined

---

# Test levels

- Multiple leves of tests:
    - unit: small pieces of discrete functionality
    - component: one component in isolation
    - integration: components working together

- We will focus on unit, component and integration tests for the purposes of this workshop.

---

# Unit tests

- Unit tests are focused on small, discrete pieces of functionality.

- Examples:
    - does this filter function work as intended?
    - what happens when a function receives null as an argument
    - 

---

# Component tests

- Component tests in React are similar to unit tests.
- Examples:
    - given a set of props, what does a component render?
    - 

---

# Writing your first test

- In Jest, we set up a test suite and `describe` what we expect to happen. 

```
describe('our first test suite', () => {
    //this is where our magic happens
})

- This describe will be used to help distinguish our tests as they run automatically.

---

