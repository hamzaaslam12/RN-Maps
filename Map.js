import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MapView, { Callout, Marker } from 'react-native-maps'
import { FontAwesome } from 'react-native-vector-icons/FontAwesome'

const MapComponent = () => {
    return (
        <MapView
            style={styles.map}
            initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}
        >
            <Marker
                coordinate={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                }}
                pinColor='red'
                //   image={require('map.jpg' /*'https://cdn3.vectorstock.com/i/1000x1000/85/47/red-maps-pin-location-map-icon-location-pin-pin-vector-24358547.jpg' */)}
                title='Location'
            >

                <Callout tooltip>
                    <View>
                    <View style={styles.bubble}>
                        <Text style={styles.name}>Favourite Resturant</Text>
                        <Text>Short Description</Text>
                    </View>
                    <View style={styles.arrowBorder} />
                    <View style={styles.arrow} />
                    </View>
                </Callout>
            </Marker>
        </MapView>
    )
}

export default MapComponent

const styles = StyleSheet.create({

    map: {
        width: '100%',
        height: '100%'

    },
    container: {
          flex: 1,
        },
        searchBox: {
          position:'absolute', 
          marginTop: Platform.OS === 'ios' ? 40 : 20, 
          flexDirection:"row",
          backgroundColor: '#fff',
          width: '90%',
          alignSelf:'center',
          borderRadius: 5,
          padding: 10,
          shadowColor: '#ccc',
          shadowOffset: { width: 0, height: 3 },
          shadowOpacity: 0.5,
          shadowRadius: 5,
          elevation: 10,
        },
        chipsScrollView: {
          position:'absolute', 
          top:Platform.OS === 'ios' ? 90 : 80, 
          paddingHorizontal:10
        },
        chipsIcon: {
          marginRight: 5,
        },
        chipsItem: {
          flexDirection:"row",
          backgroundColor:'#fff', 
          borderRadius:20,
          padding:8,
          paddingHorizontal:20, 
          marginHorizontal:10,
          height:35,
          shadowColor: '#ccc',
          shadowOffset: { width: 0, height: 3 },
          shadowOpacity: 0.5,
          shadowRadius: 5,
          elevation: 10,
        },
        scrollView: {
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          paddingVertical: 10,
        },
        endPadding: {
        //   paddingRight: width - CARD_WIDTH,
        },
        card: {
          // padding: 10,
          elevation: 2,
          backgroundColor: "#FFF",
          borderTopLeftRadius: 5,
          borderTopRightRadius: 5,
          marginHorizontal: 10,
          shadowColor: "#000",
          shadowRadius: 5,
          shadowOpacity: 0.3,
          shadowOffset: { x: 2, y: -2 },
        //   height: CARD_HEIGHT,
        //   width: CARD_WIDTH,
          overflow: "hidden",
        },
        cardImage: {
          flex: 3,
          width: "100%",
          height: "100%",
          alignSelf: "center",
        },
        textContent: {
          flex: 2,
          padding: 10,
        },
        cardtitle: {
          fontSize: 12,
          // marginTop: 5,
          fontWeight: "bold",
        },
        cardDescription: {
          fontSize: 12,
          color: "#444",
        },
        markerWrap: {
          alignItems: "center",
          justifyContent: "center",
          width:50,
          height:50,
        },
        marker: {
          width: 30,
          height: 30,
        },
        button: {
          alignItems: 'center',
          marginTop: 5
        },
        signIn: {
            width: '100%',
            padding:5,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 3
        },
        textSign: {
            fontSize: 14,
            fontWeight: 'bold'
        },
        arrow: {
            backgroundColor: 'transparent',
            borderTopColor: '#007a87'
        }
      });
