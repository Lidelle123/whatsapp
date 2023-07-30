
import React from "react";
import {StyleSheet, FlatList, View, Text, Image, TouchableOpacity, ScrollView} from 'react-native'
import { useNavigation } from '@react-navigation/native';



const FlatListChat = () => {

    const navigation = useNavigation();
    
    
       const data=[
        {id: 1,
        name: 'John',
        messages: [
          { text: 'Hello!', isReceived: true },
          { text: 'How are you?', isReceived: false },
          { text: 'I am good!', isReceived: true },
          { text: 'That\'s great!', isReceived: false },
          { text: 'What are you up to?', isReceived: false },
          { text: 'Just working on a project.', isReceived: true },
          { text: 'Sounds interesting!', isReceived: false },
          { text: 'It is!', isReceived: true },
          { text: 'Well, talk to you later!', isReceived: true },
          { text: 'Sure, bye!', isReceived: false },
        ],
        image: require('../images/john.png'),
        isNewMessage: true,
      },
      {
        id: 2,
        name: 'Jane',
        messages: [
          { text: 'Hi there!', isReceived: true },
          { text: 'How was your day?', isReceived: false },
          { text: 'It was good!', isReceived: true },
          { text: 'Did anything exciting happen?', isReceived: true },
          { text: 'Not really.', isReceived: false },
          { text: 'Same old, same old.', isReceived: true },
          { text: 'Haha, I get it!', isReceived: false },
          { text: 'Anyway, I\'ll catch up with you later!', isReceived: false },
          { text: 'Sure, talk to you later!', isReceived: true },
          { text: 'Bye!', isReceived: false },
        ],
        image: require('../images/john.png'),
        isNewMessage: false,
      },{id:3, name: 'Tom', messages: [{text:'Good morning!'}], image: require('../images/john.png'), isNewMessage: true },
            {id:4, name: 'Jane', messages: [{text:'Hi there!'}], image: require('../images/john.png'), isNewMessage: false },
            {id:5, name: 'Tom', messages: [{text:'Good morning!'}], image: require('../images/john.png'), isNewMessage: true },
            {id:6, name: 'Jane', messages: [{text:'Hi there!'}], image: require('../images/john.png'), isNewMessage: false },
            {id:7, name: 'Tom', messages: [{text:'Good morning!'}], image: require('../images/john.png'), isNewMessage: true },
            {id:8, name: 'Jane', messages: [{text:'Hi there!'}], image: require('../images/john.png'), isNewMessage: false },
            {id:9, name: 'Tom', messages: [{text:'Good morning!'}], image: require('../images/john.png'), isNewMessage: true },
            {id:10, name: 'Jane', messages: [{text:'Hi there!'}], image: require('../images/john.png'), isNewMessage: false },
            {id:11, name: 'Tom', messages: [{text:'Good morning!'}], image: require('../images/john.png'), isNewMessage: true },
            {id:12, name: 'Jane', messages: [{text:'Hi there!'}], image: require('../images/john.png'), isNewMessage: false },
            {id:13, name: 'Tom', messages: [{text:'Good morning!'}], image: require('../images/john.png'), isNewMessage: true },
        ]

        const handleChatPress = (item) => {
            navigation.navigate('Chat', { name: item.name, messages: item.messages });
          };

          return (
  
          
            <FlatList
              data={data}

              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => handleChatPress(item)}>
                  <View style={flatListStyles.itemContainer}>
                    <Image source={item.image} style={flatListStyles.image} />
                    <View style={{ flex: 1 }}>
                      <Text style={flatListStyles.name}>{item.name}</Text>
                      <Text style={flatListStyles.message}>{item.messages[item.messages.length - 1].text}</Text>
                    </View>
                    {item.isNewMessage && <View style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: 'green' }} />}
                  </View>
                </TouchableOpacity>
              )}
        

        

    />
  
    )
    
}; 

const flatListStyles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'lightgray'
    },
    image:{
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 5,
    },
    name:{
        fontWeight: 'bold',
    },
    message:{
        color: 'gray',
    },
    textContainer:{
        flex: 1,
    }

})

export default FlatListChat;
