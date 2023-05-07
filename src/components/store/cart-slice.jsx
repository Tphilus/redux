import { createSlice } from "@reduxjs/toolkit";

createSlice({
    name: 'cart',
    initialState: {
        item: [],
        totalQuantity: 0,
        totalAmout: 0,
    },
    reducers: {
        addItemToCart(state, action) {
            const newItem = action.payload;
            const existingItem= state.items.find(item => item.id);
            if(!existingItem) {
                state.items.push({
                    itemId: newItem.id, 
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.title,
                });
            } else {
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.price + newItem.price;
            };
        },
        removeItemFormCart() {

        },
    }
});