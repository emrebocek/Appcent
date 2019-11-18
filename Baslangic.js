import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import App from './App';
import Liste from './src/component/Liste';
import Resim from './src/component/Resim';


const AppNavigator=createStackNavigator(
{
    App:{screen:App},
    Resim:{screen:Resim},
    Liste:{screen:Liste}

},  
{
    initialRouteName:'Liste',
    headerMode:'none'
}
);
export default createAppContainer(AppNavigator);