import { PixelRatio, Dimensions } from "react-native";

const REFERENCE_WIDTH = 320;
export function scale(value: number) {
	const { width, height } = Dimensions.get("screen");
	const ratio = REFERENCE_WIDTH / (width < height ? width : height);
	return PixelRatio.roundToNearestPixel(value * ratio);
}
export const defaultStyles = {
	colors: {
		panelBackground: "#111",
		searchBarBackground: "#222",
		regularText: "#fff",
		accent: "#E42121",
		coverPlaceholder: "#333"
	},
	fontColors: {
		faintText: "#666",
		regularText: "#fff"
	},
	fontSizes: {
		medium: 16,
		large: 18,
		extraLarge: 20
	},
	fontFamilyByFontWeight: {
		light: "HKGrotesk-Light",
		regular: "HKGrotesk-Regular",
		medium: "HKGrotesk-Medium",
		bold: "HKGrotesk-Bold"
	},
	metrics: {
		smallMargin: scale(5),
		mediumMargin: scale(10),
		largeMargin: scale(20),
		mediumRadius: 5
	}
};
