import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Platform } from 'react-native';

import BurguerOverViewScreen from '../screens/cardapio/CardapioOverviewScreen';
import Colors from '../constants/Colors';

const BurguerNavigator = createStackNavigator({
    BurguerOverview: BurguerOverViewScreen
}, {
    defaultNavigationOptions: {
        headerStyle: {
            background: Platform.OS == 'android' ? Colors.primary : ''
        },
        headerTintColor: Platform.OS == 'android' ? 'white' : Colors.primary
    }

})

export default createAppContainer(BurguerNavigator);