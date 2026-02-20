export type Status = 'running' | 'paused' | 'idle';

export type SetStopwatchList = React.Dispatch<React.SetStateAction<StopwatchItem[]>>;

export interface StopwatchProps {
    id: string;
    setStopwatchList: SetStopwatchList;
};

export interface StopwatchItem {
    id: string;
};
