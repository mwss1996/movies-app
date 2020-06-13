export interface ApiMovie {
    id: number,
    original_title: string,
    poster_path: string,
    title: string,
    overview: string
}
export interface ApiResult {
    results: ApiMovie[]
}
export interface AxiosResult {
    data: ApiResult
}