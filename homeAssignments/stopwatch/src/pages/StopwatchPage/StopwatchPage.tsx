import { useState } from 'react';
import { Plus } from 'lucide-react';
import Button from '../../components/Button';
import Stopwatch from '../../components/Stopwatch';
import type { Status, StopwatchItem } from '../../types';

const StopwatchPage = () => {
    const [stopwatchList, setStopwatchList] = useState<StopwatchItem[]>([]);

    return (
        <>
            <header className='header'>
                <Button
                    variant='addStopwatchBtn'
                    onClick={() => setStopwatchList((prev) => [
                        ...prev,
                        { id: crypto.randomUUID(), status: 'idle' }
                    ])}
                >
                    <Plus size={20} />
                    Add Stopwatch
                </Button>
            </header>

            <main className='stopwatch-container'>
                {stopwatchList.length === 0 ? (
                    <h1 className='empty-message'>
                        No stopwatches added yet.
                        
                        <br />
                        
                        Click "Add Stopwatch" to get started!
                    </h1>
                ) : (
                    <section className='stopwatch-list'>
                        {stopwatchList.map((stopwatch) => (
                            <Stopwatch
                                key={stopwatch.id}
                                status={stopwatch.status}
                                setStatus={(newStatus: Status) =>
                                    setStopwatchList((prev) =>
                                        prev.map((sw) =>
                                            sw.id === stopwatch.id ? { ...sw, status: newStatus } : sw
                                        )
                                    )
                                }
                                onDelete={() =>
                                    setStopwatchList((prev) =>
                                        prev.filter(sw => 
                                            sw.id !== stopwatch.id
                                        )
                                    )
                                }
                            />
                        ))}
                    </section>
                )}
            </main>
        </>
    )
};

export default StopwatchPage;
