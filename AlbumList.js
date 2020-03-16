import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
const AlbumList = () => {
    return (
        <ScrollView bouncesZoom={false}>
            <View>
                <View style={styles.viewStyle}>
                    <Text style={styles.textStyle}>Some Like It Hot!!
                </Text>
                </View>

                <View style={styles.viewStyle}>
                    <Text style={styles.textStyle}>『現状ディストラクション』</Text>
                </View>

                <View style={styles.viewStyle}>
                    <Text style={styles.textStyle}>Rage of Dust
                </Text>
                </View>

                <View style={styles.viewStyle}>
                    <Text style={styles.textStyle}>Genjyo Destruction
                </Text>
                </View>

                <View style={styles.viewStyle}>
                    <Text style={styles.textStyle}>I Wanna Be
                </Text>
                </View>
            </View>
        </ScrollView>

    );
};

const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: "#F8F8F8",
        justifyContent: "center",
        alignItems: "center",
        height: 100,
        paddingTop: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,

    },
    textStyle: {
        fontSize: 20
    },

});


export default AlbumList;