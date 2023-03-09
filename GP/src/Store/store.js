import { configureStore } from "@reduxjs/toolkit";  
import { cartReducer } from "./cartData/cart";
import { diseasesReducer } from "./Disease/Disease";
import { largeBoxReducer } from "./largeBox/largeBox";
import { loginReducer } from "./login/loginSlice";
import { mealsReducer } from "./Meals/Meals";
import { mediumBoxReducer } from "./mediumBox/MediumBox";
import { fruitsReducer } from "./slices/ApiFruits";
import { herbalsReducer } from "./slices/ApiHerbals";
import { meatReducer } from "./slices/ApiMeat";
import { milkReducer } from "./slices/ApiMilk";
import { vegetablesReducer } from "./slices/ApiVegitables";
import { smallBoxReducer } from "./smallBox/SmallBox";



export const store = configureStore({
    reducer: {
        vegetablesSlice: vegetablesReducer,
        fruitsSlice: fruitsReducer,
        meatSlice: meatReducer,
        milkSlice: milkReducer,
        herbalsSlice: herbalsReducer,
        cartSlice: cartReducer,
        diseasesSlice: diseasesReducer,
        loginSlice: loginReducer,
        smallBoxSlice:smallBoxReducer,
        mediumBoxSlice: mediumBoxReducer,
        largeBoxSlice:largeBoxReducer,
        mealsSlice:mealsReducer
    }
})


