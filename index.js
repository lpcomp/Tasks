/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import Agenda from './src/screens/Agenda'
import Navigator from './src/Navigator'

AppRegistry.registerComponent(appName, () => Navigator);

/* 
    ver os emuladores: emulator -list-avds
    iniciar emulador: emulator -no-snapshot -avd NomeDoEmulador
*/
