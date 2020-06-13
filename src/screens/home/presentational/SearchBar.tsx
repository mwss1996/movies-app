import * as React from "react";
import { StyleSheet, TextInput } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import styled from "styled-components/native";
import { defaultStyles, scale } from "../../styles";
import { Touchable } from "./../../shared/Touchable";

const styles = StyleSheet.create({
	searchBarIcon: {
		height: "100%",
		fontSize: defaultStyles.fontSizes.medium,
		color: defaultStyles.fontColors.faintText,
		textAlignVertical: "center",
		paddingHorizontal: defaultStyles.metrics.mediumMargin + scale(4)
	}
});
const Container = styled.View`
	padding-horizontal: ${defaultStyles.metrics.mediumMargin}px;
`;
const SearchBarContainer = styled.View`
	color: ${defaultStyles.fontColors.regularText};
	background-color: ${defaultStyles.colors.searchBarBackground};
	border-radius: ${defaultStyles.metrics.mediumRadius}px;
	margin-horizontal: ${defaultStyles.metrics.mediumMargin}px;
	margin-bottom: ${defaultStyles.metrics.smallMargin}px;
	flex-direction: row;
`;
const SearchInput = styled.TextInput`
	font-family: ${defaultStyles.fontFamilyByFontWeight.medium}px;
	font-size: ${defaultStyles.fontSizes.medium}px;
	padding-vertical: ${defaultStyles.metrics.smallMargin}px;
	flex-grow: 1;
	flex-basis: 0;
	color: ${defaultStyles.fontColors.regularText};
`;
interface SearchBar {
	onSearchInputChangeText: (text: string) => void;
	onPressClearTextButton: () => void;
	searchInputref: React.RefObject<TextInput>;
}
export function SearchBar(props: SearchBar) {
	return (
		<Container>
			<SearchBarContainer>
				<Icon style={styles.searchBarIcon} name="search" />
				<SearchInput
					ref={props.searchInputref}
					placeholderTextColor={defaultStyles.fontColors.faintText}
					placeholder="Search"
					onChangeText={props.onSearchInputChangeText}
				/>
				<Touchable onPress={props.onPressClearTextButton}>
					<Icon style={styles.searchBarIcon} name="times" />
				</Touchable>
			</SearchBarContainer>
		</Container>
	);
}
