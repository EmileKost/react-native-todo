import { useState } from "react";
import { Button, View } from "react-native";
import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

import { TheHeader } from "@/components/TheHeader";
import { TaskList } from "@/components/TaskList";
import { ButtonAdd } from "@/components/buttons/ButtonAdd";

import Svg from "react-native-svg";

const appHeight = Dimensions.get("screen").height;

export default function Index() {
	const [tasks, setTasks] = useState<string[]>([]);
	return (
		<View style={styles.parentContainer}>
			<TheHeader />
			<TaskList />
			<ButtonAdd onPress={setTasks} />
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

<svg
	xmlns="http://www.w3.org/2000/svg"
	width="36"
	height="36"
	viewBox="0 0 36 36">
	<path
		id="Icon_open-plus"
		data-name="Icon open-plus"
		d="M13.5,0V13.5H0v9H13.5V36h9V22.5H36v-9H22.5V0Z"
		fill="#fff"
	/>
</svg>;
