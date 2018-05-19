import React from 'react';
import { View } from 'react-native'
import { Dimensions, StyleSheet, Image } from 'react-native'
import { MapView } from 'expo';
import { Marker } from 'react-native-maps';
import { toJS } from 'mobx';
import { observer } from 'mobx-react';

@observer
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
                    const coordinate = {
                        latitude: marker.latitude,
                        longitude: marker.longitude
                    }
                    return(
                        <Marker coordinate={{
                                latitude: marker.latitude,
                                longitude: marker.longitude,
                            }}  
                            key={i}
                            onPress={() => this.props.onSelectMarker(marker)} 
                            image={this.props.eventType === 'music' 
                                ? marker.gratuidade ? require('../../assets/bluemarker.png') : require('../../assets/redmarker.png')
                                : require('../../assets/exhibitionmarker.png')
                            }
                        
                        />
                    );
                })}
            </MapView>
        )}
}


const Style = StyleSheet.create({
    map: {
        width: 500,
        height:480,
    }
})