import type { FC } from 'react';
import { useState } from 'react';
import {
    Play,
    Pause,
    RotateCcw
} from 'lucide-react';
import Button from './Button';
import type { Status } from '../types';

const Stopwatch: FC = () => {
    const [status, setStatus] = useState<Status>('idle');

    return (
        <div className='stopwatch'>
            <div className='stopwatch-time'>00:00:00,00</div>

            {status === 'idle' && (
                <Button variant='startBtn' onClick={() => setStatus('running')}>
                    <Play size={20} />
                    Start
                </Button>
            )}

            {status === 'running' && (
                <span>
                    <Button variant='pauseBtn' onClick={() => setStatus('paused')} style={{marginRight: '5rem'}}>
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
                <span>
                    <Button variant='resumeBtn' onClick={() => setStatus('running')} style={{marginRight: '5rem'}}>
                        <Play size={20} />
                        Resume
                    </Button>

                    <Button variant='clearBtn' onClick={() => setStatus('idle')}>
                        <RotateCcw size={20} />
                        Clear
                    </Button>
                </span>
            )}
            
        </div>
    );
}

export default Stopwatch;
