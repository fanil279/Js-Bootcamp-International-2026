import { type FC, useEffect, useState } from 'react';
import { Trash2 } from 'lucide-react';
import Button from '../../../components/Button';
import StopwatchControls from '../components/StopwatchControls';
import { handleRemoveStopwatch, stopwatchCalc } from '../../../utils/stopwatch.utils';
import type { Status, StopwatchProps } from '../../../types';

const Stopwatch: FC<StopwatchProps> = ({ id, setStopwatchList }) => {
    const [status, setStatus] = useState<Status>('idle');
    const [elapsedMs, setElapsedMs] = useState(0);
    const [startedAt, setStartedAt] = useState<number | null>(null);

    const [displayElapsed, setDisplayElapsed] = useState(() => elapsedMs);

    useEffect(() => {
        if (status !== 'running' || !startedAt) return;

        const interval = setInterval(() => {
            setDisplayElapsed(
                elapsedMs + (Date.now() - startedAt)
            );
        }, 50);

        return () => clearInterval(interval);
    }, [status, startedAt, elapsedMs]);

    const handleStopwatchStart = (): void => {
        setStatus('running');
        setStartedAt(Date.now());
    };

    const handleStopwatchPause = (): void => {
        setStatus('paused');

        if (startedAt) {
            setElapsedMs(
                (prev) => prev + (Date.now() - startedAt)
            );
        }

        setStartedAt(null);
    };

    const handleStopwatchClear = (): void => {
        setStatus('idle');
        setElapsedMs(0);
        setStartedAt(null);
    };

    return (
        <div className='stopwatch'>
            <span className='stopwatch-time'>
                {stopwatchCalc(status, displayElapsed)}
            </span>

            <StopwatchControls
                status={status}
                onStart={handleStopwatchStart}
                onPause={handleStopwatchPause}
                onResume={handleStopwatchStart}
                onClear={handleStopwatchClear}
            />

            <span id='delete-btn'>
                <Button
                    variant='danger'
                    onClick={() => handleRemoveStopwatch(id, setStopwatchList)}
                >
                    <Trash2 size={20} />
                    Delete
                </Button>
            </span>
        </div>
    );
};

export default Stopwatch;
