import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { styles } from './styles';

const Home = ({ navigation }: { navigation: any }) => (
  <View style={styles.box}>
    <Text style={styles.text}>Hello, world!</Text>
    <Button
      title="press me"
      onPress={() => {
        navigation.navigate('Details', {
          itemId: 86,
          otherParam: 'anything you want here',
        });
      }}
    />
  </View>
);

const DetailScreen = ({ route, navigation }: { route: any; navigation: any }) => {
  const { itemId, otherParam } = route.params;
  return (
    <View style={styles.box}>
      <Text style={styles.text}>Detail Screen</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>
      <Button
        title="press me details"
        onPress={() => {
          navigation.push('Details');
        }}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button title="Go back to first screen in stack" onPress={() => navigation.popToTop()} />
    </View>
  );
};

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
