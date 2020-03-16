import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
const Header = () => {
    return (
        <View>
            <View style={styles.viewStyle}>
                <Text style={styles.textStyle}>
                    spyair
                </Text>
            </View>

        </View>

    );
};

const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: "#F8F8F8",
        justifyContent: "center",
        alignItems: "center",
        height: 100,
        paddingTop: 30,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,

    },
    textStyle: {
        fontSize: 30
    },

});
export default Header;