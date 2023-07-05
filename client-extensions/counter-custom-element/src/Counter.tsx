import * as React from 'react';

export function Counter() {
  const [count, setCount] = React.useState(0);
  const onSubstractClick = () => setCount((previousCount) => previousCount - 1);
  const onAddClick = () => setCount((previousCount) => previousCount + 1);

  return (
    <div>
      <button onClick={onSubstractClick} type="button">
        -
      </button>
      <output>{count}</output>
      <button onClick={onAddClick} type="button">
        +
      </button>
    </div>
  );
}
