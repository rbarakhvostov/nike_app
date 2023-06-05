import { StyleSheet, Image, FlatList, View } from 'react-native';
import products from '../data/products'; 

export const ProductScreen = () => {
  return (
    <FlatList
      data={products}
      numColumns={2}
      renderItem={({item}) => (
        <View style={styles.itemContainer}>
          <Image source={{uri: item.image}} style={styles.image}/>
        </View>
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