/**
 * Common
 */

export interface OrderUpdate {
    deliveryman_id?: number;
    status?: number;
}

/**
 * Orders
 */

export interface BaseOrderDelivery {
    user_id: number;
    delivery_address: number;
    billing_address: number;
    restaurant_id: string;
    deliveryman_firstname?: string;
    deliveryman_lastname?: string;
}

export interface BaseOrder extends BaseOrderDelivery {
    price: number;
    product_ids: number[];
}

export interface PostOrder extends BaseOrder {
    payment_token: string;
}

export interface Order extends BaseOrder, OrderUpdate {
    id: number;
}

/**
 * Deliveries
 */

export interface Delivery extends BaseOrderDelivery, OrderUpdate {
    id: number;
    restaurant_address: string;
}

export enum OrderStatus {
    REFUSED = 0,
    PENDING = 1,
    PREPARING = 2,
    IN_DELIVERY = 3,
    DELIVERED = 4
}