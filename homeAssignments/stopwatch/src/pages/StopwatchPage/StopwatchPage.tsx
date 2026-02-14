import { type FC } from 'react';
import StopwatchList from './components/StopwatchList';

const StopwatchPage: FC = () => (
    <main className='stopwatch-container'>
        <StopwatchList />
    </main>
);

export default StopwatchPage;
