import { Text, View } from "react-native";
import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

import { TheHeader } from "@/components/TheHeader";

const appHeight = Dimensions.get("screen").height;

export default function Index() {
	return (
		<View style={styles.parentContainer}>
			<TheHeader />
		</View>
	);
}

const styles = StyleSheet.create({
	parentContainer: {
		backgroundColor: "#000814",
		height: appHeight,
	},
});
