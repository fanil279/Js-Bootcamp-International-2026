import type { ButtonHTMLAttributes } from 'react';

export type ButtonVariant =
    | 'addStopwatchBtn'
    | 'startBtn'
    | 'pauseBtn'
    | 'clearBtn'
    | 'resumeBtn'
    | 'deleteBtn';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant: ButtonVariant;
}
