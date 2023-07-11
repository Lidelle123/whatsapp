
import React from "react";
import {StyleSheet, FlatList, View, Text, Image} from 'react-native'

const FlatListChat = () => {
    return(
        <FlatList
        data={[
            { name: 'John', message: 'Hello!', image: require('../images/john.png'), isNewMessage: true },
            { name: 'Jane', message: 'Hi there!', image: require('../images/john.png'), isNewMessage: false },
            { name: 'Tom', message: 'Good morning!', image: require('../images/john.png'), isNewMessage: true },
            { name: 'Jane', message: 'Hi there!', image: require('../images/john.png'), isNewMessage: false },
            { name: 'Tom', message: 'Good morning!', image: require('../images/john.png'), isNewMessage: true },
            { name: 'Jane', message: 'Hi there!', image: require('../images/john.png'), isNewMessage: false },
            { name: 'Tom', message: 'Good morning!', image: require('../images/john.png'), isNewMessage: true },
            { name: 'Jane', message: 'Hi there!', image: require('../images/john.png'), isNewMessage: false },
            { name: 'Tom', message: 'Good morning!', image: require('../images/john.png'), isNewMessage: true },
            { name: 'Jane', message: 'Hi there!', image: require('../images/john.png'), isNewMessage: false },
            { name: 'Tom', message: 'Good morning!', image: require('../images/john.png'), isNewMessage: true },
            { name: 'Jane', message: 'Hi there!', image: require('../images/john.png'), isNewMessage: false },
            { name: 'Tom', message: 'Good morning!', image: require('../images/john.png'), isNewMessage: true },
        ]}

        renderItem={({item}) =>(
            <View style={flatListStyles.itemContainer}>
                <Image source={item.image} style={flatListStyles.image}/>
                <View style={{ flex: 1 }}>
                    <Text style={flatListStyles.name}>{item.name}</Text>
                    <Text style={flatListStyles.message}>{item.message}</Text>
                </View>
                {item.isNewMessage && <View style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: 'green' }} />}
            </View>
            
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
