
import React, { useState } from 'react';
import {View, StyleSheet, Text, useWindowDimensions} from 'react-native'
import {TabView, TabBar, SceneMap } from 'react-native-tab-view';
//import {} from 'react-native-web'
import FlatListChat from './FlatListChat';
import FlatListCall from './FlatListCall';
import FlatListStatus from './FlatListStatus';

const ChatScreen = () => (
    <View style={styles.screenContainer} >
        <FlatListChat />
    </View>

);
const StatusScreen = () => (
    <View style={styles.screenContainer}>
        <FlatListStatus />
    </View>
);
const CallsScreen = () => (
    <View style={styles.screenContainer}>
        <FlatListCall />
    </View>
);

const renderScene = SceneMap({
    first: ChatScreen,
    second: StatusScreen,
    third: CallsScreen,
});


const styles = StyleSheet.create({
    
})

const ZappTabView = () => {
    const layout = useWindowDimensions();

    const [index, setIndex] =useState(0);
    const [routes] = React.useState([
        {key: 'first', title: 'Chats'},
        {key: 'second', title: 'Status'},
        {key: 'third', title: 'Calls' },

    ]);

    return(
        <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        style = {{ }}
        tabBarStyle={{ backgroundColor: 'red' }}
        tabBarOptions={{
            style: { backgroundColor: 'red' },
          }}
          renderTabBar={props => <TabBar {...props} style={{backgroundColor: '#075e54'}}/>}
    />
    )
    
};

export default ZappTabView;