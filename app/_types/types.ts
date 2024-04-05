export type Product = {
    description: string,
    discountedPrice: number,
    id: string,
    imageUrl: string,
    price: number,
    rating: number,
    title: string,
    tags: string[],
    reviews: Review[]
    quantity: number;
}

export type Review = {
    description:string,
    id:string,
    rating:number,
    username:string
}

export type CartStore = {
    products:Product[],
    addProduct: (product:Product)=>void
    removeProduct: (product:Product)=>void
}