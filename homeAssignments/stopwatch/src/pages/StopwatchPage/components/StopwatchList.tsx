import { type FC, useState, useCallback } from 'react';
import { Plus } from 'lucide-react';
import Button from '../../../components/Button';
import Stopwatch from '../components/Stopwatch';
import { handleAddStopwatch } from '../../../utils/stopwatch.utils';
import type { StopwatchItem } from '../../../types';

const StopwatchList: FC = () => {
    const [stopwatchList, setStopwatchList] = useState<StopwatchItem[]>([]);

    const handleAddSW = useCallback((): void => {
        handleAddStopwatch(setStopwatchList);
    }, [setStopwatchList]);

    return (
        <>
            <header className='header'>
                <Button
                    variant='secondary'
                    onClick={handleAddSW}
                >
                    <Plus size={20} />
                    Add Stopwatch
                </Button>
            </header>

            {stopwatchList.length === 0 ? (
                <h1 className='empty-message'>
                    No stopwatches added yet.
                    
                    <br />
                    
                    Click "Add Stopwatch" to get started!
                </h1>
            ) : (
                <section>
                    {stopwatchList.map((stopwatch: StopwatchItem) => (
                        <Stopwatch
                            key={stopwatch.id}
                            id={stopwatch.id}
                            setStopwatchList={setStopwatchList}
                        />
                    ))}
                </section>
            )}
        </>
    );
};

export default StopwatchList;
