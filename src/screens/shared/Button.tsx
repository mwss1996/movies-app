import * as React from "react";
import { StyleSheet, View, StyleProp, ViewStyle } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { defaultStyles } from "../styles/";
import { Text } from "./Text";
import { Touchable } from "./Touchable";

const styles = StyleSheet.create({
	Touchable: {},
	innerContainer: {
		borderRadius: 10,
		paddingVertical: defaultStyles.metrics.mediumMargin,
		paddingHorizontal: defaultStyles.metrics.largeMargin,
		flexDirection: "row",
		alignItems: "center"
	},
	Text: {
		fontSize: defaultStyles.fontSizes.medium
	},
	Icon: {
		fontSize: defaultStyles.fontSizes.large,
		marginLeft: defaultStyles.metrics.mediumMargin
	}
});
interface ButtonProps {
	disabled?: boolean;
	onPress: () => void;
	label: string;
	iconName?: string;
	textColor?: string;
	backgroundColor?: string;
	disabledBackgroundColor?: string;
	disabledTextColor?: string;
	containerStyle?: StyleProp<ViewStyle>;
}
export function Button(props: ButtonProps) {
	const backgroundColor = props.disabled
		? props.disabledBackgroundColor || props.backgroundColor || "inherit"
		: props.backgroundColor;
	const textColor =
		(props.disabled
			? props.disabledTextColor || props.textColor
			: props.textColor) || "inherit";
	return (
		<View style={props.containerStyle}>
			<Touchable
				style={styles.Touchable}
				onPress={() => {
					if (!props.disabled) {
						props.onPress();
					}
				}}
			>
				<View
					style={[
						{ backgroundColor: backgroundColor },
						styles.innerContainer
					]}
				>
					<Text style={[{ color: textColor }, styles.Text]}>
						{props.label}
					</Text>
					{props.iconName !== undefined && (
						<Icon
							style={[{ color: textColor }, styles.Icon]}
							name={props.iconName}
						/>
					)}
				</View>
			</Touchable>
		</View>
	);
}
