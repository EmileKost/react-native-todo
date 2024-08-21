import { View, Text, Image } from "react-native";
import { StyleSheet } from "react-native";

export const TheHeader = () => {
	const name = "Emile";
	return (
		<View style={styles.container}>
			<View style={styles.textContainer}>
				<View style={styles.profileImageContainer}>
					<Image
						source={require("../assets/images/me.jpg")}
						alt="Profile picture"
						style={styles.profileImage}
					/>
				</View>
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
		paddingHorizontal: 13,
		backgroundColor: "#0D60DD",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
	},
	textContainer: {
		maxWidth: "85%",
		display: "flex",
		flexDirection: "column",
		gap: 6,
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
	profileImageContainer: {
		borderRadius: 50,
		width: 80,
		height: 80,
		overflow: "hidden",
	},
	profileImage: {
		width: 80,
		height: 80,
	},
});
