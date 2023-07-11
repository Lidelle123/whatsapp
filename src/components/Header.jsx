import { TouchableOpacity, View, Text, StyleSheet } from "react-native"
//import { TabView } from "react-native-tab-view"
import {Ionicons} from '@expo/vector-icons'

const Header = ()=> {
    return(
        <View style={headerStyles.headerContainer}>
            <View><Text style={headerStyles.headerText}>WhatsApp</Text></View>
            <View style={headerStyles.headerIcons}>
                <TouchableOpacity onPress={()=>{/*Action a executer*/}}>
                    <Ionicons name="camera"  style={headerStyles.headerIcons} />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{ }}>
                    <Ionicons name="search" marginRight={15} style={headerStyles.headerIcons} />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{ }}>
                    <Ionicons name="menu" style={headerStyles.headerIcons} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

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
        fontSize: '20px',
        color: 'white',
        marginHorizontal: 5,
    },
    headerText:{
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },

})

export default Header;