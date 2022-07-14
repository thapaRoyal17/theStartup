import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import TopicNode from '../../components/TopicNode';

const ModuleScreen = () => {
  return (
    <View style={styles.container}>
      <TopicNode />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
});

export default ModuleScreen;
