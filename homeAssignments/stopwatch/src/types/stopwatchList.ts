import type { StopwatchItem } from './stopwatch';

export interface StopwatchListProps {
    stopwatchList: StopwatchItem[];
    setStopwatchList: React.Dispatch<React.SetStateAction<StopwatchItem[]>>;
};
