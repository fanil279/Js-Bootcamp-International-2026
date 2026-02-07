import type { FC } from 'react';
import {
    Play,
    Pause,
    RotateCcw,
    Trash2
} from 'lucide-react';
import Button from './Button';
import type { StopwatchProps } from '../types/stopwatch';

const Stopwatch: FC<StopwatchProps> = ({ status, setStatus, onDelete }) => (
    <div className='stopwatch'>
        <span className='stopwatch-time'>00:00:00,00</span>

        {status === 'idle' && (
            <span className='stopwatch-controls'>
                <Button variant='startBtn' onClick={() => setStatus('running')}>
                    <Play size={20} />
                    Start
                </Button>
            </span>
        )}

        {status === 'running' && (
            <span className='stopwatch-controls'>
                <Button variant='pauseBtn' onClick={() => setStatus('paused')}>
                    <Pause size={20} />
                    Pause
                </Button>

                <Button variant='clearBtn' onClick={() => setStatus('idle')}>
                    <RotateCcw size={20} />
                    Clear
                </Button>
            </span>
        )}

        {status === 'paused' && (
            <span className='stopwatch-controls'>
                <Button variant='resumeBtn' onClick={() => setStatus('running')}>
                    <Play size={20} />
                    Resume
                </Button>

                <Button variant='clearBtn' onClick={() => setStatus('idle')}>
                    <RotateCcw size={20} />
                    Clear
                </Button>
            </span>
        )}

        <span id='delete-btn'>
            <Button variant='deleteBtn' onClick={onDelete}>
                <Trash2 size={20} />
                Delete
            </Button>
        </span>
    </div>
);

export default Stopwatch;
