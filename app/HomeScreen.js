import { Text, View } from 'react-native'
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';

export default function HomeScreen() {
   
    const insets = useSafeAreaInsets();
    return (
        <View style={{ flex: 1, paddingTop: insets.top, backgroundColor: "blue" }}>
            <Text style={{ fontSize: 28 }}>Content is in safe area.</Text>
        </View>
    );
}
