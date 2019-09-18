import React from 'react';
import { FlatList, Text } from 'react-native';
import { useSelector } from 'react-redux';
import BURGUERS from '../../data/dummy-data';

const CardapioOverviewScreen = props => {
  const burguers = useSelector(state => state.burguer.availableBurguers);
  return (
    <FlatList
      data={burguers}
      keyExtractor={itemData => itemData.id}
      renderItem={
        ({item}) => (
       <Text>
          {item.title}
       </Text>
      )}
    />
  );
};

CardapioOverviewScreen.navigationOptions = {
  headerTitle: 'Cardapio'
};

export default CardapioOverviewScreen;
