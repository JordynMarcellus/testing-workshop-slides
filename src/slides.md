# Testing a React application with Jest

Jordyn Marcellus (they/them)

---

# What we're learning

- Why we test
- Test-driven development
- Unit testing 
- Integration testing

---

# Let's get set up!

- We'll need node.js 
    - ideally latest long-term-support (LTS), currently: 10.15.1

- clone repo [tktktk](https://www.google.com)

- Raise your hand real high if you need help
    - Help your fellow workshoppers if you can ☺️

---

# First, some theory.

---

# There is no good code. Only well-tested code.

- Ever looked on previous code and went 😱
- Let's re-factor!
- But... we broke it... 😱

---

# The benefits of testing, part one

- Re-factor with confidence

- Have identifiable cases where we know _how_ our code works. 

- Instant feedback when things go wrong -- less reliant on manual testing!

---

# The benefits of testing, part two

- Essential for continuous integration/deployment 
    - Don't want to yolo a bad change into prod... 

- Levels up your developer skillzzz

- Makes you a more compelling candiddate in the job market 🤑

---

# Technologies used today

- React (obvz)
- Jest
    - test runner
- React test renderer
    - renders react components 
- Puppeteer
    - runs headless Chrome using node

---

# Test levels

- Multiple "levels" of tests, with different purposes for each. 
    - unit: small pieces of discrete functionality
        - does this function work as we expect it to?
    - component: one component in isolation
        - given a set of props, what does the component render?

---

# Test levels
    - integration: components working together
        - given some data, what happens with this set of components?
    - functional (also called end-to-end): a full user flow testing a working feature.
        - does this feature work from the UI layer down to the API layer? 

- We will focus on unit, component and integration tests for the purposes of this workshop.

---

# Let's get our hands on a keyboard Marcellus >.>

---

# The basics of testing in JavaScript

- Tests are usually run as an `npm scripts`
-- e.g. `npm run test`

- We can write these inside our `package.json` file

---

# How to run the tests 

- Starts with npm script.
    - NPM scripts run a command line action using node

---

# Exercise 1 (group)

- Create an npm script to run our first tests 🎊

- `"test" : "jest"`

---

# Exercise 2 (individual/paired)

- Run tests in "watch" mode
    - hint: just like previous exercise, but with new "--watch" flag

- Run tests to see how much code we've covered with our tests
    - hint: this time there's a new "--coverage" flag

- Run tests with the above flags combined

# Unit tests

- Unit tests are focused on small, discrete pieces of functionality.

- Examples:
    - does this filter function work as intended?
    - what happens when a function receives null as an argument?

---

# Writing your first test

- In Jest, we set up a test suite and `describe` what we expect to happen. 

```
describe('our first test suite', () => {
    //this is where our magic happens
})
```

- This describe will be used to help distinguish what tests are succeeding/failing as they run automatically.

---

# Anatomy of a Jest test, part one

- an `it()` function block that accepts two parameters
    - a string to describe what's being tested
        - e.g. `it('filters out null values')`
    - a callback where we write our test code
---

# Anatomy of a Jest test, part two

- Inside of the `it` function block is where we write our test code
- We write `assertions` -- that is, what we _expect_ to happen when we run our code
- Jest has a built-in `expect` function that we can us in conjunction with a `matcher` to determine if our code works as we expect it to. 

---

# Example 

```
import {filterOutNullValues} from './filterOutNullValues'

describe('filterOutNullValues()', () => {
    it('successfully filters out null values in our array', () => {
        const mockData = [null, 1, "cool beans"]
        const filteredData = [1, "cool beans"]
        expect(filterOutNullValues(mockData)).toBe(filteredData)
    })
})
```

--- 

# Wait wtf is going on there

import {filterOutNullValues} from './filterOutNullValues' // import function we want to test

describe('filterOutNullValues()', () => { // top-level describe block
    it('successfully filters out null values in our array', () => { // test block
        const mockData = [null, 1, "cool beans"] 
        const expectedFilteredData = [1, "cool beans"]
        expect( // our assertion
            filterOutNullValues(mockData) // that we expect running this function 
        ).toBe(expectedFilteredData) // to match the data we expect
    })
})

--- 

# [Jest cheat sheet](https://devhints.io/jest)

---

# Unit testing exercise 1: Let's mob program on some unit tests for a convenience function!

---

# Unit testing exercise 2: Write some unit tests for a convenience function!

--- 

# Component tests

- Component tests in React are similar to unit tests.
- Examples:
    - given a set of props, what does a component render?
    - what happens when we trigger an onChange event? 

---

# Styles of component tests
- Render out a component to see if it matches a snapshot
    - Snapshots are serialized JSON representations of our React components
- Use component instance methods (onChange, onInput) to see if changes are being propagated


---

# Integration tests 

- 