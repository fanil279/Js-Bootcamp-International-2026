export type Status = 'running' | 'paused' | 'idle';

export interface StopwatchProps {
    id: string;
    setStopwatchList: React.Dispatch<React.SetStateAction<StopwatchItem[]>>;
};

export interface StopwatchItem {
    id: string;
    status: Status;
    elapsedMs: number;
    startedAt: number | null;
};
