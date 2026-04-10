import Button from '../../../components/Button';
import type { UserListProps } from '../../../types';

function UserList({ users, handleDeleteUser }: UserListProps) {
    return (
        <>
            <ul className='users-list'>
                {users.map((user) => (
                    <li key={user.email} className='user-row'>
                        <div className='user-cell'>
                            <span className='user-label'>Username</span>
                            <span className='user-value'>{user.username}</span>
                        </div>

                        <div className='user-cell'>
                            <span className='user-label'>Address</span>
                            <span className='user-value'>{user.address}</span>
                        </div>

                        <div className='user-cell'>
                            <span className='user-label'>Email</span>
                            <span className='user-value'>{user.email}</span>
                        </div>

                        <Button
                            variant='danger'
                            onClick={() => handleDeleteUser(user)}
                        >
                            Delete
                        </Button>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default UserList;
