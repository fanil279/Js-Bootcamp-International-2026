import { useState, useEffect } from 'react';
import store from '../../store/store';
import { setUsers } from '../../store/actions';
import UserList from './components/UserList';
import User from '../../services/users';
import type { User as UserType } from '../../types';

function Users() {
    const [users, setUsersState] = useState<UserType[]>(store.getState().users);

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

    return (
        <div className='users-container'>
            <div className='users-header'>
                <h1 className='users-title'>Users</h1>
                <p className='users-subtitle'>Fetched user profiles</p>
            </div>

            <UserList users={users} />
        </div>
    );
}

export default Users;
