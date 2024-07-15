import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CreatSlice'; // Adjust the path as per your project structure

const store = configureStore({
    reducer: {
        cart: cartReducer, // Add your reducer here
    },
});

export default store;
