import React from 'react';
import { MapView } from 'expo';
import { StyleSheet, Text , View} from 'react-native'
import { Constants, Location, Permissions } from 'expo';
import { Spinner } from 'native-base';
import {observable} from 'mobx';
import {observer} from 'mobx-react';
import MapHelper from './MapHelper'
import firebase from 'firebase';



@observer
export default class Map extends React.Component {

    @observable loadingPosicao = true;
    @observable loadingDatabase = true;
    @observable estado = {
        location: null,
        errorMessage: null,
        region: {
            latitude: -12.978830,
            longitude: -38.504371,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        },
        markerInicial: {
            latitude: null,
            longitude: null
        },
        markers: []

    }

    _getLocationAsync = async () => {
        let {status} = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
            this.estado.errorMessage = 'Permission to access location was denied';
        }
        let location = await Location.getCurrentPositionAsync({});
        let region = {
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        }
        this.estado.markerInicial.latitude = location.coords.latitude;
        this.estado.markerInicial.longitude = location.coords.longitude;
        this.loadingPosicao = false;
    }

    fetchDatabase = () => {
        var self = this;
        firebase.database().ref('musica').once('value').then(function(snapshot) {
            console.log("Valor: ", snapshot.val());
            self.estado.markers = _.values(snapshot.val());
        });
        this.loadingDatabase = false;
    }


    componentWillMount() {
        this._getLocationAsync();
        this.fetchDatabase();
    }

    render(){
        const component = (this.loadingPosicao && this.loadingDatabase) ?
            ( <Spinner color={"blue"} />):
            (<MapHelper markerInicial={this.estado.markerInicial}
                region={this.estado.region}
                arrayMarkers={this.estado.markers}
            />);
        return (
            <View >
                {component}
            </View>
        )
    }
}

const Style = StyleSheet.create({
    map: {
        width: 500,
        height:500,
    }
})