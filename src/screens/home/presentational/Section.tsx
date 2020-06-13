import * as React from "react";
import { StyleSheet, ActivityIndicator } from "react-native";
import styled from "styled-components/native";
import { Text } from "../../shared/Text";
import { defaultStyles } from "../../styles";

const styles = StyleSheet.create({
	title: {
		color: "white",
		marginBottom: defaultStyles.metrics.largeMargin,
		marginLeft: defaultStyles.metrics.mediumMargin
	}
});
const Container = styled.View`
	padding: ${defaultStyles.metrics.largeMargin}px;
	padding-top: ${defaultStyles.metrics.mediumMargin}px;
	flex-grow: 1;
`;
const MoviesContainer = styled.View`
	flex-direction: row;
	flex-wrap: wrap;
`;
const LoadingContainer = styled.KeyboardAvoidingView`
	flex-grow: 1;
	justify-content: center;
	align-items: center;
`;

interface SectionProps {
	sectionTitle: string;
	movies: JSX.Element[];
	isLoading: boolean;
}
export function Section(props: SectionProps) {
	return (
		<Container>
			<Text fontWeight="bold" style={styles.title}>
				{props.sectionTitle}
			</Text>
			{props.isLoading && (
				<LoadingContainer>
					<ActivityIndicator
						size="large"
						color={defaultStyles.colors.accent}
					/>
				</LoadingContainer>
			)}
			{!props.isLoading && (
				<MoviesContainer>{props.movies}</MoviesContainer>
			)}
		</Container>
	);
}
