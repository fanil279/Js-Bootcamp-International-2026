import type { User as UserType } from "../types";

class User {
    private static api = import.meta.env.VITE_USERS_API_URL;
    private static apiKey = import.meta.env.VITE_API_KEY;

    private static mapUser(user: {
        username: string;
        sex: string;
        address: string;
        name: string;
        email: string;
        dob: string;
    }): UserType {
        return {
            username: user.username,
            sex: user.sex,
            address: user.address,
            name: user.name,
            email: user.email,
            birthday: user.dob,
        };
    }

    static async getUsers(): Promise<UserType[]> {
        try {
            const params = new URLSearchParams({
                fields: 'username,sex,address,name,email,dob',
            });

            const response = await fetch(`${User.api}?${params.toString()}`, {
                method: 'GET',
                headers: {
                    'X-Api-Key': User.apiKey,
                },
            });

            if (!response.ok) {
                throw new Error(`API request failed with status ${response.status}`);
            }

            const data = await response.json();

            return data.map(User.mapUser);
        } catch (err) {
            console.error('Error fetching users:', err);
            throw err;
        }
    }

    static async addUser(): Promise<UserType | null> {
        try {
            const params = new URLSearchParams({
                fields: 'username,sex,address,name,email,dob',
                count: '1',
            });

            const response = await fetch(`${User.api}?${params.toString()}`, {
                method: 'GET',
                headers: {
                    'X-Api-Key': User.apiKey,
                },
            });

            if (!response.ok) {
                throw new Error(`API request failed with status ${response.status}`);
            }

            const data = await response.json();

            return User.mapUser(data[0]);
        } catch (err) {
            console.error('Error creating a user:', err);
            throw err;
        }
    }
}

export default User;
