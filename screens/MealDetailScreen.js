import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { MEALS } from "../data/dummy-data";

const MealDetailScreen = ({ route }) => {
	const mealId = route.params.mealId;

	const selectedMeal = MEALS.find((meal) => meal.id === mealId);

	return (
		<View>
			<Text>This is the Meal Detail Screen {mealId}</Text>
		</View>
	);
};

export default MealDetailScreen;
