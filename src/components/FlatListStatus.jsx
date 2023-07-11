import { View, FlatList, StyleSheet, Text, Image } from "react-native-web"


const FlatListStatus = () =>{
    return(
        <FlatList
            data = {[
                {name: 'caelle', date: "Aujourd'hui, 13:27", nbr: 3, image: require('../images/john.png')},
                {name: 'pavel', date: "Aujourd'hui, 12:45", nbr: 1, image: require('../images/john.png')},
            ]} 

            renderItem={({ item }) => (
                <View style={styles.itemsContainer}>
                  <Image source={item.image} style={styles.image} />
                    <View style={styles.textContainer}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.date}>{item.date}</Text>
                    </View>
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
    })

export default FlatListStatus;