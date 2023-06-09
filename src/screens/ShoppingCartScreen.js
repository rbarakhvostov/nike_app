import { FlatList, Text, StyleSheet, Pressable } from "react-native"
import CartListItem from "../components/CartListItem"
import { ShoppingCartTotals } from '../components/ShoppingCartTotals'
import { useSelector } from 'react-redux'

export const ShoppingCartScreen = () => {
  const cartItems = useSelector(state => state.cart.items)

  return (
    <>
      <FlatList
        data={cartItems}
        renderItem={({ item }) => (<CartListItem cartItem={item} />)}
        ListFooterComponent={ShoppingCartTotals}
      />
      <Pressable style={styles.button} >
        <Text style={styles.buttonText}>Checkout</Text>
      </Pressable>
    </>
  )   
}

const styles =  StyleSheet.create({
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
})