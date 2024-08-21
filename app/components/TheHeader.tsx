import { View, Text } from "react-native";
import { StyleSheet } from "react-native";

import dayjs from "dayjs";

export const TheHeader = () => {
	const currentDate = dayjs().format("DD/MM/YYYY");
	const name = "Emile";
	return (
		<View style={styles.container}>
			<View style={styles.textContainer}>
				<Text style={styles.title}>
					Hey, ready for today
					{name && <Text>{` ${name}`}</Text>}?
				</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		paddingTop: 80,
		paddingBottom: 30,
		paddingHorizontal: 12,
		backgroundColor: "#0D60DD",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
	},
	textContainer: {
		maxWidth: "85%",
	},
	title: {
		fontSize: 32,
		fontWeight: "bold",
		marginTop: 6,
		color: "#FFFFFF",
		marginBottom: 12,
	},
	subtitle: {
		fontSize: 14,
		color: "#FFFFFF",
	},
});
