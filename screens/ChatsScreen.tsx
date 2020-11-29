import * as React from 'react';
import { StyleSheet } from 'react-native';
import ChatListItem from '../components/ChatListitem';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import ChatRooms from '../data/ChatsRooms'

export default function ChatsScreen() {
  return (
    <View style={styles.container}>
        <ChatListItem chatRoom={ChatRooms[0]}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

});
