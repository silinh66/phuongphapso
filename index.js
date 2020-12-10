// /**
//  * @format
//  */

// import {AppRegistry} from 'react-native';
import { Navigation } from 'react-native-navigation';
import App from './App';
import InputScreen from './app/screens/InputScreen';
import ResultScreen from './app/screens/ResultScreen';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);


Navigation.registerComponent('App', () => App);
Navigation.registerComponent('InputScreen', () => InputScreen);
Navigation.registerComponent('ResultScreen', () => ResultScreen);
Navigation.events().registerAppLaunchedListener(async => {
    Navigation.setRoot({
        root: {
            stack: {
                children: [
                    {
                        component: {
                            name: 'App',
                            options: {
                                topBar: {
                                    title: {
                                        text: "Phương pháp số ",
                                        color: 'white',
                                        fontSize: 24,
                                        fontWeight: 'bold',
                                        alignment: 'center'
                                    },
                                    background: {
                                        color: 'orange'
                                    },
                                    backButton: {
                                        color: 'white'
                                    }
                                }
                            }
                        }
                    }
                ]
            }
        }
    })
})