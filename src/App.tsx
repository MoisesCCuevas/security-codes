import React from 'react';
import './App.css';
import UseState from './components/UseState';
import ClassState from './components/ClassState';

function App() {
  return (
    <div className="App">
      <UseState name="UseState" />
      <ClassState name="ClassState" />
    </div>
  );
}

export default App;
