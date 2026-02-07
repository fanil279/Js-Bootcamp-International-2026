export type Status = 'running' | 'paused' | 'idle';

export interface StopwatchProps {
    status: Status;
    setStatus: (newStatus: Status) => void;
    onDelete: () => void;
}

export interface StopwatchItem {
    id: string;
    status: Status;
}
