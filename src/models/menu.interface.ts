import { MenuProduct } from "./product.interface";

export interface BaseMenu {
    name: string;
    price: number;
    description?: string;
}

export interface Menu extends BaseMenu {
    id: string;
    restaurant_id: string;
    products: MenuProduct[];
}


export interface PostMenu extends BaseMenu {
    product_ids: string[];
}

export interface PutMenu {
    name?: string;
    price?: number;
    description?: string;
}