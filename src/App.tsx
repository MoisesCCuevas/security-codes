import React from 'react';
import './App.css';
import UseState from './components/UseState';
import ClassState from './components/ClassState';
import UseReducer from './components/UseReducer';
import { objFunction } from './test';

function App() {
  console.log(objFunction());
  return (
    <div className="App">
      <UseState name="UseState" />
      <br />
      <UseReducer name="UseReducer" />
      <br />
      <ClassState name="ClassState" />
    </div>
  );
}

export default App;
