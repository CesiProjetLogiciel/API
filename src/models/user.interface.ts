export interface BaseUser {
    first_name: string;
    last_name: string;
    email: string;
}

export interface RegisterUser extends BaseUser {
    password: string;
    user_type: string;
}

export interface User extends BaseUser {
    id: number;
}

export interface PutUser {
    first_name?: string;
    last_name?: string;
    email?: string;
    password?: string;
}