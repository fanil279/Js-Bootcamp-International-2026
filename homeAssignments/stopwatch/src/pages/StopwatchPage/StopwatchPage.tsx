import { type FC, useState } from 'react';
import { Plus } from 'lucide-react';
import Button from '../../components/Button';
import StopwatchList from '../../components/StopwatchList';
import type { StopwatchItem } from '../../types';

const StopwatchPage: FC = () => {
    const [stopwatchList, setStopwatchList] = useState<StopwatchItem[]>([]);

    function handleAddStopwatch() {
        setStopwatchList((prev) => [
            ...prev,
            { id: crypto.randomUUID(), status: 'idle' }
        ]);
    }

    return (
        <>
            <header className='header'>
                <Button
                    variant='secondary'
                    onClick={handleAddStopwatch}
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
