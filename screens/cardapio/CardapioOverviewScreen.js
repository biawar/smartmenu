import React from 'react';
import { FlatList, Text } from 'react-native';
import { useSelector } from 'react-redux';
import BurguerItem from "../../components/shop/BurguerItem";


const CardapioOverviewScreen = props => {
  const burguers = useSelector(state => state.burguer.availableBurguers);
  return (
    <FlatList
      data={burguers}
      keyExtractor={itemData => itemData.id}
      renderItem={
        ({item}) => (
       <BurguerItem 
       title = {item.title}
       image={item.imageURl} 
       price = {item.price}
       sizeBurguer = {item.sizeOfBurguer}
       onViewDetail = {() => {}}
       />
      )}
    />
  );
};

CardapioOverviewScreen.navigationOptions = {
  headerTitle: 'Cardapio'
};

export default CardapioOverviewScreen;
