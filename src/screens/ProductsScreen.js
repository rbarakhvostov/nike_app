import { StyleSheet, Image, FlatList, Pressable } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { productsSlice } from '../store/productsSlice'

export const ProductsScreen = ({ navigation }) => {
  const dispatch = useDispatch()

  const products = useSelector((state) => state.products.products)

  return (
    <FlatList
      data={products}
      numColumns={2}
      renderItem={({item}) => (
        <Pressable
          style={styles.itemContainer}
          onPress={() => {
            dispatch(productsSlice.actions.setSelectedProduct(item.id))
            
            navigation.navigate('Product Details')
          }}>
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