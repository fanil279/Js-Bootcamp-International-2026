import type { User as UserType } from '../types';

export type DialogProps = {
    isOpen: boolean;
    user: UserType | null;
    onClose: () => void;
    onSave: (email: string, address: string) => void;
};
