import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { HomeContainer } from "../home/HomeContainer";
import { MovieDetailsContainer } from "../movieDetails/MovieDetailsContainer";
import { defaultStyles } from "../styles";

const StackNavigator = createStackNavigator(
	{
		home: {
			screen: HomeContainer,
			navigationOptions: {
				header: null
			}
		},
		movieDetails: {
			screen: MovieDetailsContainer,
			navigationOptions: {
				title: "Movie Details"
			}
		}
	},
	{
		defaultNavigationOptions: {
			headerTintColor: defaultStyles.fontColors.regularText,
			headerStyle: {
				backgroundColor: defaultStyles.colors.panelBackground,
				elevation: 0,
				shadowOpacity: 0
			},
			headerTitleStyle: {
				fontFamily: defaultStyles.fontFamilyByFontWeight.medium
			}
		}
	}
);

export const AppContainer = createAppContainer(StackNavigator);
