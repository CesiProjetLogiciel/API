export interface BaseProduct {
    name: string;
    price: number;
    description?: string;
    image?: string;
}

export interface RestaurantProduct extends BaseProduct {
    restaurant_id: number;
}

export interface Product extends RestaurantProduct {
    id: number;
}

export interface BaseMenuProduct {
    name: string;
    description?: string;
}

export interface MenuProduct extends BaseMenuProduct {
    id: number;
}

export interface PutProduct {
    name?: string;
    price?: number;
    description?: string;
    image?: string;
}