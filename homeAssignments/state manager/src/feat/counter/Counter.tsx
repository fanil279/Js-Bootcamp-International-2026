import CounterPanel from './components/CounterPanel';

function Counter() {
	return (
		<div className='components-container'>
			<CounterPanel title='Component A' titleClassName='component-a' />
			<CounterPanel title='Component B' titleClassName='component-b' />
		</div>
	);
}

export default Counter;
