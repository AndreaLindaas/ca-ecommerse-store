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
}

export type Review = {
    description:string,
    id:string,
    rating:number,
    username:string
}