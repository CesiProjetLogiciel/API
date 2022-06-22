export interface BasePaypal {
    paypal: string;
}

export interface UserPaypal extends BasePaypal {
    user_id: number;
}