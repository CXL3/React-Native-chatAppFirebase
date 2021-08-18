import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LogIn from "./LoginComponent";

const Stack = createStackNavigator();

class App extends Component {
  render() {
    return (
      <NavigationContainer>
      <Stack.Navigator >
      <Stack.Screen name="Login" component={LogIn} />
      </Stack.Navigator>
      </NavigationContainer>
      );
  }
}

export default App;