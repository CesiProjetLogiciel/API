export interface BaseAddress {
    zipcode: string;
    city: string;
    address: string;
    state?: string;
    additional_info?: string;
    last_name: string;
    first_name: string;
    phone_number: string;
    country: string;
}

export interface Address extends BaseAddress {
    id: number;
    user_id: number;
}

export interface PutAddress {
    zipcode?: string;
    city?: string;
    address?: string;
    state?: string;
    additional_info?: string;
    last_name?: string;
    first_name?: string;
    phone_number?: string;
    country?: string;
}