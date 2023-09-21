import { FlatList, View, Text, StyleSheet } from "react-native";

import CategoryGridTile from "../components/CategoryGridTile";

import { CATEGORIES } from "../data/dummy-data";

function renderCategoryItem(itemData) {
	return (
		<CategoryGridTile
			title={itemData.item.title}
			color={itemData.item.color}
		/>
	);
}

const CategoriesScreen = () => {
	return (
		<FlatList
			data={CATEGORIES}
			renderItem={renderCategoryItem}
			keyExtractor={(item) => item.id}
			numColumns={2}
		/>
	);
};
export default CategoriesScreen;

const styles = StyleSheet.create({});
