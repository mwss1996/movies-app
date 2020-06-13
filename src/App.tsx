import * as React from "react";
import { LoginWall } from "./connection/LoginWall";
import { AppContainer } from "./screens/appContainer/AppContainer";
import { Loading } from "./screens/loading/presentational/Loading";
import { StoreContainer } from "./store/StoreContainer";

export function App() {
	return (
		<LoginWall>
			<StoreContainer loadingScreen={<Loading />}>
				<AppContainer />
			</StoreContainer>
		</LoginWall>
	);
}
