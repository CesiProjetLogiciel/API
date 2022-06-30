export interface BaseUser {
    first_name: string;
    last_name: string;
    email: string;
    referral_code?: string;
}

export interface RegisterUser extends BaseUser {
    password: string;
    user_type: string;
}

export interface User extends BaseUser {
    id: number;
    type: string;
}

export interface PutUser {
    first_name?: string;
    last_name?: string;
    email?: string;
    password?: string;
}