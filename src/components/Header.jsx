import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar, TouchableWithoutFeedback, Modal} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import WhatsAppMenu from './WhatsappMenu'; // Assuming WhatsAppMenu.js is the filename for the WhatsAppMenu component

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
          <Ionicons name="camera" style={[headerStyles.headerIcons, { marginRight: 15 }]} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {/* Action to execute */}}>
          <Ionicons name="search" style={[headerStyles.headerIcons, { marginRight: 15 }]} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleMenuClick}>
          <Ionicons name="menu" style={[headerStyles.headerIcons, { marginRight: 15 }]} />
        </TouchableOpacity>
      </View>
      {/* WhatsAppMenu container */}
      
      <Modal
        transparent
        visible={isMenuVisible}
        onRequestClose={() => setMenuVisible(false)}
      >
        <TouchableWithoutFeedback onPress={() => setMenuVisible(false)}>
          <View style={modalStyles.modalView} />
        </TouchableWithoutFeedback>
        <View style={headerStyles.menuContainer}>
          <WhatsAppMenu isVisible={isMenuVisible} onOptionPress={handleOptionPress} />
        </View>
      </Modal>
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
        
    },
    headerIcons:{
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 'auto',
        fontSize: 20,
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
        top:StatusBar.currentHeight-70, // Add the header height plus status bar height
        right: 0,
        width:200,
      },

})

const modalStyles = StyleSheet.create({
    modalView: {
      flex: 1,
      
    },
   
   
  });
  

export default Header;