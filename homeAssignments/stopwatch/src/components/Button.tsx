import type { FC, ReactNode, ButtonHTMLAttributes, MouseEvent } from 'react';

type ButtonVariant =
    | 'addStopwatchBtn'
    | 'startBtn'
    | 'pauseBtn'
    | 'clearBtn'
    | 'deleteBtn';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant: ButtonVariant;
    onClick: (e: MouseEvent<HTMLButtonElement>) => void;
}

const VARIANTS: Record<ButtonVariant, string> = {
    addStopwatchBtn: '',
    startBtn: '',
    pauseBtn: '',
    clearBtn: '',
    deleteBtn: '',
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
