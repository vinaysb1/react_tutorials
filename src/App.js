import React from 'react';
import './App.css';
import Form from './Components/Form';
import LifecycleA from './Components/LifecycleA';
import ParentComp from './Components/ParentComp';

function App() {
  return (
    <div className="App">
		<ParentComp />
			{/*  <Form /> */}
      {/* <LifecycleA /> */}
			</div>
		)
	}

export default App
