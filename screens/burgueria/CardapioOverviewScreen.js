import React from 'react';
import { FlatList, Text } from 'react-native';
import { useSelector } from 'react-redux';

const CardapioOverviewScreen = props => {
  const burguers = useSelector(state => state.burguer.availableBurguers);
  return (
    <FlatList
      data={burguers}
      keyExtractor={item => item.id}
      renderItem={itemData => <Text>{itemData.item.title}</Text>}
    />
  );
};

CardapioOverviewScreen.navigationOptions = {
  headerTitle: 'Cardapio'
};

export default CardapioOverviewScreen;
