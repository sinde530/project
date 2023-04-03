import React from 'react';
import { StyleSheet, Text } from 'react-native';


const styles = StyleSheet.create({
    title: {
        fontSize :40,
        fontWeight : '600',
        color : 'black',
        margin : 40,
    },
});

interface Prop{
    chrildren: string;
}

const Title = ({chrildren}: Prop) => {
    return <Text style ={styles.title}>{chrildren}</Text>;    
};

export default Title;


