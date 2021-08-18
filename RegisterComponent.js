import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Input, Button } from "react-native-elements";

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      email: "",
      password: "",
      imageUrl:"",
    };
  }
  static navigationOptions = {
    title: "SignUp",
  };
  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
    
        <Input
          placeholder="Email"
          leftIcon={{ type: "font-awesome", name: "envelope" }}
          onChangeText={(email) => this.setState({ email })}
          value={this.state.email}
          containerStyle={styles.formInput}
          leftIconContainerStyle={styles.formIcon}
        />
        <Input
          placeholder="Username"
          leftIcon={{ type: "font-awesome", name: "user-o" }}
          onChangeText={(username) => this.setState({ username })}
          value={this.state.username}
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
        
        <Input
        placeholder='Enter your image url'

        leftIcon={{ type: 'material', name: 'face' }}
        onChangeText={text => setImageUrl(text)}
        />

        <View>
          <Button
            style={{ marginBottom: 20, marginTop: 70 }}
            color="#5637DD"
            title="Submit"
          />
          <Button
            type="outline"
            title="Cancel"
            color="#5637DD"
            onPress={() => navigate("LogIn")}
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

  text: {
    textAlign: "center",
    fontSize: 30,
    fontFamily: "TrebuchetMS-Bold",
    fontWeight: "bold",
    margin: 40,
    marginBottom: 40,
  },
});
export default Register;
