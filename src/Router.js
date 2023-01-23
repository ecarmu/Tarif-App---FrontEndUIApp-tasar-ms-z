import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Categories from "./pages/Categories";
import Meals from "./pages/Meals";
import Detail from "./pages/Detail";


const App = () => {
    const Stack = createStackNavigator();

    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name = "CategoriesScreen" component={Categories} />
                <Stack.Screen name="MealsScreen" component={Meals} />
                <Stack.Screen name="DetailScreen" component={Detail} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App