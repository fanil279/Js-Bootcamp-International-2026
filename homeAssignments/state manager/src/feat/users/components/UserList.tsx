import Button from '../../../components/Button';
import type { UserListProps } from '../../../types';

function UserList({
    users,
    handleDeleteUser,
    handleOpenDialog,
    handleUserAdd,
}: UserListProps) {
    return (
        <>
            <Button
                variant='primary'
                className='add-btn'
                onClick={handleUserAdd}
            >
                Add User
            </Button>

            <ul className='users-list'>
                {users.map((user) => (
                    <li
                        key={user.email}
                        className='user-row'
                        onClick={() => handleOpenDialog(user)}
                    >
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
                            onClick={(e) => {
                                e.stopPropagation();
                                handleDeleteUser(user);
                            }}
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
