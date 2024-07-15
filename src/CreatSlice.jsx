// CreatSlice.jsx

import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
    },
    reducers: {
        addItem: (state, action) => {
            const { name, image, cost } = action.payload;
            const existingItem = state.items.find(item => item.name === name);
            if (existingItem) {
                existingItem.quantity++;
            } else {
                // Parse cost to remove '$' and convert to float
                const parsedCost = parseFloat(cost.replace('$', ''));
                state.items.push({ name, image, cost: parsedCost, quantity: 1 });
            }
        },
        removeItem: (state, action) => {
            const itemNameToRemove = action.payload;
            state.items = state.items.filter(item => item.name !== itemNameToRemove);
        },
        updateQuantity: (state, action) => {
            const { name, quantity } = action.payload;
            const existingItem = state.items.find(item => item.name === name);
            if (existingItem) {
                existingItem.quantity = quantity;
            }
        },
    },
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
