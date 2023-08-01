import './App.css';
import { Button } from './components/Button';
import { Counter } from './components/Counter';
import { useState } from 'react';

function App() {

	const [clickNumber, setClickNumber] = useState(0)

	const counter = () => {
		setClickNumber(clickNumber + 1)
	}

	const resetCounter = () => {
		setClickNumber(0)
	}

	return (
		<div className="App">
			<div className='logo-container'>
				<a
					className='gandel-logo'
					href='https://gandel.netlify.app/'
					target='_blank'
					rel='noopener noreferrer'
				>
				</a>
			</div>
			<div className='main-container'>
				<Counter 
					clickNumber={clickNumber}
				/>
				<Button 
					text="Click"
					isClickButton={ true }
					clickFunction={counter}
				/>
				<Button 
					text="Reset"
					isClickButton={ false }
					clickFunction={resetCounter}
				/>
			</div>
		</div>
	);
}

export default App;
