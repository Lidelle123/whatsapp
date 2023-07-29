
import { Ionicons } from '@expo/vector-icons';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const ChatScreen = ({ navigation, route }) => {
  const { name, messages } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <View style={styles.headerContent}>
          <Image source={require('../images/john.png')} style={styles.headerImage} />
          <Text style={styles.headerName}>{name}</Text>
        </View>
        <View style={styles.headerIcons}>
          <TouchableOpacity>
          <Ionicons name="videocam" size={16} color="white" style={styles.headerIcon} />
          </TouchableOpacity>
          <TouchableOpacity>
          <Ionicons name="call" size={16} color="white" style={styles.headerIcon} />
          </TouchableOpacity>
          <TouchableOpacity>
          <Ionicons name="menu" color="white" style={styles.headerIcon} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.messageContainer}>
        {messages && messages.map((message, index) => (
          <View key={index} style={styles.messageItem}>
            <Text>{message.text}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
    backgroundColor: '#075e54',
  },
  backIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  headerContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  headerName: {
    //fontWeight: 'bold',
    color:'white',
    fontSize: 18,
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerIcon: {
    width: 24,
    height: 24,
    marginLeft: 10,
  },
  messageContainer: {
    flex: 1,
    padding: 15,
  },
  messageItem: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
  },
});

export default ChatScreen;

