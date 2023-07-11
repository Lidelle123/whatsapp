import {View, FlatList, Text, StyleSheet, Image} from 'react-native'
import {Ionicons} from '@expo/vector-icons';


const FlatListCall = () => {
    return(
        <FlatList
            data = {[
                {name: 'pavel', date:'2 juillet, 10:10' ,isAudio: true, isVideo: true, missedCall: false, receivedCall: true, image: require('../images/john.png')},
                {name: 'Ma Miss', date:'Yesterday, 07:33' ,isAudio: true, isVideo: false, missedCall: true, receivedCall: false, image: require('../images/john.png')},
                {name: 'Genie', date:'6 july, 12:43' ,isAudio: true, isVideo: false, missedCall: false, receivedCall: true, image: require('../images/john.png')},
                {name: 'Manish', date:'1 july, 17:34' ,isAudio: true, isVideo: false, missedCall: false, receivedCall: true, image: require('../images/john.png')},
                {name: 'joelchou', date:'28 june, 11:42' ,isAudio: false, isVideo: true, missedCall: true, receivedCall: false, image: require('../images/john.png')},
                {name: 'pavel', date:'2 juillet, 10:10' ,isAudio: false, isVideo: true, missedCall: false, receivedCall: true, image: require('../images/john.png')},
                {name: 'Ma Miss', date:'Yesterday, 07:33' ,isAudio: true, isVideo: false, missedCall: true, receivedCall: false, image: require('../images/john.png')},
                {name: 'Genie', date:'6 july, 12:43' ,isAudio: true, isVideo: false, missedCall: false, receivedCall: true, image: require('../images/john.png')},
                {name: 'Manish', date:'1 july, 17:34' ,isAudio: true, isVideo: false, missedCall: false, receivedCall: true, image: require('../images/john.png')},
                {name: 'joelchou', date:'28 june, 11:42' ,isAudio: false, isVideo: true, missedCall: true, receivedCall: false, image: require('../images/john.png')},
            ]}
            renderItem={({ item }) => (
                <View style={styles.itemsContainer}>
                  <Image source={item.image} style={styles.image} />
                  <View style={styles.textContainer}>
                    <Text style={styles.name}>{item.name}</Text>
                    <View style={styles.dateContainer}>
                        {item.missedCall ? (
                            <Ionicons name="arrow-down-outline" size={16} color="red" style={[styles.icon, { transform: [{ rotate: '45deg' }], borderRadius: 0 }]} />
                        ) : (
                            <Ionicons name="arrow-up-outline" size={16} color="green" style={[styles.icon, { transform: [{ rotate: '45deg' }], borderRadius: 0 }]} />
                        )}
                        
                        <Text style={styles.date}>{item.date}</Text>
                    </View>
                    </View>
                    {item.isVideo ? (
                    <Ionicons name="call-outline" size={16} color="#25D366" style={styles.icon} />
                  ) : (
                    <Ionicons name="videocam-outline" size={16} color="#25D366" style={styles.icon} />
                  )}
                  
                </View>
              )}
         />
    )
}

const styles= StyleSheet.create({
    itemsContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    image:{
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 5,
    },
    name:{
        fontWeight: 'bold'
    },
    date:{ 
        color: 'gray',
    },
    textContainer:{
        flex: 1,
     },
     callInfoContainer:{
        flexDirection: 'row',
        alignItems: 'center',
     },
     dateContainer: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      icon: {
        marginHorizontal: 5,
        
      },
})

export default FlatListCall;