import { View, Text } from "react-native";
import { StyleSheet } from "react-native";

export const TheHeader = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Daily tasks</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		paddingVertical: 12,
		paddingHorizontal: 12,
	},
	title: {
		fontSize: 24,
		fontWeight: 500,
	},
});
