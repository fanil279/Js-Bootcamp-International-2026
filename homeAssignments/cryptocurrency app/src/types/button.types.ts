import type { ButtonHTMLAttributes } from 'react';

export type ButtonVariant =
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'danger';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant: ButtonVariant;
};
