# React State and useState

## What is State?

- **Definition:** State in React represents the data that a component can maintain and manipulate. It defines the current condition of a component, influencing its rendering.

## How Does State Get Changed?

- **State Updates:** State changes in React components are typically triggered by events (e.g., user interactions) or asynchronous operations. Developers use state-setting functions to update state variables, leading to re-renders.

## What is `useState`?

- **Definition:** `useState` is a React hook that allows functional components to have state. It returns an array with the current state value and a function to update it.

## What is a Pure Function?

- **Definition:** A pure function is a function that, given the same input, always returns the same output and has no side effects. It does not modify external variables or data.

## What is an Impure Function?

- **Definition:** An impure function is a function that may have side effects or behaves differently for the same input. It can modify external variables or have unpredictable behavior.

## How to Identify an Impure Function?

- **Observation:** Look for changes to external variables, reliance on global state, or interactions with external resources. If a function produces different results for the same input, it may be impure.

## What is State Batching?

- **Definition:** State batching in React refers to the process of grouping multiple state updates into a single re-render. React batches state updates to improve performance by reducing unnecessary re-renders.

## How Can We Avoid State Batching?

- **Functional Updates:** Use the functional form of state-setting functions (e.g., `setState(prevState => newState)`) to ensure updates are based on the latest state and avoid batching issues.

## How to Update Object and Array in State?

- **Object Update: Object.jsx file in code**
 
