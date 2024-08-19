import { Image, StyleSheet, Platform } from "react-native";

import { View, Text } from "react-native";

export default function HomeScreen() {
	return (
		<View style={styles.parentContainer}>
			<Text style={styles.text}>I am the homepage</Text>
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
