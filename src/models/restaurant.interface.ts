export interface PostRestaurant {
    name: string;
    category: string;
    description?: string;
    image?: string;
}

export interface Restaurant extends PostRestaurant {
    id: string;
    idSQL: number;
}

export interface PutRestaurant {
    name?: string;
    category?: string;
    description?: string;
    image?: string;
}