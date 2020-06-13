import axios from "axios";
import { ApiResult, AxiosResult } from "./states";

export const API_BASE = "https://api.themoviedb.org/3";
export const API_IMAGE_BASE = "https://image.tmdb.org/t/p/original";
export const API_KEY = "7fc35c2a660d7173020751e18251d803";

export async function discoverPopular(): Promise<ApiResult> {
	try {
		const result: AxiosResult = await axios.get(API_BASE + "/discover/movie?api_key=" + API_KEY);
		return result.data;
	} catch {
		return {results: []};
	}
}
export async function searchMovie(query: string): Promise<ApiResult> {
	try {
		const result: AxiosResult = await axios.get(API_BASE + "/search/movie?api_key=" + API_KEY + "&query=" + query);
		return result.data;
	} catch {
		return {results: []};
	}
}
