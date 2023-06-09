import { View, Text, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'
import { selectSubtotal, selectDeliveryFee, selectTotal } from '../store/cartSlice'


export const ShoppingCartTotals = () => {
  const subtotal = useSelector(selectSubtotal)
  const deliveryFee = useSelector(selectDeliveryFee)
  const total = useSelector(selectTotal)

  return (
    <View style={styles.totalsContainer}>
      <View style={styles.row}>
        <Text style={styles.text}>Subtotal</Text>
        <Text style={styles.text}>{subtotal}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>Delivery</Text>
        <Text style={styles.text}>{deliveryFee}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.textBold}>Total</Text>
        <Text style={styles.textBold}>{total}</Text>
      </View>
    </View>
  )
}

const styles =  StyleSheet.create({
  totalsContainer: {
    paddingTop: 10,
    margin: 20,
    borderTopWidth: 1,
    borderColor: 'gainsboro'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 2
  },
  text: {
    fontSize: 16,
    color: 'gray'
  },
  textBold: {
    fontSize: 16,
    fontWeight: 500
  },
})

