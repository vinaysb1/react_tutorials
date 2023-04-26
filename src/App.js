import React from 'react';
import './App.css';
import Form from './Components/Form';
import LifecycleA from './Components/LifecycleA';
import ParentComp from './Components/ParentComp';
import Refsdemo from './Components/Refsdemo';
import FocusInput from './Components/FocusInput';
import FRParent from './Components/FRParent';

function App() {
  return (
    <div className="App">
		<FRParent />
		{/* <FocusInput /> */}
		{/* <Refsdemo /> */}
		{/* <ParentComp /> */}
			{/*  <Form /> */}
      {/* <LifecycleA /> */}
			</div>
		)
	}

export default App
