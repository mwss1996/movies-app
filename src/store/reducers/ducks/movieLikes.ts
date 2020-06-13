import { StoreStateType } from "../../states";

export const ADD_MOVIE_LIKE = "ADD_MOVIE_LIKE";
export const REMOVE_MOVIE_LIKE = "REMOVE_MOVIE_LIKE";

interface AddMovieLike {
	type: typeof ADD_MOVIE_LIKE;
	tmdbId: number;
}
interface RemoveMovieLike {
	type: typeof REMOVE_MOVIE_LIKE;
	tmdbId: number;
}
export function addMovieLike(
	tmdbId: number,
): AddMovieLike {
	return {
		type: ADD_MOVIE_LIKE,
		tmdbId
	};
}
export function removeMovieLike(
	tmdbId: number
): RemoveMovieLike {
	return {
		type: REMOVE_MOVIE_LIKE,
		tmdbId
	};
}
export type MovieLikesActions =
	| AddMovieLike
	| RemoveMovieLike;
export function movieLikesReducer(
	state: StoreStateType,
	action: MovieLikesActions
): StoreStateType {
	switch (action.type) {
		case ADD_MOVIE_LIKE:
			return {
				...state,
				movieLikes: {
					...state.movieLikes,
					[action.tmdbId]: {
						tmdbId: action.tmdbId
					}
				}
			};
		case REMOVE_MOVIE_LIKE:
			const newMovieLikes = {...state.movieLikes};
			delete newMovieLikes[action.tmdbId];
			return {
				...state,
				movieLikes: newMovieLikes
			};
		default:
			return state;
	}
}
