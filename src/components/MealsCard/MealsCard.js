import React from "react";
import { View, Image, Text, TouchableWithoutFeedback } from "react-native";
import styles from "./MealsCardStyle"

const MealsCard = ({meal, onSelect}) => {

    return (
        <TouchableWithoutFeedback onPress={onSelect}>
            <View>
                <Image source={{ uri: meal.strMealThumb }} style={styles.image}/>
                <Text>{meal.strMeal}</Text>
            </View>
        </TouchableWithoutFeedback>
            
        

    )
}

export default MealsCard