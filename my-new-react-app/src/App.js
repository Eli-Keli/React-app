import React from 'react';
import HelloWorld from './Hello';
import MyComponent from './MyComponent';
import CounterComponent from './Counter';
import Login from './ConditionalComponent';
import ListComponent from './ListComponent';
import FormComponent from './FormComponent';

function App() {
  const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

  return (
    <div className='App'>
      <HelloWorld />
      <MyComponent />
      <CounterComponent message="This is is a counter component with increment and decrement functionality!"/>
      <Login />
      <ListComponent items={items}/>
      <FormComponent />
    </div>
  )
}

export default App;