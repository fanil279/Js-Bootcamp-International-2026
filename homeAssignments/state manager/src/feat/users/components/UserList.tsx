import type { UserListProps } from '../../../types';

function UserList({ users }: UserListProps) {
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
                    </li>
                ))}
            </ul>
        </>
    );
}

export default UserList;
