import type { FC, ReactNode, ButtonHTMLAttributes } from 'react';

type ButtonVariant =
    | 'addStopwatchBtn'
    | 'startBtn'
    | 'pauseBtn'
    | 'clearBtn'
    | 'deleteBtn';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant: ButtonVariant;
}

const VARIANTS: Record<ButtonVariant, string> = {
    addStopwatchBtn: 'btn addStopwatchBtn',
    startBtn: 'btn startBtn',
    pauseBtn: 'btn pauseBtn',
    clearBtn: 'btn clearBtn',
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
