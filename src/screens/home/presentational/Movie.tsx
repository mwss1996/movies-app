import * as React from "react";
import { StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import styled from "styled-components/native";
import { Text } from "../../shared/Text";
import { Touchable } from "../../shared/Touchable";
import { defaultStyles } from "../../styles";

const styles = StyleSheet.create({
	title: {
		marginTop: defaultStyles.metrics.mediumMargin,
		marginHorizontal: defaultStyles.metrics.smallMargin,
		color: "white"
	}
});
const Container = styled.View`
	width: 50%;
	margin-bottom: ${defaultStyles.metrics.largeMargin}px;
	align-items: center;
`;
const Cover = styled.Image`
	width: 100px;
	height: 150px;
	background-color: ${defaultStyles.colors.coverPlaceholder};
	resize-mode: cover;
`;
interface MovieProps {
	movieTitle: string;
	posterUri: string;
	onPressMovie: () => void;
	liked: boolean;
}
export function Movie(props: MovieProps) {
	return (
		<Touchable onPress={props.onPressMovie}>
			<Container>
				<Cover
					source={{
						uri: props.posterUri
					}}
				/>
				<Text fontWeight="bold" style={styles.title}>
					{props.movieTitle}
					{props.liked && " "}
					{props.liked && <Icon name="star" color={"white"} solid />}
				</Text>
			</Container>
		</Touchable>
	);
}
