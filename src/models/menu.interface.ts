import { MenuProduct } from "./product.interface";

export interface BaseMenu {
    name: string;
    price: number;
    description?: string;
}

export interface Menu extends BaseMenu {
    id: number;
    restaurant_id: number;
    products: MenuProduct[];
}


export interface PostMenu extends BaseMenu {
    product_ids: number[];
}

export interface PutMenu {
    name?: string;
    price?: number;
    description?: string;
}