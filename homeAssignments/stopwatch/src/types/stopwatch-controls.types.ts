import type { Status } from './stopwatch.types';

export interface StopwatchControlsProps {
    status: Status;
    onStart: () => void;
    onPause: () => void;
    onResume: () => void;
    onClear: () => void;
};
