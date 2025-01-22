```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct condition - will only run when count changes
    if (count > 0) {
      console.log('Count is greater than 0');
    }
  }, [count > 0]); // Correct dependency array

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```