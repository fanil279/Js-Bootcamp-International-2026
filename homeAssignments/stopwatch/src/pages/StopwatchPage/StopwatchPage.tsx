import { type FC, useState, useEffect } from 'react';
import { Plus } from 'lucide-react';
import Button from '../../components/Button';
import StopwatchList from './components/StopwatchList';
import { handleAddStopwatch } from '../../utils/stopwatch.utils';
import type { StopwatchItem } from '../../types';

const StopwatchPage: FC = () => {
    const [stopwatchList, setStopwatchList] = useState<StopwatchItem[]>(() => {
        const stored = localStorage.getItem('stopwatches');

        if (!stored) return [];

        try {
            return JSON.parse(stored);
        } catch (err: unknown) {
            console.error('Invalid JSON in LocalStorage', err);
            localStorage.removeItem('stopwatches');
            return [];
        }
    });

    useEffect(() => {
        localStorage.setItem(
            'stopwatches',
            JSON.stringify(stopwatchList)
        );
    }, [stopwatchList]);

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
