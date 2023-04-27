import React from 'react';
import './App.css';
import Form from './Components/Form';
import LifecycleA from './Components/LifecycleA';
import ParentComp from './Components/ParentComp';
import Refsdemo from './Components/Refsdemo';
import FocusInput from './Components/FocusInput';
import FRParent from './Components/FRParent';
import PortalDemo from './Components/PortalDemo';
import ErrorBoundary from './Components/ErrorBoundary';
import ClickCounter from './Components/ClickCounter';
import HoverCounter from './Components/HoverCounter';

function App() {
  return (
    <div className="App">
		<ClickCounter name = 'vinay'/>
		<HoverCounter />
	 {/* <ErrorBoundary /> */}
		{/* <PortalDemo /> */}
		{/* <FRParent /> */}
		{/* <FocusInput /> */}
		{/* <Refsdemo /> */}
		{/* <ParentComp /> */}
			{/*  <Form /> */}
      {/* <LifecycleA /> */}
			</div>
		)
	}

export default App
