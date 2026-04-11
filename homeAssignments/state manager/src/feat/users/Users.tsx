import { useState, useEffect } from 'react';
import store from '../../store/store';
import { setUsers, deleteUser, updateUserAddress, addUser } from '../../store/actions';
import UserList from './components/UserList';
import Dialog from './dialogs/Dialog';
import User from '../../services/users';
import type { User as UserType } from '../../types';

function Users() {
    const [users, setUsersState] = useState<UserType[]>(store.getState().users);
    const [selectedUser, setSelectedUser] = useState<UserType | null>(null);

    useEffect(() => {
        const unsubscribe = store.subscribe(() => {
            setUsersState(store.getState().users);
        });

        return () => unsubscribe();
    }, []);

    useEffect(() => {
        User.getUsers().then((users) => {
            setUsers(users);
        });
    }, []);

    const handleDeleteUser = (user: UserType) => {
        deleteUser(user.email);
    };

    const handleOpenDialog = (user: UserType) => {
        setSelectedUser(user);
    };

    const handleDialogClose = () => {
        setSelectedUser(null);
    };

    const handleSaveUser = (email: string, address: string) => {
        updateUserAddress(email, address);
        setSelectedUser(null);
    };

    const handleUserAdd = () => {
        User.addUser().then((newUser) => {
            if (newUser) {
                addUser(newUser);
            }
        });
    };

    return (
        <div className='users-container'>
            <div className='users-header'>
                <h1 className='users-title'>Users</h1>
                <p className='users-subtitle'>Profiles:</p>
            </div>

            <UserList
                users={users}
                handleDeleteUser={handleDeleteUser}
                handleOpenDialog={handleOpenDialog}
                handleUserAdd={handleUserAdd}
            />

            <Dialog
                key={selectedUser?.email}
                isOpen={Boolean(selectedUser)}
                user={selectedUser}
                onClose={handleDialogClose}
                onSave={handleSaveUser}
            />
        </div>
    );
}

export default Users;
