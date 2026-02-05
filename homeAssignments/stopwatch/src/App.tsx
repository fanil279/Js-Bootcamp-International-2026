import './App.css';
import Button from './components/Button';

function App() {
	return (
		<>
			<div id='controls'>
				<Button variant='addStopwatchBtn' onClick={() => {/* TO BE IMPLEMENTED */}}>
					Add Stopwatch
				</Button>
			</div>

			<section id='stopwatch-container'>

			</section>
		</>
	);
}

export default App;
