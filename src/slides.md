# Testing a React application with Jest

Jordyn Marcellus (they/them)

---

# A request before we start learning...
- Be present 
- Play fully
- No bad questions, no bad answers

---

# Introduction! 

- Hi, I'm Jordyn. 
    - This is my first time running a workshop, so we're all learning today 😅

- Who are you? Why do you want to learn testing? 

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

# Why we test

---

# There is no good code. Only well-tested code.

- Ever looked on previous code and went 😱
- Let's re-factor!
- But... we broke it... 😱

---

# Tests are about confidence

- Are you _confident_ that your code works? (I'm not 🤪)

- Tests give you confidence that your code works as you expect it to.

- Confidence makes you feel better about what you're building, how it's built and how you can ensure you don't break it when trying to make it better.

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
- React test library
    - integration testing for react compmonents

---

# Let's go through an example! 

--

# Test levels

- Multiple "levels" of tests, with different purposes for each. 
    - unit
    - component
    - integration
    - functional (also called end-to-end or UI testing)
---

# Unit testing

unit testing: testing the smallest parts of 
- focused on small pieces of discrete functionality
- e.g. does this function return data we expect it to?
- difficulty level: easy

---

# Component testing

component testing: testing a (React) component
- given a set of props, what does the component render?
- when a button is clicked, does a function get called?
- difficulty level: easy
---

# Integration testing 

- testing components working together
    - given some data, what happens with this set of components?
    - when a button is clicked, does it call an asynchronous data-fetch?
    - Ensures changes in one part of the codebase don't affect other parts of the codebase.
- difficulty level: medium

- We will focus on unit, component and integration tests for the purposes of this workshop.

---

# A note on functional testing

- Functional testing is hard, messy and out of scope for a six-hour intro workshop.
- We can get _most_ of the benefits of functional testing with proper integration testing.

---

# The basics of testing in JavaScript

- Tests are usually run as an `npm scripts`
-- e.g. `npm run test`

- We can write these inside our `package.json` file

---

# How to run the tests 

- Starts with npm script.
    - NPM scripts run a command line action using node

- The script we have running will collect 
    - `"test" : "jest"`


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

```
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
```

---

# [Jest cheat sheet](https://devhints.io/jest)

---

# Unit testing exercise 1: Unit testing a convenience function (mob)!

---

# Unit testing exercise 2: Write some unit tests for convenience functions!

- `example-app/src/utils/filterByType.js`

---

# Component tests

- Component tests in React are similar to unit tests.
- Examples:
    - given a set of props, what does a component render?
    - does an onChange function passed in to props get called when triggered?

---

# Styles of component tests
- Render out a component to see if it matches a snapshot
    - Snapshots are serialized JSON representations of our React components

- Interact with the component and see if events fire as expected

---

# Component testing, exercise #1 (mob)

- Let's render out a snapshot of our PokemonCard component
- Let's use react-testing-library to test our 
---

# Component testing, exercise #2 (paired)

- Render the button component 
- Check if you can click the button component when it's disabled using react-test-library
- Check if the button component triggers the onClick function when clicked

---

# Let's get some food...

---

# Welcome back!

---

# Integration tests 

- So, we've tested the individual pieces. But how do they play together...?

- [Oh no](https://twitter.com/ThePracticalDev/status/687672086152753152)

---

# Integration tests, cont'd

-  Integration testing is _essential_ for any kind of testing strategy.

- A little trickier to define -- there's multiple differing kinds of strategies.

- A little bit tricker to write as well.

---

# Examples of integration testing

- Given mock data, how does a container and it's child components render? 

- Does a form, containing multiple components, collect and submit data as we expect?

---

# Integration testing exercise 1 (mob)

- Let's write some tests for our SinglePokemonContainer 

---

# Integration testing exercise 2 

- Try and test the form container! 

# Next steps