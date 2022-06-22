/**
 * Common
 */

export interface OrderUpdate {
    deliveryman_id?: number;
    status?: string;
}

/**
 * Orders
 */

export interface BaseOrderDelivery {
    user_id: number;
    delivery_address: string;
    restaurant_id: number;
}

export interface BaseOrder extends BaseOrderDelivery {
    price: number;
    product_ids: number[];
    menu_ids: number[];
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