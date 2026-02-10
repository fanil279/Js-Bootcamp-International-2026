import { type FC, useEffect, useState } from 'react';
import { Trash2 } from 'lucide-react';
import Button from '../../../components/Button';
import StopwatchControls from '../components/StopwatchControls';
import { stopwatch } from '../../../utils/stopwatch.utils';
import type { StopwatchProps } from '../../../types';

const Stopwatch: FC<StopwatchProps> = ({
    status,
    elapsedMs,
    startedAt,
    setStatus,
    onDelete
}) => {
    const [, forceRender] = useState(0);

    useEffect(() => {
        if (status !== 'running') return;

        const interval = setInterval(() => {
            forceRender(prev => prev + 1);
        }, 50);

        return () => clearInterval(interval);
    }, [status]);

    const liveElapsed = (status === 'running' && startedAt)
        ? elapsedMs + (Date.now() - startedAt)
        : elapsedMs;

    return (
        <div className='stopwatch'>
            <span className='stopwatch-time'>{stopwatch(status, liveElapsed)}</span>

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
