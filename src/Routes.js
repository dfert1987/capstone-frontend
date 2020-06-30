import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation'
import Home from './screens/Home.js';
import StadiumsList from './screens/StadiumsList.js';
import StadiumMap from './screens/StadiumMap.js';

const screens = {
	Home: {
		screen: Home
	},
	StadiumsList: {
		screen: StadiumsList
	},
	StadiumMap: {
		screen: StadiumMap
	}

}

const HomeStack = createStackNavigator(screens);
export default createAppContainer(HomeStack)