import React from "react";
import { View, Image, Text, TouchableWithoutFeedback, TouchableOpacity } from "react-native";
import styles from "./CategoryCardStyle"

const CategoryCard = ({category, onSelect}) => {

    return(
        <TouchableWithoutFeedback onPress={onSelect}>
            <View style={styles.container}>
                <View style={styles.inner_container}>
                    <Image source={{ uri: category.strCategoryThumb }} style={styles.image} />
                    <Text>{category.strCategory}</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
            
    )
} 

export default CategoryCard