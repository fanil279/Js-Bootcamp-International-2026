import { type FC } from 'react';
import type { ButtonVariant, ButtonProps } from '../types';

const VARIANTS: Record<ButtonVariant, string> = {
    primary: 'btn primary',
    secondary: 'btn secondary',
    tertiary: 'btn tertiary',
    success: 'btn success',
    warning: 'btn warning',
    danger: 'btn danger',
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
