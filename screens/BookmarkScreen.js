import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

export const BookmarkScreen = () => {
  return (
    <View style={style.container}>
      <Text>BookmarkScreen</Text>
      <Button title="Click Here" onPress={() => alert('Button Clicked')} />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
