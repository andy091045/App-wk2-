import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Header from './Header';
import AlbumList from './AlbumList';
const App = () => {
  return (
    <View style={styles.viewStyle}>
      <Header />

      <Image
        style={styles.imageStyle}
        source={{
          uri:
            "https://pic.pimg.tw/vitaws/1424276879-2382213805.jpg"
        }}
      />


      < AlbumList />
    </View>

  );
};

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: "#F8F8F8",
    // justifyContent: "center",
    // alignItems: "center",

    paddingTop: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,

  },
  textStyle: {
    fontSize: 30
  },
  imageStyle: {
    backgroundColor: "#F8F8F8",
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
    height: 300,
    width: null,

  }
});
export default App;
