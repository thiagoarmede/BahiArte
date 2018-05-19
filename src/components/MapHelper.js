import React from 'react';
import { View } from 'react-native'
import { Dimensions, StyleSheet } from 'react-native'
import { MapView } from 'expo';
import { Marker } from 'react-native-maps';
import { toJS } from 'mobx';

export default class MapHelper extends React.Component {
    render(){
        return(
            <MapView
                style={Style.map}
                region={this.props.region}
                // onRegionChange={() => this.onRegionChange}
                zoomEnabled={true}
                showsPointsOfInterest={true}
                showsCompass={true}
                showsBuildings={true}
                showsMyLocationButton={true}
                showsUserLocation={true}
            >
                {toJS(this.props.arrayMarkers).map((marker, i) => {
                    console.log("Marker: ", marker);
                    const coordinate = {
                        latitude: marker.latitude,
                        longitude: marker.longitude
                    }
                    return(
                        <Marker coordinate={{
                            latitude: marker.latitude,
                            longitude: marker.longitude
                        }}
                        key={i}/>
                    );
                })}
            </MapView>
        )}
}


const Style = StyleSheet.create({
    map: {
        width: 500,
        height:500,
    }
})