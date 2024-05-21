import React from 'react';
import HelloWorld from './Hello';
import MyComponent from './MyComponent';
import Counter from './Counter';
import Login from './ConditionalComponent';
import ListComponent from './ListComponent';

function App() {
  const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

  return (
    <div className='App'>
      <HelloWorld />
      <MyComponent />
      <Counter message="This is is a counter component with increment and decrement functionality!"/>
      <Login />
      <ListComponent items={items}/>
    </div>
  )
}

export default App;