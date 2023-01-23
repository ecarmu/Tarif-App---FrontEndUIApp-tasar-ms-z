import React from "react";
import { View, Image,  Text, Button} from "react-native";
import styles from "./DetailCardStyle"


const DetailCard = ({detail, onSelect}) => {

    return (
        <View>
            <Image source={{ uri: detail.strMealThumb }} style= {styles.image}/>
            <Text>{detail.strMeal}</Text>
            <Text>{detail.strArea}</Text>
            <Text>{detail.strInstructions}</Text>
            <Button title="Go to YouTube" onPress={onSelect}/>
        </View>
    )
}

export default DetailCard