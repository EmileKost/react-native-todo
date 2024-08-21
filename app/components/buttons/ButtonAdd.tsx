import { Dispatch, SetStateAction } from "react";
import { TouchableHighlight, View } from "react-native";

import Svg from "react-native-svg";

type ButtonAddProps = {
	onPress: Dispatch<SetStateAction<string[]>>;
};

export const ButtonAdd = ({ onPress }: ButtonAddProps) => {
	const handlePress = () => {
		console.log("yeehah");
	};
	return (
		<TouchableHighlight onPress={handlePress}>
			<View></View>
		</TouchableHighlight>
	);
};
