import { StyleSheet, Image, FlatList, Pressable } from 'react-native';
import products from '../data/products'; 

export const ProductsScreen = ({ navigation }) => {
  return (
    <FlatList
      data={products}
      numColumns={2}
      renderItem={({item}) => (
        <Pressable style={styles.itemContainer} onPress={() => navigation.navigate('Product Details')}>
          <Image source={{uri: item.image}} style={styles.image}/>
        </Pressable>
      )}/>
    )
}

const styles = StyleSheet.create({
  itemContainer: {
    width: '50%',
    margin: 1
  },
  image: {
    width: '100%',
    aspectRatio: 1
  }
})