import React, { Component } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import LogIn from "./LoginComponent";
import Register from "./RegisterComponent";
import Chat from "./ChatComponent";
// added second ssh to gitlab,testing github still connected correctly
const Stack = createStackNavigator();

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Chat" component={Chat} />
          <Stack.Screen name="Login" component={LogIn} />
          <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
