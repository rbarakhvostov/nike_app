import { Pressable, Text } from 'react-native'
import { FontAwesome5 } from "@expo/vector-icons";
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { ProductsScreen } from './screens/ProductsScreen'
import { ProductDetailsScreen } from './screens/ProcuctDetailsScreen'
import { ShoppingCartScreen } from './screens/ShoppingCartScreen'



const Stack = createNativeStackNavigator()

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{contentStyle: {backgroundColor: '#ffffff'}}}>
        <Stack.Screen
          name="Products"
          component={ProductsScreen}
          options={({ navigation }) => ({
            headerRight: () => (
              <Pressable
                style={{flexDirection: 'row'}}
                onPress={() => navigation.navigate('Shopping Cart')}
              >
                <FontAwesome5 name="shopping-cart" size={18} color="gray" />
                <Text style={{marginLeft: 5, fontWeight: 500}}>100</Text>
              </Pressable>
          )})}
        />
        <Stack.Screen
          name="Product Details"
          component={ProductDetailsScreen}
          options={{presentation: 'modal'}}
        />
        <Stack.Screen name="Shopping Cart" component={ShoppingCartScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}