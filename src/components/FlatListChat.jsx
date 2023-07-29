
import React from "react";
import {StyleSheet, FlatList, View, Text, Image, TouchableOpacity} from 'react-native'
import { useNavigation } from '@react-navigation/native';



const FlatListChat = () => {

    const navigation = useNavigation();
    
    
       const data=[
            {id:1, name: 'John', message: [{text:'Hello!'},{text:'how are you?'},], image: require('../images/john.png'), isNewMessage: true },
            {id:2,name: 'Jane', message: [{text:'Hi there!'}], image: require('../images/john.png'), isNewMessage: false },
            {id:3, name: 'Tom', message: [{text:'Good morning!'}], image: require('../images/john.png'), isNewMessage: true },
            {id:4, name: 'Jane', message: [{text:'Hi there!'}], image: require('../images/john.png'), isNewMessage: false },
            {id:5, name: 'Tom', message: [{text:'Good morning!'}], image: require('../images/john.png'), isNewMessage: true },
            {id:6, name: 'Jane', message: [{text:'Hi there!'}], image: require('../images/john.png'), isNewMessage: false },
            {id:7, name: 'Tom', message: [{text:'Good morning!'}], image: require('../images/john.png'), isNewMessage: true },
            {id:8, name: 'Jane', message: [{text:'Hi there!'}], image: require('../images/john.png'), isNewMessage: false },
            {id:9, name: 'Tom', message: [{text:'Good morning!'}], image: require('../images/john.png'), isNewMessage: true },
            {id:10, name: 'Jane', message: [{text:'Hi there!'}], image: require('../images/john.png'), isNewMessage: false },
            {id:11, name: 'Tom', message: [{text:'Good morning!'}], image: require('../images/john.png'), isNewMessage: true },
            {id:12, name: 'Jane', message: [{text:'Hi there!'}], image: require('../images/john.png'), isNewMessage: false },
            {id:13, name: 'Tom', message: [{text:'Good morning!'}], image: require('../images/john.png'), isNewMessage: true },
        ]

        const handleChatPress = (item) => {
            navigation.navigate('Chat', { name: item.name, messages: item.message });
          };

          return (
            <>
            
            
            <FlatList
              data={data}

              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => handleChatPress(item)}>
                  <View style={flatListStyles.itemContainer}>
                    <Image source={item.image} style={flatListStyles.image} />
                    <View style={{ flex: 1 }}>
                      <Text style={flatListStyles.name}>{item.name}</Text>
                      <Text style={flatListStyles.message}>{item.message[item.message.length - 1].text}</Text>
                    </View>
                    {item.isNewMessage && <View style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: 'green' }} />}
                  </View>
                </TouchableOpacity>
              )}
        

        

    />
    </>
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
