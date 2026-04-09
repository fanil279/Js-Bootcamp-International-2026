import { useState, useEffect } from 'react';
import UserList from './components/UserList';
import User from '../../services/users';
import type { User as UserType } from '../../types';

function Users() {
    const [users, setUsers] = useState<UserType[]>([]);

    useEffect(() => {
        User.getUsers().then(setUsers);
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
