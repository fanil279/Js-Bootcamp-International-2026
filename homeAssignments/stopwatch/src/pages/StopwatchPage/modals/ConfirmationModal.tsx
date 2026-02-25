import { type FC, useEffect } from 'react';
import Button from '../../../components/Button';
import type { ConfirmDialogProps } from '../../../types';

const ConfirmationDialog: FC<ConfirmDialogProps> = ({ onCancel, onConfirm }) => {
    useEffect(() => {
        const handleClick = (): void => {
            console.log(
                'Clicked detected. useEffect is not cleared. Memory Leak created.'
            );
        };

        document.documentElement.addEventListener('click', handleClick);

        // In order to prevent memory leaks, we should clean up the event listener when the component unmounts as the code below does.
        // However, in this example, we are intentionally not cleaning up the event listener to demonstrate a memory leak.

        /* return () => {
            document.documentElement.removeEventListener('click', handleClick);
        }; */
    }, []);

    return (
        <div className='confirmation-dialog-wrapper'>
            <div className='confirmation-dialog'>
                <h2 className='confirmation-dialog__title'>
                    Are you sure you want to add a stopwatch?
                </h2>

                <div className='confirmation-dialog__buttons'>
                    <Button
                        variant='danger'
                        onClick={onCancel}
                    >
                        Cancel
                    </Button>
                    
                    <Button
                        variant='primary'
                        onClick={onConfirm}
                    >
                        Confirm
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationDialog;
