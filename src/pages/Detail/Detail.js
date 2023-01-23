import React from "react";
import { SafeAreaView, FlatList, Text, Linking } from "react-native";

import customFetch from "../../hooks/customFetch";
import Config from "react-native-config";

import DetailCard from "../../components/DetailCard";

import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error"; 




const Detail = ({navigation, route}) => {
    
    const { idMeal } = route.params;
    const { loading, data, error } = customFetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i='+ idMeal)

    function navigateToYoutube({item}){
        Linking.openURL(item.strYoutube)
    }

    function renderDetailCard({item}){
        return <DetailCard detail = {item} onSelect={navigateToYoutube}/>
    }
                      
    
    if (loading)
        return <Loading />


    if (error)
        return <Error />


    return(
        <SafeAreaView>
            <FlatList
                data={data.meals}
                renderItem={renderDetailCard}
            />
        </SafeAreaView>
    )
}

export default Detail