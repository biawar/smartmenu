import React from 'react';
import { FlatList, Text } from 'react-native';
import { userSelector } from 'react-redux';


const BurguerOverViewScreen = props => {
    const products = userSelector(state => state.burguer.availableBurguers)
    return <FlatList data={burguer} keyExtractor={item => item.id} renderItem={itemData => <Text>{itemData.item.title}</Text>}/>;
};

export default BurguerOverViewScreen;