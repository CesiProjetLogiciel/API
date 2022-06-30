export interface BaseProduct {
    name: string;
    price: number;
    description?: string;
    image?: string;
}

export interface RestaurantProduct extends BaseProduct {
    restaurant_id: string;
}

export interface Product extends RestaurantProduct {
    id: string;
}

export interface BaseMenuProduct {
    name: string;
    description?: string;
}

export interface MenuProduct extends BaseMenuProduct {
    id: string;
}

export interface PutProduct {
    name?: string;
    price?: number;
    description?: string;
    image?: string;
}