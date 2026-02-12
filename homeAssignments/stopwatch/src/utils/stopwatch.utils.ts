import type { Status, StopwatchItem } from '../types';

export function handleAddStopwatch(
    setStopwatchList: React.Dispatch<React.SetStateAction<StopwatchItem[]>>
): void {
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

export function handleToggleState(
    id: string,
    newStatus: Status,
    setStopwatchList: React.Dispatch<React.SetStateAction<StopwatchItem[]>>
): void {
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

export function handleDelete(
    id: string,
    setStopwatchList: React.Dispatch<React.SetStateAction<StopwatchItem[]>>
): void {
    setStopwatchList((prev: StopwatchItem[]) =>
        prev.filter((sw) => 
            sw.id !== id
        )
    );
}

export function stopwatchCalc(
    status: Status,
    elapsedMs: number,
): string {
    if (status === 'idle') return '00:00:00,00';

    const hours: string = String(
        Math.floor(elapsedMs / (1000 * 60 * 60))
    ).padStart(2, '0');

    const minutes: string = String(
        Math.floor((elapsedMs / (1000 * 60)) % 60)
    ).padStart(2, '0');

    const seconds: string = String(
        Math.floor((elapsedMs / 1000) % 60)
    ).padStart(2, '0');

    const milliseconds: string = String(
        Math.floor((elapsedMs % 1000) / 10)
    ).padStart(2, '0');

    return `${hours}:${minutes}:${seconds},${milliseconds}`;
}
