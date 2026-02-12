import type { FC } from 'react';
import Stopwatch from '../components/Stopwatch';
import type { StopwatchItem, StopwatchListProps } from '../../../types';

const StopwatchList: FC<StopwatchListProps> = (
    { stopwatchList, setStopwatchList }
) => (
    <>
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

export default StopwatchList;
