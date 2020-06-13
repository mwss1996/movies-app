import * as React from "react";
import { StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { Text } from "../../shared/Text";
import { defaultStyles } from "../../styles";
import styled from "styled-components/native";

const styles = StyleSheet.create({
	icon: {
		marginRight: defaultStyles.metrics.mediumMargin
	},
	title: {
		color: "white"
	}
});
const Container = styled.View`
	flex-direction: row;
	align-items: center;
	padding: ${defaultStyles.metrics.largeMargin}px;
`;
export function Header() {
	return (
		<Container>
			<Icon
				name="video"
				size={defaultStyles.fontSizes.extraLarge}
				color={"red"}
				style={styles.icon}
			/>
			<Text fontWeight="bold" style={styles.title}>
				Movies App
			</Text>
		</Container>
	);
}
