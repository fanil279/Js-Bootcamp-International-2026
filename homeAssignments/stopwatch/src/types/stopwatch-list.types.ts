import type { StopwatchItem } from './stopwatch.types';

export interface StopwatchListProps {
    stopwatchList: StopwatchItem[];
    setStopwatchList: React.Dispatch<React.SetStateAction<StopwatchItem[]>>;
};
