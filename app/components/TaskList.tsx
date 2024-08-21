import { View, Text, ScrollView } from "react-native";
import { StyleSheet } from "react-native";
import dayjs from "dayjs";

export const TaskList = () => {
	const date = dayjs().format("DD/MM/YY");
	return (
		<View style={styles.container}>
			<View style={styles.textContainer}>
				<Text style={styles.dateText}>{date}</Text>
				<Text style={styles.title}>Daily tasks</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 12,
		paddingTop: 28,
	},
	textContainer: {
		display: "flex",
		flexDirection: "column",
		gap: 2,
	},
	title: {
		fontSize: 28,
		color: "#FFFFFF",
		fontWeight: "condensedBold",
	},
	dateText: {
		fontSize: 16,
		fontWeight: "light",
		color: "#FFFFFF",
	},
});
