import * as React from "react";
import { useNavigation } from "react-navigation-hooks";
import { useDispatch, useSelector } from "react-redux";
import { API_IMAGE_BASE } from "../../connection/api/endpoints";
import {
	addMovieLike,
	removeMovieLike
} from "../../store/reducers/ducks/movieLikes";
import { StoreStateType } from "../../store/states";
import { MovieDetails } from "./presentational/MovieDetails";

export function MovieDetailsContainer() {
	const { getParam } = useNavigation();
	const dispatch = useDispatch();
	const movie = getParam("movie");
	const movieLikes = useSelector((state: StoreStateType) => state.movieLikes);
	const liked = movieLikes[movie.id] !== undefined;
	return (
		<MovieDetails
			coverUri={API_IMAGE_BASE + movie.poster_path}
			title={movie.title}
			overview={movie.overview}
			liked={liked}
			onPressLike={() => {
				if (liked) {
					dispatch(removeMovieLike(movie.id));
				} else {
					dispatch(addMovieLike(movie.id));
				}
			}}
		/>
	);
}
