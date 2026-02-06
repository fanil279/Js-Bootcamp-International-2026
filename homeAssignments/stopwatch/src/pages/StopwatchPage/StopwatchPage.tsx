import { Plus } from 'lucide-react';
import Button from '../../components/Button';
import Stopwatch from '../../components/Stopwatch';

const StopwatchPage = () => (
    <>
        <header className='header'>
            <Button variant='addStopwatchBtn' onClick={() => {}}>
                <Plus size={20} />
                Add Stopwatch
            </Button>
        </header>

        <main className='stopwatch-container'>
            <Stopwatch />

            <section className='stopwatch-list'>
                
            </section>
        </main>
    </>
);

export default StopwatchPage;
