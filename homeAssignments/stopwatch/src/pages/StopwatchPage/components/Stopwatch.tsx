import type { FC } from 'react';
import { Trash2 } from 'lucide-react';
import Button from '../../../components/Button';
import StopwatchControls from '../components/StopwatchControls';
import type { StopwatchProps } from '../../../types';

const Stopwatch: FC<StopwatchProps> = ({ status, setStatus, onDelete }) => (
    <div className='stopwatch'>
        <span className='stopwatch-time'>00:00:00,00</span>

        <StopwatchControls
            status={status}
            onStart={() => setStatus('running')}
            onPause={() => setStatus('paused')}
            onResume={() => setStatus('running')}
            onClear={() => setStatus('idle')}
        />

        <span id='delete-btn'>
            <Button variant='danger' onClick={onDelete}>
                <Trash2 size={20} />
                Delete
            </Button>
        </span>
    </div>
);

export default Stopwatch;
