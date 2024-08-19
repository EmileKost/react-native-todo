import { View, Text } from "react-native";
import { StyleSheet } from "react-native";

import dayjs from "dayjs";

export const TheHeader = () => {
	const currentDate = dayjs().format("DD/MM/YYYY");
	return (
		<View style={styles.container}>
			<Text>{currentDate}</Text>
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
		fontSize: 28,
		fontWeight: 500,
		marginTop: 6,
	},
});
