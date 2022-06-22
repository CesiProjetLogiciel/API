export interface PostRestaurant {
    name: string;
    category: string;
    description?: string;
    image?: string;
}

export interface Restaurant extends PostRestaurant {
    id: number;
}

export interface PutRestaurant {
    name?: string;
    category?: string;
    description?: string;
    image?: string;
}