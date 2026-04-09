import type { User as UserType } from "../types";

class User {
    private static api = import.meta.env.VITE_USERS_API_URL;
    private static apiKey = import.meta.env.VITE_API_KEY;

    static async getUsers(): Promise<UserType[]> {
        try {
            const response = await fetch(User.api, {
                method: 'GET',
                headers: {
                    'X-Api-Key': User.apiKey,
                },
            });

            if (!response.ok) {
                throw new Error(`API request failed with status ${response.status}`);
            }

            const data = await response.json();

            return data;
        } catch (err) {
            console.error('Error fetching users:', err);
            throw err;
        }
    }
}

export default User;
