import React, { Component } from 'react';

import Calendar from "./components/Calendar";
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header>
	 <div id= "logo">
		<span ClassName="icon"></span>
		<span>
		Shift<b>Ease</b>
		</span>
	</div>
       </header>
       <main>
	<Calendar />
       </main>
      </div>
     );
    }
   }
export default App;
