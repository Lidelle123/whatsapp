
import { useState } from 'react';
import {View, StyleSheet, Text, useWindowDimensions} from 'react-native'
import {TabView, SceneMap } from 'react-native-tab-view';
//import {} from 'react-native-web'

const ChatScreen = () => (
    <View style={Styles.screenContainer} >
        <FlatListChat />
    </View>

);
const StatusScreen = () => (
    <View style={styles.screenContainer}>
        <Text>Status</Text>
    </View>
);
const CallsScreen = () => (
    <View style={styles.screenContainer}>
        <Text>Calls</Text>
    </View>
);

const renderScene = SceneMap({
    first: ChatScreen,
    second: StatusScreen,
    third: CallsScreen,
});
const layout = useWindowDimensions();

const [index, setIndex] =useState(0);
const [routes] = React.useState([
    {key: 'first', title: 'chats'},
    {key: 'second', title: 'status'},
    {key: 'third', title: 'status' },

]);

const styles = StyleSheet.create({
    
})

const ZappTabView = () => {
    return(
        <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
    />
    )
    
};

export default ZappTabView;