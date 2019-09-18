import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Platform } from 'react-native';

import CardapioOverviewScreen from '../screens/cardapio/CardapioOverviewScreen';
import Colors from '../constants/Colors';

const CardapioNavigator = createStackNavigator(
  {
    CardapioOverview: CardapioOverviewScreen
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
      },
      headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
    }
  }
);

export default createAppContainer(CardapioNavigator);
