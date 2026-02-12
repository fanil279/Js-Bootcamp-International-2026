import type { FC } from 'react';
import Stopwatch from '../components/Stopwatch';
import { handleToggleState, handleDelete } from '../../../utils/stopwatch.utils';
import type { Status, StopwatchItem, StopwatchListProps } from '../../../types';

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
            <section className='stopwatch-list'>
                {stopwatchList.map((stopwatch: StopwatchItem) => (
                    <Stopwatch
                        key={stopwatch.id}
                        status={stopwatch.status}
                        elapsedMs={stopwatch.elapsedMs}
                        startedAt={stopwatch.startedAt}
                        setState={(newStatus: Status) =>
                            handleToggleState(stopwatch.id, newStatus, setStopwatchList)
                        }
                        onDelete={() => handleDelete(stopwatch.id, setStopwatchList)}
                    />
                ))}
            </section>
        )}
    </>
);

export default StopwatchList;
