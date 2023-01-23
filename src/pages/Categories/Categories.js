import React from "react";
import { SafeAreaView, FlatList, Text } from "react-native";
import styles from "./CategoriesStyle"

import customFetch from "../../hooks/customFetch";
import Config from "react-native-config";

import CategoryCard from "../../components/CategoryCard";

import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error"; 



const Category = ({navigation}) => {

    const {loading, data, error} = customFetch(Config.API_URL)

    function renderCategoryCard({item}){
        return <CategoryCard category={item} onSelect={() => navigateOnSelect(item.strCategory)}/>
    }

    function navigateOnSelect(strCategory){
        navigation.navigate('MealsScreen', {strCategory})
    }

    if (loading)
        return <Loading />


    if (error)
        return <Error />

    return (
        <SafeAreaView style = {styles.container}>
            <FlatList
                data={data.categories}
                keyExtractor={item => item.idCategory}
                renderItem={renderCategoryCard}
            />
        </SafeAreaView>
    )
}

export default Category