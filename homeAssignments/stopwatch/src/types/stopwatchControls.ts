import type { Status } from './stopwatch';

export interface StopwatchControlsProps {
    status: Status;
    onStart: () => void;
    onPause: () => void;
    onResume: () => void;
    onClear: () => void;
};
