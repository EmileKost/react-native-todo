import { Text, View } from "react-native";
import { StyleSheet } from "react-native";

import { TheHeader } from "@/components/TheHeader";

export default function Index() {
	return (
		<View style={styles.parentContainer}>
			<TheHeader />
		</View>
	);
}

const styles = StyleSheet.create({
	parentContainer: {
		paddingTop: 80,
	},
});
