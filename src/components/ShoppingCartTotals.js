import { View, Text, StyleSheet } from 'react-native'

export const ShoppingCartTotals = () => (
  <View style={styles.totalsContainer}>
    <View style={styles.row}>
      <Text style={styles.text}>Subtotal</Text>
      <Text style={styles.text}>$560</Text>
    </View>
    <View style={styles.row}>
      <Text style={styles.text}>Delivery</Text>
      <Text style={styles.text}>$10</Text>
    </View>
    <View style={styles.row}>
      <Text style={styles.textBold}>Total</Text>
      <Text style={styles.textBold}>$570</Text>
    </View>
  </View>
)

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

