import { DEFAULT_PAGE_NUMBER, USERS_ENDPOINT } from '@/utils/constants';
import { ApiResponseListUsers, ApiResponseSingleUser, User } from '@/utils/types';

// Base fetch options for common configurations across API calls.
const getFetchOptions = (method: string, data?: object) => ({
    method,
    headers: {
        'Content-Type': 'application/json',
    },
    body: data ? JSON.stringify(data) : undefined,
});

/**
 * Fetches a paginated list of users.
 * @param page - The page number to fetch.
 * @returns A Promise that resolves to the API response containing the users.
 */
export const fetchUsersPaginated = async (page: number, rowsPerPage: number): Promise<ApiResponseListUsers> => {
    const response = await fetch(`${USERS_ENDPOINT}?page=${page}&per_page=${rowsPerPage}&delay=1`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
};

/**
 * Fetches details for an individual user.
 * @param userId - The ID of the user to fetch.
 * @returns A Promise that resolves to the API response containing the user details.
 */
export const fetchUser = async (userId?: string): Promise<ApiResponseSingleUser> => {
    if (!userId) {
        return Promise.reject(new Error('Invalid or missing user ID'));
    }
    const response = await fetch(`${USERS_ENDPOINT}/${userId}`);
    if (!response.ok) {
        throw new Error('Failed to fetch user');
    }
    return response.json();
};

/**
 * Creates a new user.
 * @param userData - The data of the user to create.
 * @returns A Promise that resolves to the API response containing the created user details.
 */
export const createUser = async (userData: Partial<User>): Promise<User> => {
    const response = await fetch(USERS_ENDPOINT, getFetchOptions('POST', userData));
    if (!response.ok) {
        throw new Error('Failed to create user');
    }
    return response.json();
};

