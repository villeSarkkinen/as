import App from './App';
import { AppRegistry } from 'react-native';


AppRegistry.registerComponent('build', () => App);
AppRegistry.runApplication('build', { rootTag: document.getElementById('root') });

