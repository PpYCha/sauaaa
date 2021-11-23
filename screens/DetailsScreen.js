import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const DetailsScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button
        title="Go to details screen...again"
        onPress={() => navigation.push('Details')}
      />
      <Button title="Go to home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go Back" onPress={() => navigation.goBack()} />
      <Button
        title="Go to the First Screen"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default DetailsScreen;
