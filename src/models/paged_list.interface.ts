export interface PagedList<Type> {
    data: Type[];
    page: number;
    total_pages: number;
    items_per_page: number;
    total_items: number;
    next: string;
    prev: string;
}