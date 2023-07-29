import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, StatusBar } from 'react-native';

const WhatsAppMenu = ({ isVisible, onOptionPress }) => {
  const handleOptionPress = (option) => {
    onOptionPress(option);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => handleOptionPress('New Group')}>
        <Text style={styles.optionText}>New Group</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleOptionPress('New Broadcast')}>
        <Text style={styles.optionText}>New Broadcast</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleOptionPress('Linked devices')}>
        <Text style={styles.optionText}>Linked devices</Text>
      </TouchableOpacity>
      {/* Add more TouchableOpacity components for additional menu options */}
      <TouchableOpacity onPress={() => handleOptionPress('Starred Messages')}>
        <Text style={styles.optionText}>Starred Messages</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleOptionPress('Settings')}>
        <Text style={styles.optionText}>Settings</Text>
      </TouchableOpacity>
      {/* Add more options as needed */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: StatusBar.currentHeight + 56, // Add the header height plus status bar height
    right: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  optionText: {
    fontSize: 18,
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
});

export default WhatsAppMenu;
