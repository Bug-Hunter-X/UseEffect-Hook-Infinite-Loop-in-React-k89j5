# React useEffect Infinite Loop Bug

This repository demonstrates a common error in React's `useEffect` hook: an infinite loop caused by an incorrect dependency array. The `useEffect` hook is triggered unnecessarily on every render, leading to performance issues and potential crashes. The solution shows how to fix it by using the correct dependency array.