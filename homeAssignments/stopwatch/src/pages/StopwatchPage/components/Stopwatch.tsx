import { type FC, useEffect, useState } from 'react';
import { Trash2 } from 'lucide-react';
import Button from '../../../components/Button';
import StopwatchControls from '../components/StopwatchControls';
import { stopwatchCalc } from '../../../utils/stopwatch.utils';
import type { StopwatchProps } from '../../../types';

const Stopwatch: FC<StopwatchProps> = ({
    status,
    elapsedMs,
    startedAt,
    setStatus,
    onDelete
}) => {
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

    return (
        <div className='stopwatch'>
            <span className='stopwatch-time'>{stopwatchCalc(status, displayElapsed)}</span>

            <StopwatchControls
                status={status}
                onStart={() => setStatus('running')}
                onPause={() => setStatus('paused')}
                onResume={() => setStatus('running')}
                onClear={() => setStatus('idle')}
            />

            <span id='delete-btn'>
                <Button variant='danger' onClick={onDelete}>
                    <Trash2 size={20} />
                    Delete
                </Button>
            </span>
        </div>
    );
};

export default Stopwatch;
