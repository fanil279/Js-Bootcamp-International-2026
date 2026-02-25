import {
    type FC,
    useEffect,
    useState,
    useRef,
    useCallback,
    useMemo
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

    const elapsedRef = useRef<number>(0);
    const startedAtRef = useRef<number | null>(null);

    useEffect(() => {
        elapsedRef.current = elapsedMs;
    }, [elapsedMs]);

    useEffect(() => {
        startedAtRef.current = startedAt;
    }, [startedAt]);

    useEffect(() => {
        if (status !== 'running') return;

        const intervalId = setInterval(() => {
            const start = startedAtRef.current;
            const base = elapsedRef.current;

            if (start == null) return;

            setDisplayElapsed(
                (base) + (Date.now() - start)
            );
        }, 16);

        return () => clearInterval(intervalId);
    }, [status]);

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
        setDisplayElapsed(0);
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
