import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { MyColors } from "../theme/AppTheme";

interface Props {
    text: string;
    onPress: () => void;
}


const RoundedButton = ({text, onPress}: Props) => {
    return (
    <TouchableOpacity
        style={styles.RoundedButton}
        onPress={() => onPress()}
        >
        <Text style={styles.textButton}>{text}</Text>
    </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    RoundedButton: {
    width: '100%',
    height: 50,
    backgroundColor: MyColors.primary,
    alignItems: 'center',
    justifyContent:'center',
    borderRadius: 15,
    },
    textButton: {
    color: 'white',
    }
});

export default RoundedButton;