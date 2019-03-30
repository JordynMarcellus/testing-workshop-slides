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
    - This is my first time running a workshop, so we're all learning today! 

- Who are you? 

- Why do you want to learn testing?

- What do you want to get out of today? 

---

# My teaching philosophy

- The best way to learn is by doing

- Start small, iterate quickly

- I want you to struggle a **little bit**
    - [why?](https://twitter.com/jessiewillms/status/1075179385072873472)

---

# What we're learning

- Why we test

- Unit testing

- Integration testing

- Test-driven development (stretch goal)

---

# Let's get set up!

- We'll need node.js
    - **ideally** latest long-term-support (LTS), currently: 10.15.1
    - if you don't, don't worry 😊

- clone repo [here](https://github.com/JordynMarcellus/testing-workshop-example-app)

- Raise your hand real high if you need help
    - Help your fellow workshoppers if you can! 

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

- Tests give you confidence your code works as you expect it to.

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

- Makes you a more compelling candidate in the job market 🤑

---

# Technologies used today

- React (obvz)
- Jest
    - test runner
- React test renderer
    - renders react components 
- React test library
    - integration testing for react components, 

---

# Test levels

- Multiple "levels" of tests, with different purposes for each. 
    - unit
    - component
    - integration
    - UI testing (also called end-to-end)
---

# Unit testing

unit testing: testing functions, classes, etc.
- focused on small pieces of discrete functionality
- e.g. does this function return data we expect it to?
- difficulty level: easy

---

# Component testing

component testing: testing a (React) component
- given a set of props, what does the component render?
- when a button is clicked, does a function passed in to props get called?
- difficulty level: easy

---

# The basics of testing in JavaScript

- Tests are usually run as an `npm scripts`
-- e.g. `npm run test`

- We write these npm scripts inside our `package.json` file

---

# How to run the tests 

- Starts with npm script.
    - NPM scripts run a command line action using node

- The script we have running will:
    - run our tests in "watch" mode (when we save, it re-runs tests)

---

# Writing your first test

- In Jest, we set up a test suite and `describe` our test suites

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
    - an anonymous function where we write our test code
---

# Anatomy of a Jest test, part two

- Inside of the `it` function block is where we write our test code
- We write `assertions` -- that is, what we _expect_ to happen when we run our code.
- Jest has a built-in `expect` function that we can us in conjunction with a `matcher` to determine if our code works as we expect it to. 

---

# Example 

```
import {filterOutNullValues} from './filterOutNullValues'

describe('filterOutNullValues()', () => {
    it('successfully filters out null values in our array', () => {
        const mockData = [null, 1, "cool beans"]
        const expectedFilteredData = [1, "cool beans"]
        expect(filterOutNullValues(mockData)).toBe(expectedFilteredData)
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
        expect( // we assert
            filterOutNullValues(mockData) // that we expect running this function 
        ).toBe(expectedFilteredData) // to match the data we expect
    })
})
```
---

## react-testing-library

- The philosophy behind [React Testing Library](https://testing-library.com/docs/react-testing-library/intro) is: 
    > The more your tests resemble the way your software is used, the more confidence they can give you.

- React Testing Library allows us to use accessibility features to select HTML elements, render out DOM nodes via React and interact with them as a user would. 

- We're also using [jest-dom](https://github.com/gnapse/jest-dom) to add extra `matchers` to test our components.

---

# Let's get our hands on a keyboard Marcellus >.>

---

- [Jest cheat sheet](https://devhints.io/jest)
- React Testing Library:
    - [API docs](https://testing-library.com/docs/react-testing-library/api) 
    - [query docs](https://testing-library.com/docs/api-queries)
    - [events docs](https://testing-library.com/docs/api-events)

- [jest-dom API docs](https://github.com/gnapse/jest-dom)

---

# Exercise #1

- Let's test our PokemonCard component! 
- expect: given a set of props, we see text that gives a pokemon's name and SINGLE type
- expect: given a set of props, we see the text that gives a pokemon's name and MULTIPLE types
- render out the component into a snapshot
---

# Exercise #2

- Let's test our Button component!
- expect: does the onClick function NOT get called when we click it when disabled state? 
- expect: does the onClick function passed in as props get called when we click it?
- Render that button into a snapshot when complete.

---

# Exercise #3 

- Time to test our Input component!
- FYI -- to trigger a _change_ event you'll need to use: `fireEvent.change(selector, {target: {value: "enter value here"}})
- Expect: the onChange event to be called once.
- Expect: the onChange function to consume the value from the event target.
- Render the input component into a snapshot.

---

# Let's get some food...

---

# Welcome back!

---

# Integration testing

- testing components working together
    - given some data, what happens with this set of components?
    - when a button is clicked, does it call an asynchronous data-fetch?
    - Ensures changes in one part of the codebase don't affect other parts of the codebase.
- difficulty level: medium

---

# Integration tests

- So, we've tested the individual pieces. But how do they play together...?

![Oh no](https://cdn-images-1.medium.com/max/720/1*UtZzMT32fRMnSN-HmgiSVQ.gif)

---

# Integration tests, cont'd

-  Integration testing is _essential_ for any kind of testing strategy.

- It's trickier to define, as it's more focused on _integrating_ pieces together.

- A little bit tricker to write as well.

---

# Examples of integration testing

- Given mock data, how does a container and it's child components render? 

- Does a form, containing multiple components, collect and submit data as we expect?

- Does Axios get called when we submit a form? 

---

# Mocking with Jest

- Sometimes, we have external libraries which we need to mock out as they lead to unreliable ("flaky") tests
    - e.g. making asynchronous calls with axios
- We use Jest to "mock" those libraries/functions as necessary. 
- Mocking allows us the 

---

# Mocking with Jest

- Simplest way to mock with Jest (and what we'll be focusing on today): auto-mocking

1. import a module
2. use `jest.mock()` and pass the _path_ of that module as an argument
3. You can use `mockReturnValue` or, if a promise `mockResolvedValue` (success condition) or `mockRejectedValue` (error condition!) 

---

# Integration testing exercise 1

- Let's write some tests for our SinglePokemonContainer! 
- Expect: That if useEffect hasn't returned data, we render the loading state
- Expect: That if useEffect HAS returned data, we render out a pokemon card

---

# Integration testing exercise 2

- Try and test the form container!
- Expect: That we call handleSubmit when there is data and isDiabled=false
- Expect: That we do NOT call handleSubmit when there is data and isDiabled=true
- Expect: That when we change the input, the onChange handler is called and matches the data we put into the `fireEvent.change` function.

---

# Integration testing exercise 3 
- Challenge mode: let's test the app container.
- Expect: 

---

# Test-driven development

---

# Test-driven development

- What's your process for building app functionality?

---

# The frustrating - and virtuous --  TDD cycle

- We start with a failing test.

- We write _just_ enough code to make it pass.

- Once the test comes out green, we re-factor.

- Repeat.

---

# wat

---

# Why We do this

- We can spin out of control when developing feature work.

- TDD provides _focus_

- TDD cycle **requires** re-factoring. 

---

# Why we do this, cont'd

- "Just enough code" may not be very reliable or extensible 😉

- But we know our functionality works, because we have tests!

- So, we made it work... and now we make it work better 😈

---

# Exercise

- Let's fix a bug...
- e.g. when we submit a pokemon, but then delete a few characters.. our app gets nuked 💣

---
# Exercise 

- Add an error state for when submitting a pokemon that doesn't exist! 
- Create a slash for multi-type pokemon
    - e.g. "rock/ground" not "rockground"

--- 

# Next steps

- You've probably got a side-project that could stand to be tested!
- Make a small app using TDD
- Explore other kinds of testing! 
    - Bill Sourour's DevMastery series on TDD with Jest and Puppeteer
        - [TDD with puppeteer](https://www.youtube.com/watch?v=Hw522TDxMZk)
        - [TDD re-factoring](https://www.youtube.com/watch?v=IOCcqIKJyFk)
    - Test [end-to-end with Cypress](https://www.cypress.io/)