export interface User {
   username: string;
   sex: string;
   address: string;
   name: string;
   email: string;
   birthday: string;
};

export type UserListProps = {
    users: User[];
    handleDeleteUser: (user: User) => void;
    handleOpenDialog: (user: User) => void;
};

export type UsersState = {
    users: User[];
};
