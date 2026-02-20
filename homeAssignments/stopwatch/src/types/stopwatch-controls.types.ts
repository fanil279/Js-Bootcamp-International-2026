import type { Status } from './index';

export interface StopwatchControlsProps {
    status: Status;
    onStart: () => void;
    onPause: () => void;
    onResume: () => void;
    onClear: () => void;
};
