import React from "react";
import { SafeAreaView, FlatList, Text } from "react-native";
import styles from "./MealsStyle"

import customFetch from "../../hooks/customFetch";
import Config from "react-native-config";

import MealsCard from "../../components/MealsCard";

import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error"; 


const Meals = ({navigation, route}) => {

    
    const { strCategory } = route.params;

    console.log(strCategory)

    const { loading, data, error } = customFetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=' + strCategory)

    function navigateOnSelect(idMeal){
        navigation.navigate('DetailScreen', {idMeal})
    }

    function renderMealCard({ item }) {
        return <MealsCard meal={item} onSelect={() => navigateOnSelect(item.idMeal)} />
    }

    if(loading)
    return <Loading/>


    if(error)
    return <Error/>

    return (
        <SafeAreaView style = {styles.container}>
            <FlatList
                data={data.meals}
                renderItem={renderMealCard}
            />
        </SafeAreaView>
    )
}

export default Meals