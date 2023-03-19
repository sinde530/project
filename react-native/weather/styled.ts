import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'pink',
    //   alignItems: 'center',
    //   justifyContent: 'center',
    },
    city: {
        flex: 1.2,
        // backgroundColor: 'blue',
        justifyContent: "center",
        alignItems: "center"
    },
    cityName: {
        fontSize: 68,
        fontWeight: "500"
    },
    weather: {
        flex: 3,
    },
    day: {
        flex:1,
        alignItems: "center",
        // justifyContent: "center"
    },
    temp: {
        fontSize: 178,
        marginTop: 50
    },
    description: {
        fontSize: 60,
        marginTop: -30
    },
});