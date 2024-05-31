import React from 'react';
import HelloWorld from './Hello';
import MyComponent from './MyComponent';
import CounterComponent from './Counter';
import Login from './ConditionalComponent';
import ListComponent from './ListComponent';
import FormComponent from './FormComponent';

function App() {
  const items = ["New York,", "Tokyo", "London", "San Fransisco"];


  return (
    <div className='App'>
      <HelloWorld />
      <MyComponent />
      <CounterComponent message="This is is a counter component with increment and decrement functionality!"/>
      <Login />
      <ListComponent items={items} heading="Cities"/>
      <FormComponent />
    </div>
  )
}

export default App;