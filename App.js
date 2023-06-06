import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { ProductScreen } from './src/screens/ProductScreen';
import { ProductDetailsScreen } from './src/screens/ProcuctDetailsScreen';
import { ShoppingCart } from './src/screens/ShoppingCart';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <ProductScreen /> */}
      {/* <ProductDetailsScreen /> */}
      <ShoppingCart />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});
