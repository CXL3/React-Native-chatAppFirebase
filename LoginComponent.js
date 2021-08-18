import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Input, Button, Divider } from "react-native-elements";


class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Log In</Text>
        <Input
          placeholder="Your Email"
          leftIcon={{ type: "font-awesome", name: "user-o" }}
          onChangeText={(email) => this.setState({ email })}
          value={this.state.email}
          containerStyle={styles.formInput}
          leftIconContainerStyle={styles.formIcon}
        />
        <Input
          placeholder="Password"
          leftIcon={{ type: "font-awesome", name: "lock" }}
          onChangeText={(password) => this.setState({ password })}
          value={this.state.password}
          containerStyle={styles.formInput}
          leftIconContainerStyle={styles.formIcon}
        />
        
        <View style={{ marginTop: 30 }}>
          <Button style={{ marginBottom: 20 }} color="#5637DD" title="Log In" onPress={() => navigate("Chat")} />

        </View>
        <Divider width={0.2} />
        <View style={styles.formButton}>
          <Button
            type="outline"
            title="Sign up"
            onPress={() => navigate("Register")}
            
          />
        </View> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    margin: 20,
  },
  formIcon: {
    marginRight: 10,
  },
  formInput: {
    padding: 10,
  },
  formCheckbox: {
    margin: 10,
    backgroundColor: null,
  },
  formButton: {
    marginTop: 20,
    backgroundColor: "white",
    color: "white",
    borderRadius: 4,
  },
  text: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    margin: 60,
    marginBottom: 40,
  },
});

export default Login;
