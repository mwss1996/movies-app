import * as React from "react";
import { StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { Button } from "../../shared/Button";
import { Text } from "../../shared/Text";
import { defaultStyles } from "../../styles";

const styles = StyleSheet.create({
	container: {
		backgroundColor: defaultStyles.colors.panelBackground,
		flexGrow: 1,
		alignItems: "center",
		justifyContent: "center"
	},
	logo: {
		alignItems: "center"
	},
	logoIcon: {
		fontSize: 40,
		marginBottom: defaultStyles.metrics.mediumMargin
	},
	logoText: {
		color: "white",
		fontSize: defaultStyles.fontSizes.large,
		fontWeight: "bold"
	},
	button: {
		marginTop: defaultStyles.metrics.largeMargin
	}
});
interface LoginProps {
	onPressLogin: () => void;
}
export function Login(props: LoginProps) {
	return (
		<View style={styles.container}>
			<View style={styles.logo}>
				<Icon name="video" color={"red"} style={styles.logoIcon} />
				<Text style={styles.logoText}>Movies App</Text>
			</View>
			<Button
				containerStyle={styles.button}
				label="Start"
				onPress={props.onPressLogin}
				textColor="white"
				backgroundColor="red"
			/>
		</View>
	);
}
