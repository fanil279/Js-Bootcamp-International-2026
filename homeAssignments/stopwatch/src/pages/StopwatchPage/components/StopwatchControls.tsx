import type { FC, JSX } from 'react';
import {
    Play,
    Pause,
    RotateCcw
} from 'lucide-react';
import Button from '../../../components/Button';
import type { StopwatchControlsProps } from '../../../types';

const StopwatchControls: FC<StopwatchControlsProps> = ({
    status,
    onStart,
    onPause,
    onResume,
    onClear
}) => {
    let buttons: JSX.Element;

    switch (status) {
        case 'idle':
            buttons = (
                <Button variant='primary' onClick={onStart}>
                    <Play size={20} />
                    Start
                </Button>
            );

            break;
        case 'running':
            buttons = (
                <>
                    <Button variant='tertiary' onClick={onPause}>
                        <Pause size={20} />
                        Pause
                    </Button>

                    <Button variant='warning' onClick={onClear}>
                        <RotateCcw size={20} />
                        Clear
                    </Button>
                </>
            );

            break;
        case 'paused':
            buttons = (
                <>
                    <Button variant='success' onClick={onResume}>
                        <Play size={20} />
                        Resume
                    </Button>

                    <Button variant='warning' onClick={onClear}>
                        <RotateCcw size={20} />
                        Clear
                    </Button>
                </>
            );

            break;
        default:
            return (
                () => {
                    throw new Error(`Invalid status: ${status}`);
                }
            )() as never;
    }

    return <span className='stopwatch-controls'>{buttons}</span>;
};

export default StopwatchControls;
