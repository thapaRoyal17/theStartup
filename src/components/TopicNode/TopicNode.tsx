import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import Colors from '../../constants/Colors';

const TopicNode = () => {
  return (
    <View style={styles.container}>
      {/* image */}
      <View style={styles.circle}>
        <Image source={{}} style={styles.image} />
      </View>

      <Text style={styles.title}>Variables</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'red',
  },
  circle: {
    width: 100,
    aspectRatio: 1,
    borderRadius: 50,
    backgroundColor: Colors.light.tertiary,
  },
  image: {},
  title: {},
});

export default TopicNode;
