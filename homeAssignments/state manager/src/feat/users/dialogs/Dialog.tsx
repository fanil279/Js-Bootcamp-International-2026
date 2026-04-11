import { useState } from 'react';
import Button from '../../../components/Button';
import type { DialogProps } from '../../../types';

const Dialog = ({ isOpen, user, onClose, onSave }: DialogProps) => {
    const [address, setAddress] = useState(user?.address ?? '');

    if (!isOpen || !user) return null;

    const handleSave = () => {
        onSave(user.email, address);
    };

    return (
        <div className='dialog-overlay' onClick={onClose}>
            <div
                className='dialog'
                onClick={(e) => e.stopPropagation()}
            >
                <div className='dialog-header'>
                    <h2 className='dialog-title'>User Info</h2>
                    
                    <Button
                        variant='secondary'
                        className='dialog-close'
                        onClick={onClose}
                        aria-label='Close dialog'
                    >
                        ×
                    </Button>
                </div>

                <div className='dialog-content'>
                    <p><strong>Name:</strong> {user.name}</p>
                    <p><strong>Username:</strong> {user.username}</p>
                    <p><strong>Sex:</strong> {user.sex}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                    <p><strong>Birthday:</strong> {user.birthday}</p>

                    <label className='dialog-label'>
                        <strong>Address:</strong>

                        <input
                            className='dialog-input'
                            type='text'
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                    </label>
                </div>

                <div className='dialog-actions'>
                    <Button
                        variant='primary'
                        className='dialog-btn'
                        onClick={handleSave}
                    >
                        Save
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Dialog;
