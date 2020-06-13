export interface MovieLike {
	tmdbId: number;
}
export interface StateSlice<T> {
	[id: number]: T;
}
export interface StoreStateType {
	movieLikes: StateSlice<MovieLike>;
}
export const EMPTY_STATE: StoreStateType = {
	movieLikes: []
};
