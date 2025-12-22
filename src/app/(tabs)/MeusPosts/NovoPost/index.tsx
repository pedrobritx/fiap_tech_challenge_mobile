import PostForm from "@/src/components/PostForm";
import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function NovoPost() {

	return (
		<SafeAreaView style={styles.container}>
			<ScrollView contentContainerStyle={styles.scroll}>
				<PostForm />
			</ScrollView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#B5D195",
		paddingHorizontal: 20,
	},
	scroll: {
		gap: 20,
	}
});