import React from 'react';
import HelloWorld from './Hello';
import MyComponent from './MyComponent';
import Counter from './Counter';
import Login from './ConditionalComponent';

function App() {
  return (
    <div className='App'>
      <HelloWorld />
      <MyComponent />
      <Counter message="This is is a counter component with increment and decrement functionality!"/>
      <Login />
    </div>
  )
}

export default App;