import './App.css';
import Counter from './feat/counter/Counter';
import Users from './feat/users/Users';

function App() {
	return (
		<>
			<header className='header'>
				<Counter />
			</header>
		
			<main className='app'>
				<Users />
			</main>
		</>
	);
}

export default App;
