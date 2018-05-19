import React from 'react';
import { MapView } from 'expo';
import { StyleSheet, Text , View, StatusBar} from 'react-native'
import { Constants, Location, Permissions } from 'expo';
import { Spinner } from 'native-base';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Drawer } from 'native-base';
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
            (
                <React.Fragment>
                    <MapHelper markerInicial={this.estado.markerInicial}
                        region={this.estado.region}
                        arrayMarkers={this.estado.markers}
                    />
                    <Button onPress={() => this.props.navigation.navigate('SignUp')} style={Style.buttonStyle} >
                        <Text style={Style.buttonTextStyle}>Selecione um evento!</Text>
                    </Button>   
                </React.Fragment>                
            );
        return (
            <React.Fragment>
                <StatusBar
                    backgroundColor="#002141"  
                />
                <View style={{height: 56, paddingTop: StatusBar.currentHeight, marginBottom: 20}}>
                    <Header style={styles.headerStyle}>
                        <Left>
                            <Button style={{width: 100}} onPress={() => this.props.navigation.openDrawer()} transparent>
                                <Icon name='menu'/>
                            </Button>
                        </Left>
                        <Body>
                            <Title>BahiArte</Title>
                        </Body>
                    </Header>
                </View> 
                <View >
                    {component}
                </View>
            </React.Fragment>
        )
    }
}

const Style = StyleSheet.create({
    map: {
        width: 500,
        height:500,
    },
    buttonStyle: {
        height: 120,
        backgroundColor: '#D30C0F',
        width: "100%",  
        alignItems: 'center',
    },
    buttonTextStyle: {
        width: '100%',
        color: "white",
        fontSize: 22,
        textAlign: "center",
    },
})