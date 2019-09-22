import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';

import Colors from '../../constants/Colors';

const BurguerItem = props => {
  return (
    <View style={styles.burguer}>
      <View style={styles.details}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.price}>${props.price.toFixed(2)}</Text>
      </View>
      <View style={styles.imageContainer}>
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
  imageContainer: {
    width: '100%',
    height: '50%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden'
  },
  image: {
    width: '100%',
    height: '100%'
    
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '25%',
    paddingTop: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 4,
    marginVertical: 4
  },
  price: {
    color: '#000000',
    fontSize: 25,
    marginRight: 4,
    marginTop: 20
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '25%',
    paddingHorizontal: 20
  }
});

export default BurguerItem;
