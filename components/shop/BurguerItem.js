import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';

import Colors from '../../constants/Colors';

const BurguerItem = props => {
  return (
    <View style={styles.burguer}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.price}>${props.price.toFixed(2)}</Text>
      </View>
      <View style={styles.bodyContainer}>
        <Text style={styles.description}>{props.description}</Text>
        <Image style={styles.image} source={{ uri: props.image }} />
      </View>
      <View style={styles.actions}>
        <Button
          color={Colors.primary}
          title="Adicionar ao Carrinho"
          onPress={props.onAddToCart}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  burguer: {
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: 'white',
    height: 300,
    margin: 20
  },
  bodyContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 330,
    height: 150,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden'
  },
  image: {
    width: '50%',
    height: '65%',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '22%',
    marginRight: 4,
    marginLeft: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  price: {
    color: '#000000',
    fontSize: 25,
  },
  description: {
    fontSize: 17,
    width: '50%',
    height: '85%',
    paddingLeft: 10,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '25%',
    paddingHorizontal: 10
  }
});

export default BurguerItem;
