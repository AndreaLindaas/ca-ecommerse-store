"use client"
import {create} from "zustand"
import {  CartStore, Product } from "./_types/types"

export const useCartStore = create<CartStore>()((set)=>({
    products:[],
    
    addProduct: (product:Product)=> 
    { set((state) => { 
        let newProducts = [];

        const foundProduct = state.products.find((p:Product) => p.id === product.id);
  
        // If the product is already in the cart we want to increase the quantity
        if (foundProduct) {
          foundProduct.quantity = foundProduct.quantity + 1;
          // Create a new array but insert the modified product
          newProducts = state.products.map((i) => (i.id === foundProduct.id ? foundProduct : i));
          // Else we want to add the product to the cart array
        } else {
            newProducts = [...state.products, { ...product, quantity: 1 }];
        }
        return {
            products: newProducts
        }
    });
    },
   removeProduct: (product:Product)=>{
    set((state)=>{
        let newProducts = [] as Product[];

        if(product.quantity > 1){
            product.quantity=product.quantity - 1;
            newProducts = state.products.map((i)=>(i.id === product.id ? product : i));

        }else{
            newProducts= state.products.filter((i)=> i.id !== product.id)
        }

        return {
            products: newProducts
        }
    })
   },
   clearCart: ()=> set({products:[]})
}))





