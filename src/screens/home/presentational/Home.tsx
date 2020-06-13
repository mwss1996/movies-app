import * as React from "react";
import { TextInput } from "react-native";
import styled from "styled-components/native";
import { defaultStyles } from "../../styles";
import { Header } from "./Header";
import { SearchBar } from "./SearchBar";
import { Section } from "./Section";

const Container = styled.ScrollView`
	background-color: ${defaultStyles.colors.panelBackground};
`;
interface HomeProps {
	onSearchInputChangeText: (text: string) => void;
	onPressClearTextButton: () => void;
	searchInputref: React.RefObject<TextInput>;
	movies: JSX.Element[];
	isLoading: boolean;
}
export function Home(props: HomeProps) {
	return (
		<Container contentContainerStyle={{ flexGrow: 1 }}>
			<Header />
			<SearchBar
				onSearchInputChangeText={props.onSearchInputChangeText}
				onPressClearTextButton={props.onPressClearTextButton}
				searchInputref={props.searchInputref}
			/>
			<Section
				isLoading={props.isLoading}
				sectionTitle="Movies"
				movies={props.movies}
			/>
		</Container>
	);
}
