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
import ClickCounterTwo from './Components/ClickCounterTwo';
import HoverCounterTwo from './Components/HoverCounterTwo';
import Counter from './Components/Counter';

function App() {
  return (
    <div className="App">
		
		<Counter
					render={(count, incrementCount) =>
					<ClickCounterTwo
						count={count}
						incrementCount={incrementCount}>
					</ClickCounterTwo>}>
				</Counter>
				<Counter
					render={(count, incrementCount) =>
					<HoverCounterTwo
						count={count}
						incrementCount={incrementCount}>
					</HoverCounterTwo>}>
				</Counter>
		

		{/* <ClickCounter name = 'vinay'/>
		<HoverCounter /> */}
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
