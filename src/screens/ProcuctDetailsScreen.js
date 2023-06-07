import {
  StyleSheet,
  View,
  Image,
  FlatList,
  useWindowDimensions,
  Text,
  ScrollView,
  Pressable
} from "react-native"
import { useSelector } from 'react-redux'
import products from "../data/products";


export const ProductDetailsScreen = () => {
  const product = useSelector((state) => state.products.selectedProduct)

  const { width } = useWindowDimensions()

  const addToCart = () => {
    console.log('ADD')
  }

  return (
    <View>
      <ScrollView>
        <FlatList
          data={product.images}
          renderItem={({ item }) => (
              <Image source={{uri: item}} style={{
                width,
                aspectRatio: 1,
              }} />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
        />
        <View style={{ padding: 20 }}>
          <Text style={styles.title}>{product.name}</Text>
          <Text style={styles.price}>${product.price}</Text>
          <Text style={styles.description}>{product.description}</Text>
        </View>
      </ScrollView>
      <Pressable style={styles.button} onPress={addToCart}>
        <Text style={styles.buttonText}>Add to cart</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 34,
    fontWeight: 500
  },
  price: {
    marginVertical: 10,
    fontSize: 16,
    fontWeight: 500,
    letterSpacing: 1.5
  },
  description: {
    fontSize: 18,
    lineHeight: 30,
    fontWeight: 300,
  },
  button: {
    position: 'absolute',
    bottom: 30,
    width: '90%',
    padding: 20,
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: '#000000',

  },
  buttonText: {
    fontWeight: 500,
    fontSize: 16,
    color: '#ffffff'
  }
});
