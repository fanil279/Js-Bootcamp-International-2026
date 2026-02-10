import { type FC, useState } from 'react';
import { Plus } from 'lucide-react';
import Button from '../../components/Button';
import StopwatchList from './components/StopwatchList';
import { handleAddStopwatch } from '../../utils/stopwatch.utils';
import type { StopwatchItem } from '../../types';

const StopwatchPage: FC = () => {
    const [stopwatchList, setStopwatchList] = useState<StopwatchItem[]>([]);

    return (
        <>
            <header className='header'>
                <Button
                    variant='secondary'
                    onClick={() => handleAddStopwatch(setStopwatchList)}
                >
                    <Plus size={20} />
                    Add Stopwatch
                </Button>
            </header>

            <main className='stopwatch-container'>
                <StopwatchList
                    stopwatchList={stopwatchList}
                    setStopwatchList={setStopwatchList}
                />
            </main>
        </>
    );
};

export default StopwatchPage;
