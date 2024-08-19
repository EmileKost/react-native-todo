import { View, Text } from "react-native";
import { StyleSheet } from "react-native";

export default function TabTwoScreen() {
	return (
		<View style={styles.parentContainer}>
			<Text style={styles.text}>I am the explore page</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	parentContainer: {
		paddingTop: 80,
		paddingHorizontal: 16,
	},
	text: {
		textTransform: "uppercase",
	},
});
