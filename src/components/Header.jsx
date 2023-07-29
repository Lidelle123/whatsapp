import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import WhatsAppMenu from './components/WhatsappMenu'; // Assuming WhatsAppMenu.js is the filename for the WhatsAppMenu component

const Header = () => {
  const [isMenuVisible, setMenuVisible] = useState(false);

  const handleMenuClick = () => {
    setMenuVisible(!isMenuVisible);
  };

  const handleOptionPress = (option) => {
    // Implement your logic here to handle the selected option
    console.log('Selected option:', option);
    setMenuVisible(false); // Hide the menu after an option is selected
  };

  return (
    <View style={headerStyles.headerContainer}>
      <View>
        <Text style={headerStyles.headerText}>WhatsApp</Text>
      </View>
      <View style={headerStyles.headerIcons}>
        <TouchableOpacity onPress={() => {/* Action to execute */}}>
          <Ionicons name="camera" style={[headerStyles.icon, { marginRight: 15 }]} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {/* Action to execute */}}>
          <Ionicons name="search" style={[headerStyles.icon, { marginRight: 15 }]} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleMenuClick}>
          <Ionicons name="menu" style={[headerStyles.icon, { marginRight: 15 }]} />
        </TouchableOpacity>
      </View>
      {/* WhatsAppMenu container */}
      <View style={headerStyles.menuContainer}>
        <WhatsAppMenu isVisible={isMenuVisible} onOptionPress={handleOptionPress} />
      </View>
    </View>
  );
};

const headerStyles = StyleSheet.create({
    headerContainer:{
        height: 50,
        backgroundColor: '#075e54',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        zIndex: 1,
    },
    headerIcons:{
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 'auto',
        fontSize: '20px',
        color: 'white',
        marginHorizontal: 5,
    },
    headerText:{
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },
    menuContainer: {
        position: 'absolute',
        top: StatusBar.currentHeight + 56, // Add the header height plus status bar height
        right: 0,
        width:200
      },

})

export default Header;