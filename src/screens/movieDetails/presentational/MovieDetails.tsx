import * as React from "react";
import { Image, StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import styled from "styled-components/native";
import { Touchable } from "../../shared/Touchable";
import { defaultStyles } from "../../styles";
import { Text } from "./../../shared/Text";

const styles = StyleSheet.create({
	titleText: {
		color: "white",
		fontSize: defaultStyles.fontSizes.extraLarge,
		flexGrow: 1,
		flexBasis: 0
	},
	titleStar: {
		padding: defaultStyles.metrics.smallMargin
	},
	overviewHeader: {
		fontSize: defaultStyles.fontSizes.large,
		marginVertical: defaultStyles.metrics.mediumMargin,
		color: "white"
	},
	overview: {
		color: "white"
	}
});
const Container = styled.ScrollView`
	background-color: ${defaultStyles.colors.panelBackground};
	padding: ${defaultStyles.metrics.largeMargin}px;
`;
const CoverContainer = styled.View`
	align-items: center;
`;
const Cover = styled.Image`
	width: 170px;
	height: 255px;
	resize-mode: contain;
	background-color: ${defaultStyles.colors.coverPlaceholder};
`;
const TitleContainer = styled.View`
	margin-top: ${defaultStyles.metrics.largeMargin}px;
	flex-direction: row;
	align-items: center;
`;
interface MovieDetailsProps {
	onPressLike: () => void;
	liked: boolean;
	coverUri: string;
	title: string;
	overview: string;
}
export function MovieDetails(props: MovieDetailsProps) {
	return (
		<Container>
			<CoverContainer>
				<Cover
					source={{
						uri: props.coverUri
					}}
				/>
			</CoverContainer>
			<TitleContainer>
				<Text fontWeight="bold" style={styles.titleText}>
					{props.title}
				</Text>
				<Touchable onPress={props.onPressLike}>
					<Icon
						name="star"
						size={defaultStyles.fontSizes.large}
						color={"white"}
						solid={props.liked}
						style={styles.titleStar}
					/>
				</Touchable>
			</TitleContainer>
			<Text fontWeight="bold" style={styles.overviewHeader}>
				Overview
			</Text>
			<Text fontWeight="bold" style={styles.overview}>
				{props.overview}
			</Text>
		</Container>
	);
}
