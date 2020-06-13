import * as React from "react";
import { Login } from "./presentational/Login";

interface LoginContainerProps {
	onPressLogin: () => void;
}
export function LoginContainer(props: LoginContainerProps) {
	return <Login onPressLogin={props.onPressLogin} />;
}
