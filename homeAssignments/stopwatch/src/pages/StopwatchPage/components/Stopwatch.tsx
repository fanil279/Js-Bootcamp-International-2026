import {
    type FC,
    useEffect,
    useState,
    useCallback,
    useMemo,
} from 'react';
import { Trash2 } from 'lucide-react';
import Button from '../../../components/Button';
import StopwatchControls from '../components/StopwatchControls';
import { handleRemoveStopwatch, stopwatchCalc } from '../../../utils/stopwatch.utils';
import type { Status, StopwatchProps } from '../../../types';

const Stopwatch: FC<StopwatchProps> = ({ id, setStopwatchList }) => {
    const [status, setStatus] = useState<Status>('idle');
    const [elapsedMs, setElapsedMs] = useState<number>(0);
    const [startedAt, setStartedAt] = useState<number | null>(null);

    const [displayElapsed, setDisplayElapsed] = useState(() => elapsedMs);

    useEffect(() => {
        if (status !== 'running' || !startedAt) return;

        const interval = setInterval(() => {
            setDisplayElapsed(
                (elapsedMs) + (Date.now() - startedAt)
            );
        }, 50);

        return () => clearInterval(interval);
    }, [status, startedAt, elapsedMs]);

    const handleStopwatchStart = useCallback((): void => {
        setStatus('running');
        setStartedAt(Date.now());
    }, []);

    const handleStopwatchPause = useCallback((): void => {
        setStatus('paused');

        if (startedAt) {
            setElapsedMs(
                (prev) => prev + (Date.now() - startedAt)
            );
        }

        setStartedAt(null);
    }, [startedAt]);

    const handleStopwatchClear = useCallback((): void => {
        setStatus('idle');
        setElapsedMs(0);
        setStartedAt(null);
    }, []);

    const handleRemoveSW = useCallback((): void => {
        handleRemoveStopwatch(id, setStopwatchList);
    }, [id, setStopwatchList]);

    const formattedTime = useMemo((): string => (
        stopwatchCalc(status, displayElapsed)
    ), [status, displayElapsed]);

    return (
        <div className='stopwatch'>
            <span className='stopwatch-time'>
                {formattedTime}
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
                    onClick={handleRemoveSW}
                >
                    <Trash2 size={20} />
                    Delete
                </Button>
            </span>
        </div>
    );
};

export default Stopwatch;
