import * as React from "react";
import { TextInput } from "react-native";
import { useNavigation } from "react-navigation-hooks";
import { Home } from "./presentational/Home";
import { Movie } from "./presentational/Movie";
import {
	discoverPopular,
	searchMovie,
	API_IMAGE_BASE
} from "./../../connection/api/endpoints";
import { useSelector } from "react-redux";
import { StoreStateType } from "../../store/states";
import { ApiMovie, ApiResult } from "../../connection/api/states";

let lastSearchInputChangeTextTime = 0;
let timeout: any = undefined;
let firstRender = true;

export function HomeContainer() {
	const { navigate } = useNavigation();
	const movieLikes = useSelector((state: StoreStateType) => state.movieLikes);
	const textInputRef = React.createRef<TextInput>();
	const [state, setState] = React.useState<{
		movies: ApiMovie[];
		isLoading: boolean;
	}>({
		movies: [],
		isLoading: false
	});
	function onSearchInputChangeText(search: string) {
		const searchInputChangeTextTime = Date.now();
		lastSearchInputChangeTextTime = searchInputChangeTextTime;
		clearTimeout(timeout);
		timeout = setTimeout(() => {
			(async function(search: string): Promise<ApiResult> {
				if (!search) {
					return await discoverPopular();
				}
				return await searchMovie(search);
			})(search.trim()).then(result => {
				if (
					searchInputChangeTextTime === lastSearchInputChangeTextTime
				) {
					setState({
						movies: result.results,
						isLoading: false
					});
				}
			});
		}, 500);
		if (!state.isLoading) {
			setState({
				movies: [],
				isLoading: true
			});
		}
	}
	if (firstRender) {
		firstRender = false;
		onSearchInputChangeText("");
	}
	const moviesElements = state.movies.map((movie: ApiMovie) => (
		<Movie
			key={movie.id}
			movieTitle={movie.title}
			posterUri={API_IMAGE_BASE + movie.poster_path}
			onPressMovie={() => {
				navigate("movieDetails", {
					movie
				});
			}}
			liked={movieLikes[movie.id] !== undefined}
		/>
	));
	return (
		<Home
			isLoading={state.isLoading}
			onSearchInputChangeText={onSearchInputChangeText}
			onPressClearTextButton={() => {
				if (textInputRef.current) {
					textInputRef.current.clear();
				}
				onSearchInputChangeText("");
			}}
			searchInputref={textInputRef}
			movies={moviesElements}
		/>
	);
}
