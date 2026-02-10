import type { Status, StopwatchItem } from '../types';

export function handleAddStopwatch(
    setStopwatchList: React.Dispatch<React.SetStateAction<StopwatchItem[]>>
) {
    setStopwatchList((prev) => [
        ...prev,

        {
            id: crypto.randomUUID(),
            status: 'idle',
            elapsedMs: 0,
            startedAt: null
        }
    ]);
}

export function handleDelete(
    id: string,
    setStopwatchList: React.Dispatch<React.SetStateAction<StopwatchItem[]>>
) {
    setStopwatchList((prev: StopwatchItem[]) =>
        prev.filter((sw) => 
            sw.id !== id
        )
    );
}

export function handleToggleStatus(
    id: string,
    newStatus: Status,
    setStopwatchList: React.Dispatch<React.SetStateAction<StopwatchItem[]>>
) {
    setStopwatchList(prev =>
        prev.map(sw => {
            if (sw.id !== id) return sw;

            switch (newStatus) {
                case 'running':
                    return {
                        ...sw,
                        status: 'running',
                        startedAt: Date.now()
                    };
                case 'paused':
                    return {
                        ...sw,
                        status: 'paused',
                        elapsedMs: (sw.elapsedMs || 0) + (Date.now() - (sw.startedAt || Date.now())),
                        startedAt: null
                    };
                case 'idle':
                    return {
                        ...sw,
                        status: 'idle',
                        startedAt: null,
                        elapsedMs: 0
                    };
                default:
                    throw new Error(`Invalid status: ${newStatus}`);
            }
        })
    );
}
