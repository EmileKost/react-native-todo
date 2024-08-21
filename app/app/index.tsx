import { useState } from "react";
import { Button, View } from "react-native";
import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

import { TheHeader } from "@/components/TheHeader";
import { TaskList } from "@/components/TaskList";

const appHeight = Dimensions.get("screen").height;

export default function Index() {
	const [tasks, setTasks] = useState<string[]>([]);
	return (
		<View style={styles.parentContainer}>
			<TheHeader />
			<TaskList />
		</View>
	);
}

const styles = StyleSheet.create({
	parentContainer: {
		backgroundColor: "#000814",
		height: appHeight,
		position: "relative",
	},
});
