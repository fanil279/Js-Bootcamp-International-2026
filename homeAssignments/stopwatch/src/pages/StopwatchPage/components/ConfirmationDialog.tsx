import type { FC } from 'react';
import Button from '../../../components/Button';
import type { ConfirmDialogProps } from '../../../types';

const ConfirmationDialog: FC<ConfirmDialogProps> = ({ onCancel, onConfirm }) => (
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

export default ConfirmationDialog;
