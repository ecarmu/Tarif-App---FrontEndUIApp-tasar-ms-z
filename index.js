/**
 * @format
 */
import 'react-native-gesture-handler'; //bunu adam yazıyor ama ben siteye girince benim için bu yok, başka bir şey var
import {AppRegistry} from 'react-native';
import App from './src/Router';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
