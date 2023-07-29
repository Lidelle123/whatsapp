//import { FlatList } from "react-native-web"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import FlatListChat from "./FlatListChat.jsx"

import ZappTabView from "./ZappTabView.jsx"

import ChatScreen from './ChatScreen.jsx';

const Stack = createNativeStackNavigator();

const Interface = () => {
    return (
        <>
            
            <NavigationContainer>
                <Stack.Navigator initialRouteName="ZappTabView">
                    <Stack.Screen 
                    name="ZappTabView" 
                    component={ZappTabView}
                    options={{ headerShown: false }}
                     />
                    <Stack.Screen
                    name="Chat"
                    component={ChatScreen}
                    options={{ headerShown: false }}
                    
                    />
                </Stack.Navigator>
               
            </NavigationContainer>
            
        </>
    )
}

export default Interface;