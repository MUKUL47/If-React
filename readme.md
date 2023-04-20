## when-react

`when-react` is a lightweight React library for conditional rendering that simplifies the use of `if-else` statements in React applications.

### Installation

```bash
npm install when-react
```

### Usage

The `If` component can be used to conditionally render its child components based on the `if` prop. The `Else` component can be used as a child of an `If` component to render its child components if the `If` component's condition is not met.

```jsx
import { If, Else } from "when-react";

function Example({ isLoggedIn }) {
  return (
    <div>
      <If if={isLoggedIn}>
        <p>You are logged in!</p>
        <Else>
          <p>Please log in to continue.</p>
        </Else>
      </If>
    </div>
  );
}
```

### Props

#### If Props

- `if`: A boolean value indicating whether to render the child components.
- `children`: The child components to render if the `if` condition is met.

#### Else Props

- `children`: The child components to render if the `If` condition is not met. This component should only be used as a child of an `If` component.

### Examples

#### Deep nested blocks

```jsx
import { If, Else } from "when-react";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <If if={count === 0}>
        <p>Level 1 - If</p>
        <Else if={count === 1}>
          <p>Level 2 - Else If 1</p>
        </Else>
        <Else if={count === 2}>
          <p>Level 2 - Else If 2</p>
        </Else>
        <Else>
          <If if={count % 2 === 0}>
            <p>Level 2 - If</p>
            <If if={count === 4}>
              <p>Level 3 - If</p>
            </If>
            <Else>
              <p>Level 3 - Else</p>
            </Else>
          </If>
        </Else>
      </If>
    </div>
  );
}
```

### License

This project is licensed under the MIT License - see the LICENSE file for details.
