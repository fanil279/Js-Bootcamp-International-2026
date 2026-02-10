import type { StopwatchItem } from '../types';

export default function handleAddStopwatch(
    setStopwatchList: React.Dispatch<React.SetStateAction<StopwatchItem[]>>
) {
    setStopwatchList((prev) => [
        ...prev,
        { id: crypto.randomUUID(), status: 'idle' }
    ]);
}
