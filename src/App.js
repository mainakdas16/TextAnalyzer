import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react';
import Alert from './components/Alert';
// import {
// 	BrowserRouter as Router,
// 	Switch,
// 	Route,
// 	// Link,
// 	// useRouteMatch,
// 	// useParams
// } from "react-router-dom";
// import About from './components/About';

function App() {

	const [mode, setmode] = useState("light");
	const [alert, setAlert] = useState(null);

	const showAlert = (message, type) => {
		setAlert(
			{
				message: message,
				type: type
			}
		)

		setTimeout(() => {
			setAlert(null);
		}, 1500);
	}

	const toggleMode = () => {
		if(mode === "light") {
			setmode("dark");
			document.body.style.backgroundColor = "#021024";
			showAlert("Dark mode has been enabled", "Success");
		}

		else {
			setmode("light");
			document.body.style.backgroundColor = "white";
			showAlert("Light mode has been enabled", "Success");
		}
	}

   	return (
	<>
	
		<Navbar title = "TextAnalyzer" mode = {mode} toggleMode = {toggleMode} />
		<Alert alert = {alert} />
		<div className="container">	
			<Textform heading = "Type your text here" mode = {mode} showAlert = {showAlert}/>
		</div>
	</>
  );
}

export default App;
