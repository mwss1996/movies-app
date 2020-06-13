import * as React from "react";
import { LoginContainer } from "../screens/login/LoginContainer";

interface LoginWallProps {
	children: JSX.Element;
}
interface LoginWallState {
	screenToRender: JSX.Element | undefined;
}
export class LoginWall extends React.Component<LoginWallProps, LoginWallState> {
	constructor(props: LoginWallProps) {
		super(props);
		this.state = {
			screenToRender: <LoginContainer onPressLogin={() => {
				this.setState({screenToRender: props.children})
			}}/>
		};
	}
	render() {
		return this.state.screenToRender;
	}
}
