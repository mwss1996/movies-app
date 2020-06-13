import AsyncStorage from "@react-native-community/async-storage";
import * as React from "react";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import thunk from "redux-thunk";
import asyncStorageKeys from "./../async-storage-keys.json";
import { reduceReducers } from "./reducers/reduceReducers";
import { EMPTY_STATE, StoreStateType } from "./states";
import { parseJson } from "./utils/jsonFunctions";
import { movieLikesReducer } from "./reducers/ducks/movieLikes";

interface StoreContainerProps {
	children: React.ReactNode;
	loadingScreen: JSX.Element;
}
export function StoreContainer(props: StoreContainerProps) {
	const [initialState, setInitialState] = React.useState<StoreStateType>();
	if (!initialState) {
		AsyncStorage.getItem(asyncStorageKeys.STORE).then(stateJSON => {
			setInitialState(stateJSON ? parseJson(stateJSON) : EMPTY_STATE);
		});
		return props.loadingScreen;
	}
	const store = createStore(
		reduceReducers(
			initialState,
			movieLikesReducer
		),
		composeWithDevTools(applyMiddleware(thunk))
	);
	store.subscribe(() =>
		AsyncStorage.setItem(
			asyncStorageKeys.STORE,
			JSON.stringify(store.getState())
		)
	);
	return <Provider store={store}>{props.children}</Provider>;
}
