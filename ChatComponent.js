import React, {
  Component,
  useCallback,
  useLayoutEffect,
  useState,
 } from "react";

import { GiftedChat } from "react-native-gifted-chat";
import { auth } from "./firebase";
import { View, StyleSheet, Text } from "react-native";
import { Button } from "react-native-elements";

class Chat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [],
    };
  }
  signOut() {
    auth
      .signOut()
      .then(() => {
        // Sign-out successful.
        navigation.replace("Login");
      })
      .catch((error) => {
        // An error happened.
      });
  }
  onSend(messages = []) {
    this.setState((previousState) => ({
      messages: GiftedChat.append(previousState.messages, messages),
    //   const {
    //     _id,
    //     createdAt,
    //     text,
    //     user,
    //     } = messages[0]
        
    }));
  }
  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={(messages) => this.onSend(messages)}
        user={{
            _id: auth?.currentUser?.email,
            name: auth?.currentUser?.displayName,
            avatar: auth?.currentUser?.photoURL
            }}
            
        showAvatarForEveryMessage={true}
      />
    );
  }
}
export default Chat;
