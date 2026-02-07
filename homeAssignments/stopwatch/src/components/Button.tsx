import { type FC } from 'react';
import type { ButtonVariant, ButtonProps } from '../types';

const VARIANTS: Record<ButtonVariant, string> = {
    addStopwatchBtn: 'btn addStopwatchBtn',
    startBtn: 'btn startBtn',
    pauseBtn: 'btn pauseBtn',
    clearBtn: 'btn clearBtn',
    resumeBtn: 'btn resumeBtn',
    deleteBtn: 'btn deleteBtn',
};

const Button: FC<ButtonProps> = (
    { children, variant, className = '', ...props }
) => {
    return (
        <button
            className={`${VARIANTS[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
