// /**
//  * @format
//  */

// import {AppRegistry} from 'react-native';
import { Navigation } from 'react-native-navigation';
import App from './App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);


Navigation.registerComponent('App', () => App);
Navigation.events().registerAppLaunchedListener(async => {
    Navigation.setRoot({
        root: {
            stack: {
                children: [
                    {
                        component: {
                            name: 'App'
                        }
                    }
                ]
            }
        }
    })
})