export interface Product {
    id: number;
    code_product: string;
    categoria: string;
    name: string;
    description: string;
    price: number;
    stock: number;
    images: string[];
    createdAt: string;
    updatedAt: string;
    deletedAt: string;
}