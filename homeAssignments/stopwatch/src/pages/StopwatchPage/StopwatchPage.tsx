import { Plus, /* Play, Pause, RotateCcw, Trash2 */ } from 'lucide-react';
import Button from '../../components/Button';

const StopwatchPage = () => (
    <>
        <header className='header'>
            <Button variant='addStopwatchBtn' onClick={() => {}}>
                <Plus size={20} />
                Add Stopwatch
            </Button>
        </header>

        <section className='stopwatch-container'>
            
        </section>
    </>
);

export default StopwatchPage;
